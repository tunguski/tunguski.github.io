---
layout: two_column
left_column: kosher_menu.html
project: gitlab-java-event-listener
title: "Kosher"
---

## What is Kosher?

Kosher integrates with Gitlab and provides automatic project quality checking.

## Get it now

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

## How does it work?

Kosher contains a [list of builders](kosher/build.html) that perform automatic project build and provide result
information about project.
