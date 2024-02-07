---
title: Mass actions
description: Learn how to perform mass actions such as mass banning and kicking, as well as adding and removing roles from multiple users.
---

## Commands {#commands}

### Ban users {#cmd-mass-ban}

<Command name="mass ban" slash="reason:Reason users:List of users, separated by &quot; &quot;, &quot;,&quot; or &quot;;&quot;" message="<Reason> <List of users, separated by &quot; &quot;, &quot;,&quot; or &quot;;&quot;>"></Command>

### Kick users {#cmd-mass-kick}

<Command name="mass kick" slash="reason:Reason users:List of users, separated by &quot; &quot;, &quot;,&quot; or &quot;;&quot;" message="<Reason> <List of users, separated by &quot; &quot;, &quot;,&quot; or &quot;;&quot;>"></Command>

### Dehoist {#cmd-dehoist}

Dehoisting, which means the removal of unnormal characters at the beginning of usernames, can either be started using the `dehoist` command or by enabling the related setting.

If the [setting for automatic dehoisting](./settings#setting-auto-dehoist) is enabled, the bot will automatically dehoist all members once a day.

### Add role to many users {#cmd-role-massadd}

<Command name="role massadd" slash="role:Role [filter:Filter]" message="<Role> [<Filter>]"></Command>

### Remove role from many users {#cmd-role-massremove}

<Command name="role massremove" slash="role:Role [filter:Filter]" message="<Role> [<Filter>]"></Command>

## Possible filters for role mass actions {#role-filters}

- `bot`: Only affects bots
- `nobot`: Affects everyone except bots

If no filter is selected, all server members are affected.
