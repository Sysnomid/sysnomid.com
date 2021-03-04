---
date: 2021-02-07
title: 'Dokku Stuff'
---

## Create a Postgres DB
    sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git postgres
    dokku postgres:create app_name
    dokku postgres:expose app_name
    dokku postgres:info app_name

## Create an Express App
    dokku apps:create app_name
    git remote add dokku@ip:app_name
    touch Procfile
    Procfile:
        web: npm i && npm start

### Reset an App
    dokku ps:restore app_name

### Set sensitive files in seperate file
    git branch dokku-sensitive
    git checkout dokku-sensitive

### Subdirectory deploy
    git subtree push --prefix backend dokku branch_name






