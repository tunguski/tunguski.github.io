---
layout: post 
title: "Integration tests with Gitlab Docker and Nginx"
---

# Goal

* Create environment for automatic integration tests started from Gitlab CI
* On demand environments for UAT testing

# Prerequisites

Before we create our first automated integration build we have to install all required tools.

In all examples domain ```example.com``` should be replaced with your domain name.

## Docker

Installation guide is on [Docker page](https://docs.docker.com/installation/).

For Debian/Ubuntu it looks like:

```bash
$ sudo apt-get update
$ sudo apt-get install docker.io
```

Please consider installing [Docker Compose](https://docs.docker.com/compose/install/) as well.
It greatly simplifies managing sets of containers.

## Gitlab

I would recommend installing Gitlab as Docker containers. There is ```docker-compose.yml``` that
creates fully integrated Gitlab environment in seconds. 
[Here](https://github.com/sameersbn/docker-gitlab#quick-start) is the installation guide.

## Gitlab Runner 

If you installed Gitlab as a Docker container, best will be to do the same with runner. 
[Here](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/install/docker.md)
is complete instruction how to install it

### Privileged runner configuration

We need to configure properly our runner to allow it to create fully functional Docker images.

Build have some requirements:

1. It needs to execute ```docker``` command. To accomplish that it needs to see
   ```/var/run/docker.sock``` file from host.
1. It will create database images that contain actual backup state. In this post I assume
   backup files are somewhere in ```/opt``` directory on host. It would be better to
   retrieve backup files via ```wget```, but we will leave this part at the moment.

At the end sample runner configuration (```/etc/gitlab-runner/config.toml```) contains
this part:

{% highlight toml %}
concurrent = 1

[[runners]]
  name = "Maven Runner"
  url = "http://gitlab.example.com/ci/"
  token = "161c170d74f629942fd2444c19f29f"
  limit = 1
  executor = "docker"
  [runners.docker]
    image = "maven:latest"
    privileged = false
    volumes = ["/cache"]
    # allow any image and service to be runned by this configuration
    allowed_images = ["*", "*/*", "*/*/*"]
    allowed_services = ["*", "*/*"]

[[runners]]
  name = "Dind Privileged Runner"
  url = "http://gitlab.example.com/ci/"
  token = "02e9060f9db97c26f055ddefa5f870"
  limit = 1
  executor = "docker"
  [runners.docker]
    image = "gitlab/dind:latest"
    privileged = true
    volumes = ["/cache", "/var/run/docker.sock:/var/run/docker.sock", "/opt:/opt:ro"]
{% endhighlight %}

So here first runner configuration is able to run any container with any services.
Second configuration is able to use ```docker``` and build images.

I've tagged them in Gitlab as:

1. ```mvn```, ```general``` (for first),
1. ```dind``` (for second).

So in build configuration (```.gitlab-ci.yml```) I'm able to choose what capabilities
are required to finnish the job.

## Nginx reverse proxy 

[Nginx reverse proxy](https://github.com/jwilder/nginx-proxy) is used to provide simple
host names for multiple environments placed on single server.

To start proxy you may use ```docker``` or ```docker-compose```.

With raw docker: 

{% highlight yaml %}
docker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy.
{% endhighlight %}

If you want to use ```docker-compose```:

{% highlight yaml %}
nginxproxy:
  image: jwilder/nginx-proxy
  restart: always
  ports:
    - 80:80
  volumes:
    - /var/run/docker.sock:/tmp/docker.sock:ro
{% endhighlight %}

**Remember** that you have to configure your dns to point to your server. That means
something like:

{% highlight text %}
example.com         IN      A     <your_server_ip>
*.example.com       IN      A     <your_server_ip>
{% endhighlight %} 

# Create Docker Images

Now we want our build to create images for testing purposes.

Database and application images should be configurationless - for ease of starting
new environments.

## Database image

Database image will contain all data inside. That way each start and stop
of new container will create new clean copy of database.

To create this container I've used ```mysql:5.6``` Dockerfile as a starting point.
But as I've said we don't want to save state so we have to remove volume
declaration from it.

I've created new Dockerfile that:

1. Removes volume declaration
1. Adds ```gzip``` utility - as I want to extract database backup file at the build time.
1. Copies backup file from host to image.
1. Runs script that will restore database state from backup file into image. 

{% highlight docker %}
FROM debian:jessie

# add our user and group first to make sure their IDs get assigned consistently, regardless of whatever dependencies get added
RUN groupadd -r mysql && useradd -r -g mysql mysql

RUN mkdir /docker-entrypoint-initdb.d

# FATAL ERROR: please install the following Perl modules before executing /usr/local/mysql/scripts/mysql_install_db:
# File::Basename
# File::Copy
# Sys::Hostname
# Data::Dumper
RUN apt-get update && apt-get install -y perl --no-install-recommends && rm -rf /var/lib/apt/lists/*

# gpg: key 5072E1F5: public key "MySQL Release Engineering <mysql-build@oss.oracle.com>" imported
RUN apt-key adv --keyserver ha.pool.sks-keyservers.net --recv-keys A4A9406876FCBD3C456770C88C718D3B5072E1F5

ENV MYSQL_MAJOR 5.6
ENV MYSQL_VERSION 5.6.27

RUN echo "deb http://repo.mysql.com/apt/debian/ jessie mysql-${MYSQL_MAJOR}" > /etc/apt/sources.list.d/mysql.list

# the "/var/lib/mysql" stuff here is because the mysql-server postinst doesn't have an explicit way to disable the mysql_install_db codepath besides having a database already "configured" (ie, stuff in /var/lib/mysql/mysql)
# also, we set debconf keys to make APT a little quieter
RUN { \
		echo mysql-community-server mysql-community-server/data-dir select ''; \
		echo mysql-community-server mysql-community-server/root-pass password ''; \
		echo mysql-community-server mysql-community-server/re-root-pass password ''; \
		echo mysql-community-server mysql-community-server/remove-test-db select false; \
	} | debconf-set-selections \
	&& apt-get update && apt-get install -y mysql-server="${MYSQL_VERSION}"* && rm -rf /var/lib/apt/lists/* \
	&& rm -rf /var/lib/mysql && mkdir -p /var/lib/mysql

# comment out a few problematic configuration values
# don't reverse lookup hostnames, they are usually another container
RUN sed -Ei 's/^(bind-address|log)/#&/' /etc/mysql/my.cnf \
	&& echo 'skip-host-cache\nskip-name-resolve' | awk '{ print } $1 == "[mysqld]" && c == 0 { c = 1; system("cat") }' /etc/mysql/my.cnf > /tmp/my.cnf \
	&& mv /tmp/my.cnf /etc/mysql/my.cnf

COPY docker-entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3306
CMD ["mysqld"]

RUN apt-get update && apt-get install -y gzip --no-install-recommends && rm -r /var/lib/apt/lists/*

ENV MYSQL_USER=my_user MYSQL_PASSWORD=my_user_password \ 
    MYSQL_DATABASE=my_database \
    MYSQL_ROOT_PASSWORD=root_password

ADD init_db.sh init_db.sh
ADD backups/my_database_dump.sql.gz /backups/my_database_dump.sql.gz

RUN ./init_db.sh

CMD /usr/bin/mysqld_safe 
{% endhighlight %}

And the script initializing database looks like this:

{% highlight bash %}
#!/bin/bash

./entrypoint.sh mysqld &

while ! timeout 1 bash -c "echo > /dev/tcp/localhost/3306"; do sleep 10; done

echo "Add user"
mysql -u root -p$MYSQL_ROOT_PASSWORD -e "CREATE USER '$MYSQL_USER'@'*' IDENTIFIED BY '$MYSQL_PASSWORD'"
echo "Grant all privileges"
mysql -u root -p$MYSQL_ROOT_PASSWORD -e "GRANT ALL ON $MYSQL_DATABASE.* TO '$MYSQL_USER'@'%'"
mysql -u root -p$MYSQL_ROOT_PASSWORD -e "FLUSH PRIVILEGES";

echo "Read data from backup"
zcat /backups/${MYSQL_DATABASE}_dump.sql.gz | mysql -u root -p$MYSQL_ROOT_PASSWORD $MYSQL_DATABASE 

ls -la /var/lib/mysql
{% endhighlight %}

**Warning:** you need to copy ```docker-entrypoint.sh``` file from ```mysql:5.6``` to
you image project.

### CI Build for image

Last thing we need to have to make it work is ```.gitlab-ci.yml``` that will define
how to build our database image.

{% highlight yaml %}
build-image:
  tags:
    # this will assure Gitlab knows what runner use to build image
    - dind
  script:
    # now we need to provide backup file for restore
    - mkdir backups
    - cp -v /opt/my_app/backups/* backups/
    # finally lets build new image and restore data state
    - docker build -t my_app/database .
{% endhighlight %}

If everything is ok, build will finnish with success and new Docker image
will be ready for use.

What's important, you don't need to configure this image anyhow.
It contains data, it will leave no dangling volumes after removal.

But remember **it is not transient**. So after removal all changes
made to database are lost.

**Beware:** Today it is possible that the command from ```.gitlab-ci.yml``` 
will produce so much output, that Gitlab will reject getting it from runner. 
I found that after adding something like ```find /var``` to ```script```
part of ```yml```.

## Application image

Application image will contain all the data needed to start the application.

### Dockerfile

Ok, you will have to do this part on your own, because this strongly
depends on specific application. I've was making my research basing
on ```PHP``` application.

There are some important things to remember:

1. Image should be totally stateless and working properly without any parameters.
1. If you need params, default values (when nothing was passed in env) should
   be provided.
1. No volumes. So if you are using existing image then check for volumes declared.

I've started from ```php:5.6``` image, but in the end I've created new Dockerfile
based on it. I've removed all volumes and added custom things needed for my app.

In particular my application used ```php-http``` library to get some data from other
servers. So I had to add building this lib into Dockerfile.

{% highlight Dockerfile %}
FROM debian:jessie

RUN apt-get update && apt-get install -y ca-certificates curl libpcre3 librecode0 libsqlite3-0 libxml2 --no-install-recommends && rm -r /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y php5 php5-cli php5-mcrypt php5-mysql php-pear php5-dev php-http cron libcurl4-gnutls-dev --no-install-recommends && rm -r /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y apache2-bin apache2.2-common git make --no-install-recommends && rm -rf /var/lib/apt/lists/*

RUN pecl install raphf \
    && echo "extension=raphf.so" >> /etc/php5/cli/php.ini \
    && pecl install propro \
    && echo "extension=propro.so" >> /etc/php5/cli/php.ini \
    && pecl install pecl_http \
    && echo "extension=http.so" >> /etc/php5/cli/php.ini

RUN rm -rf /var/www/html \ 
      && mkdir -p /var/lock/apache2 /var/run/apache2 /var/log/apache2 /var/www/html \
      && chown -R www-data:www-data /var/lock/apache2 /var/run/apache2 /var/log/apache2 /var/www/html

# Apache + PHP requires preforking Apache for best results
RUN a2dismod mpm_event && a2enmod mpm_prefork && a2enmod rewrite

RUN mv /etc/apache2/apache2.conf /etc/apache2/apache2.conf.dist && rm /etc/apache2/conf-enabled/* /etc/apache2/sites-enabled/*

RUN mkdir /var/www/html/public \
      && chown -R www-data:www-data /var/www/html \
      && touch /var/log/_cron.log \
      && chown www-data:www-data /var/log/_cron.log

COPY apache2.conf /etc/apache2/apache2.conf
COPY start.sh /usr/local/bin/
COPY apache2-foreground /usr/local/bin/
COPY html /var/www/html/

WORKDIR /var/www/html

EXPOSE 80
CMD start.sh
{% endhighlight %}

This configuration assumes that 

* you have all ```php:5.6``` helper files are placed with ```Dockerfile```,
* your application is placed in ```html``` subdirectory.

### CI Build for image

{% highlight yaml %}
build-image:
  tags:
# this will assure Gitlab knows what runner use to build image
    - dind
# synchronize builds - image should be created first
  stage: build 
  script:
    - docker build -t my_app/app . 

integration-test:
  image: my_app/app
  tags:
# this will assure Gitlab knows what runner use to build image
    - general 
# synchronize builds - tests should be executed after image creation
  stage: test
  services:
# application uses database service; it will be availible as my_app__database
# (two underscores replace slash)
   - my_app/database
  script:
# very primitive test
    - start.sh &
    - sleep 5
    - curl http://localhost
{% endhighlight %}

This script builds image with application and after that start simple test.

> ***Level accomplished!***

# Integration tests of container

Ok, automatic builds work, Docker images are created, everything looks good.

Now we will create separate project for integration tests capable for
multi application elastic setup.

## Integration tests project

New project contains files:

* ```.gitlab-ci.yml``` - contains definition how to run build
* ```docker-compose.yml``` - defines composition of integrated environment
  and all components
* ```setup.sh``` - script that configures variable build parameters and
  runs ```docker-compose```
* ```teardown.sh``` - script that shutdown environment after test

## Build definition: ```.gitlab-ci.yml```

This file tells Gitlab runner how to run test. It uses ```gitlab/dind```
Docker image because it is necessary to run ```docker-compose```.

{% highlight yaml %}
build-image:
  tags:
    - dind
  script:
# run startup script with timeout defined - if there is any problem
# build should finnish
    - timeout 30 /bin/bash setup.sh
# test you want to run
    - curl http://${CI_BUILD_REF:0:8}.example.com
# shutdown test environment
    - timeout 30 /bin/bash teardown.sh
{% endhighlight %}

## Integrated environment definition: ```docker-compose.yml```

This file tells ```docker-compose``` what are components and connections
between them in integrated environment.

{% highlight yaml %}
database:
  image: my_app/database 
# not needed for integration test but helpful for UAT
  restart: always
application:
  image: my_app/app 
# not needed for integration test but helpful for UAT
  restart: always
  environment:
# property will be replaced in setup.sh to reference build id
# this is used by reverse proxy to provide readable link to application
    - VIRTUAL_HOST
  links:
    - database
{% endhighlight %}

## Environment startup: ```setup.sh```

This script has to create unique readable name for newly created
environment.

{% highlight bash %}
#!/bin/bash

# this will be the name of new environment
BUILD_ID=${CI_BUILD_REF:0:8}

# create new directory with name of env
mkdir $BUILD_ID
# go to subdir
cd $BUILD_ID

# copy docker-compose.yml to subdir
cp ../docker-compose.yml . 

# replace VIRTUAL_HOST with domain name for reverse proxy
# example.com needs to be replaced with your domain 
cat docker-compose.yml | sed "s/VIRTUAL_HOST/VIRTUAL_HOST=$BUILD_ID.example.com/" > docker-compose.yml.bak 
mv docker-compose.yml.bak docker-compose.yml

docker-compose up > docker-compose.log &

# wait for environment to start
sleep 7
{% endhighlight %}

After that new environment is availible under link ```http://$BUILD_ID.example.com```.

## Environment shutdown: ```teardown.sh```

This script has to shutdown environment after finnishing tests.
It extracts name that was created for environment instance.

{% highlight bash %}
#!/bin/bash

# extract build name used in startup
BUILD_ID=${CI_BUILD_REF:0:8}

# go to docker-compose created for this build
cd $BUILD_ID

# shutdown environment
docker-compose stop 
yes | docker-compose rm 
{% endhighlight %}

# UAT environments on demand 

Last goal is to provide environment that persists for some time.
We don't know how long will it be, but:

* State should persist server restarts
* After removing environment, no data persists.

Basically we use same scripts that were provided for integration test project.
The only change is that ```teardown.sh``` shouldn't be runned without direct
manual command.

To accomplish that we start new environment using same project but with
manual script execution.

Remember that commands described below should be executed from integration 
project directory as root.

To start new environment we need to run ```setup.sh``` script with additional
env parameter:

{% highlight bash %}
env CI_BUILD_REF=uat001 ./setup.sh
{% endhighlight %}

Script will look for ```CI_BUILD_REF``` variable, so we need to configure it 
manually as above. Only first 8 chars from ```CI_BUILD_REF``` are taken into
account when creating environment name.

**After running script web server is accessible at address 
```http://uat001.example.com```.**

To remove our integration after tests we need to run ```teardown.sh```:

{% highlight bash %}
env CI_BUILD_REF=uat001 ./teardown.sh
{% endhighlight %}

# End

This configuration works well providing tools for use cases described in goals
section.

