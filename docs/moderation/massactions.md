---
title: Mass actions
description: TomatenKuchen is a multipurpose Discord bot with a lot of features for your server. Explains how to use mass actions like mass kicking and banning as well as adding and removing roles from many users.
---

## Commands

### Ban users

`mass ban <Reason> <List of users, separated by " ", "," or ";">`

### Kick users

`mass kick <Reason> <List of users, separated by " ", "," or ";">`

### Add role to many users

`role massadd <Role> [<Filter>]`

### Remove role from many users

`role massremove <Role> [<Filter>]`

### Dehoist

Dehoisting, which means the removal of unnormal characters at the beginning of usernames, can either be started using the `dehoist`
command or by enabling the related setting.
If the setting for automatic dehoisting is enabled, the bot will automatically run the command once a day.

## Possible filters for role mass actions

- `bot`: Only affects bots
- `nobot`: Affects everyone except bots
