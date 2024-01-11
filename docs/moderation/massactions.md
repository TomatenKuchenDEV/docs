---
title: Mass actions
description: TomatenKuchen is a multipurpose Discord bot with a lot of features for your server. Explains how to use mass actions like mass kicking and banning as well as adding and removing roles from many users.
---

## Commands {#commands}

### Ban users {#cmd-mass-ban}

`mass ban <Reason> <List of users, separated by " ", "," or ";">`

### Kick users {#cmd-mass-kick}

`mass kick <Reason> <List of users, separated by " ", "," or ";">`

### Dehoist {#cmd-dehoist}

Dehoisting, which means the removal of unnormal characters at the beginning of usernames, can either be started using the `dehoist`
command or by enabling the related setting.
If the setting for automatic dehoisting is enabled, the bot will automatically run the command once a day.

### Add role to many users {#cmd-role-massadd}

`role massadd <Role> [<Filter>]`

### Remove role from many users {#cmd-role-massremove}

`role massremove <Role> [<Filter>]`

## Possible filters for role mass actions {#role-filters}

- `bot`: Only affects bots
- `nobot`: Affects everyone except bots

If no filter is selected, all server member are affected.
