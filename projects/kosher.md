---
layout: two_column
left_column: kosher_menu.html
project: gitlab-java-event-listener
title: "Kosher"
---

## What is Kosher?

Kosher integrates with Gitlab and provides automatic project quality checking.

## Build from sources

Clone [this repository](https://github.com/tunguski/gitlab-java-event-listener), build it

{% highlight bash %}
mvn clean install
{% endhighlight %}

and add dependency:

{% highlight xml %}
<dependency>
  <groupId>pl.matsuo.gitlab</groupId>
  <artifactId>base-listener</artifactId>
  <version>1.0-SNAPSHOT</version>
</dependency>
{% endhighlight %}

Now you need to create new docker container:

{% highlight bash %}
docker build -t tunguski/gitlab-java-event-listener .
{% endhighlight %}

## Configuring Kosher server

There are some additional steps required to fully configure Kosher server

### Generate rsa key that will be used to pull projects from Gitlab

### Register Kosher server as Gitlab application

## Running Kosher server

{% highlight bash %}
docker run -d --name gitlab-java-event-listener -p 10082:8080 tunguski/gitlab-java-event-listener
{% endhighlight %}

## How does it work?

Kosher contains a [list of builders](kosher/build.html) that perform automatic project build and provide result
information about project.
