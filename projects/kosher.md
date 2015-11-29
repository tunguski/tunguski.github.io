---
layout: two_column
left_column: kosher_menu.html
project: kosher
title: "Kosher"
---

## What is Kosher?

Kosher integrates with Gitlab and provides automatic project quality checking.

## Configuring Kosher server

There are some additional steps required to fully configure Kosher server

### Generate rsa key that will be used to pull projects from Gitlab

### Register Kosher server as Gitlab application

## Running Kosher server

{% highlight bash %}
docker run -d --name kosher -p 10082:8080 --volumes-from gitlab tunguski/kosher
{% endhighlight %}

```--volumes-from gitlab``` is important, because Kosher tries to clone repository if you did not configure ssh keys.

## Integrate project builds with Kosher

Add ```webhook``` to your project (```Project -> Settings -> Web Hooks```) pointing to ```kosher``` server:

    http://<kosher_host>:<kosher_port>/hooks
    
where ```kosher_host``` and ```kosher_port``` should be replaced to point to your kosher server instance.

Remember that ```kosher_host``` won't be ```localhost```, because for Gitlab that points to it's container.

## How does it work?

Kosher contains a [list of builders](kosher/build.html) that perform automatic project build and provide result
information about project.
