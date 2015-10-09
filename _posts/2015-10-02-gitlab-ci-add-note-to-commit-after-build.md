---
layout: post 
title: "Gitlab CI - add note to commit after build"
---

# Goal

1. Build project
1. Extract information from ```maven``` build results 
1. **Post comment to commit**

# Prepare project

## Private token

First we have to add some users' ```private_token``` as ```secret variable```
in CI project's settings. 

I've set ```USER_PRIVATE_TOKEN``` secret with value of ```private_token``` for
some technical user - lets call it ```MvnBot```.

> Remember that all users with role ```master``` have access to project's 
> configuration. 

Now it is possible to generate comment using ```curl```.

{% highlight bash %}
curl --data $'note=This is the content of comment' -H "PRIVATE-TOKEN: $USER_PRIVATE_TOKEN" http://gitlab.you.domain.com/api/v3/projects/:idProject/repository/commits/:idCommit/comments 
{% endhighlight %}

# Build project

So now we have to build project and generate all the information we need during the build.

Let's configure build in ```.gitlab-ci.yml``` by setting ```script``` parameter like:

{% highlight yaml %}
job:
  [...]
  - script:
    - mvn clean install cobertura:cobertura pmd:pmd findbugs:findbugs checkstyle:checkstyle
    - ./add_comments.sh
  [...]
{% endhighlight %}

Maven goals should be set in pom.xml for all builds. But here I want to show all changes.

```./add_comments.sh``` refers to our final script that will add comment in project.

# Extract information

Let's try to extract some data from maven build and attach them as comments to commit.

## Checkstyle

Extract the number of style errors in code:

{% highlight bash %}
cat target/checkstyle-result.xml  | grep "<error " | wc -l
{% endhighlight %}

## Pmd

Extract the number of violations found in project:

{% highlight bash %}
cat target/pmd.xml | grep "<violation" | wc -l
{% endhighlight %}

## Cobertura

Extract code coverage level:

{% highlight bash %}
TODO!
{% endhighlight %}

## Find Bugs

Extract the number of bugs found in project:

{% highlight bash %}
cat target/findbugsXml.xml | sed 's/total_bugs/\ntotal_bugs/g' | cut -f 1 -d " " | grep total_bugs | cut -f 2 -d "'" | head -n 1
{% endhighlight %}

# Script that will add comment

So below is simple script I've written to attach some data from build result 
to commit as comment. Please treat it as excercise!

I've put this code into ```add_comments.sh``` file directly in project's directory.

**Remember** that this file has to have execution permissions in git repository!

{% highlight bash %}
#!/bin/bash

# base host
HOST=http://gitlab.example.com

# extract Gitlab Project ID from Gitlab CI Project ID
PROJECT_ID=$(curl -H "PRIVATE-TOKEN: $USER_PRIVATE_TOKEN" $HOST/ci/api/v1/projects | python -m json.tool | grep -E "gitlab_id|\"id\"" | grep "id\": $CI_PROJECT_ID," -B 1 | grep "\"gitlab_id\"" | cut -d ":" -f 2 | cut -d "," -f 1 | sed -e 's/^[[:space:]]*//')
# Build ref is commit ID
COMMIT_ID=$CI_BUILD_REF

# extract simple Checkstyle measure from result file
CHECKSTYLE=$(cat target/checkstyle-result.xml  | grep "<error " | wc -l)
# extract simple PMD measure from result file
PMD=$(cat target/pmd.xml | grep "<violation" | wc -l)
# extract simple Find Bugs measure from result file
FIND_BUGS=$(cat target/findbugsXml.xml | sed 's/total_bugs/\ntotal_bugs/g' | cut -f 1 -d " " | grep total_bugs | cut -f 2 -d "'" | head -n 1)

# url invoked for adding comment
URL=$HOST/api/v3/projects/$PROJECT_ID/repository/commits/$COMMIT_ID/comments

# create note body as multiline string (in markdown!)
read -r -d '' NOTE << EOM
# Build result

| Type | Result |
| ----: | ----- |
| **Checkstyle** | $CHECKSTYLE |
| **Pmd** | $PMD |
| **Find Bugs** | $FIND_BUGS |
| **Cobertura** | |
EOM

# append additional lines for information found in cobertura coverage report
for i in `cat target/site/cobertura/coverage.xml | grep lines-covered | cut -d " " -f 2- | sed 's/ /\n/g'`
do 
  TMP=$(echo $i | sed 's/[">]//g' | sed 's/=/ \| /g' | sed 's/^/\| /g' | sed 's/$/ \|/g')
  TMP+=$'\n'
  NOTE="$NOTE$TMP"
done

# POST request that creates message under commit
curl --data $"note=$NOTE" \
    -H "PRIVATE-TOKEN: $USER_PRIVATE_TOKEN" \
    $URL 
{% endhighlight %}

# Final word

This is very easy way of adding information from build to commits in Gitlab repository.




