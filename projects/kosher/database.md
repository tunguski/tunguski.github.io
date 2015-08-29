---
layout: two_column
left_column: kosher_menu.html
project: gitlab-java-event-listener
title: "Kosher"
---

# Key Value Store

Koshers' internal database is simple key value store.

## Keys

All keys mimic users, projects and git repository structure. 

### Example with description

```
tunguski/kosher/95790bf8/checkstyle/log
```

Value is log file from executing checkstyle builder for project ```kosher``` 
of user ```tunguski``` at commit ```95790bf8```.

### Keys used

* ```[user]``` - list all projects for user
    * ```[project]``` - list all branches for project
        * ```[branch]``` - actual branch info (should be reference to commit info?)
        * ```[commit]``` - actual commit info
            * ```[builder_name]``` - builder execution info for commit
                * ```log``` - log from build command execution
                * ```file``` - if builder stats are based on file content, builder adds this file content here
                * ```report``` - builders' data about commit quality
