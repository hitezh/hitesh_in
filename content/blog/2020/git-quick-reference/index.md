---
title: "Git quick reference"
date: "2020-07-05"
categories: 
  - "technology"
---

git clone git:... git add path/to/new\_file git commit -a git pull git push

\# Showing branches. git branch -a gitk --all

\# Checking out branches. git checkout some\_branch

\# Creating and pushing a new branch. git checkout -b new\_branch\_name git push -u origin new\_branch\_name

\# Checking out an existing branch. git checkout -b some\_branch origin/some\_branch

\# Merging a branch into your current branch. git pull origin some\_branch
