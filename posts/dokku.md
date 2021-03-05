---
date: 2021-03-04
title: 'Dokku Stuff'
excerpt: 'Helpful dokku commands.'
---

[Dokku](https://dokku.com/) is a great little tool that I use to deploy applications on a VPS. Think of it as a "Docker powered mini-heroku" as the devs describe.

To set it up, make sure you have an SSH key setup on a Linux VPS and run these two commands. 

## Installation
```
# for debian systems, installs Dokku via apt-get

wget https://raw.githubusercontent.com/dokku/dokku/v0.24.0/bootstrap.sh;
sudo DOKKU_TAG=v0.24.0 bash bootstrap.sh
```

<br />
Here's a list of some other helpful Dokku commands
<br />

## Add an SSH key
```
# Adding an ssh key if you don't have one already

dokku ssh-keys:add KEY_NAME path/to/id_rsa.pub
```

## Create a Postgres DB
    sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git postgres
    dokku postgres:create app_name

    # Expose the PostgresDB to the world
    dokku postgres:expose app_name

    # Get connection info
    dokku postgres:info app_name

## Create an Express App
    dokku apps:create app_name
    git remote add dokku@ip:app_name
    touch Procfile

    # Procfile Data:
        web: npm i && npm start

## Add a domain
    dokku domains:add app_name example.com

## Reset an App
    dokku ps:restore app_name

## Set sensitive files in separate branch
    git branch dokku-sensitive

    git checkout dokku-sensitive

    git add . && git commit -m "Changing Stuff"

## Subdirectory Deploy
    git subtree push --prefix backend dokku branch_name

[Dokku Full Docs](https://dokku.com/docs/getting-started/installation/)

Any other useful Dokku commands? Comment below or contact me.

