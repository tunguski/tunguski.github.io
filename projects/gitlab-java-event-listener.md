---
layout: two_column
left_column: projects_list.html
project: gitlab-java-event-listener
title: "Gitlab Java Event Listener Base Application"
---

## Gitlab Java Event Listener Base Application

Base application for creating GitLab event listener.

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

## Builders

### CheckStyle

### Cobertura

### Documentation

### FindBugs

### JavaNcss

### Jekyll

Generates project site and makes it availible for user.

**Properties**

Property | Default | Description
-------- | :-----: | -----------
```jekyll.source```      | ```<project_dir>/src/site``` | Specifies where are site's sources
```jekyll.destination``` | ```<project_dir>/_site```    | Specifies where generated site should be places
```jekyll.skip```        | ```false```                  | Should site be generated


### Pmd

## About

This project is developed by Marek Romanowski Matuo IT.

This is open source software licensed on [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html).

