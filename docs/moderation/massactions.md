---
title: Mass actions
description: Learn how to perform mass actions such as mass banning and kicking, as well as adding and removing roles from multiple users.
---

## Commands {#commands}

### Ban users {#cmd-mass-ban}

<Command name="mass ban" slash="reason:Reason users:List of users, separated by &quot; &quot;, &quot;,&quot; or &quot;;&quot;" message="<Reason> <List of users, separated by &quot; &quot;, &quot;,&quot; or &quot;;&quot;>"></Command>

Using this command, a maximum of 200 members can be banned at once.

:::warning Modlogs

If users are banned using this command no modlog entry is created for them by default due to storage reasons.

If you are interested in those modlog entries, ban the users one-by-one or ask on the [support server](https://tomatenkuchen.com/discord).

:::

### Kick users {#cmd-mass-kick}

<Command name="mass kick" slash="reason:Reason users:List of users, separated by &quot; &quot;, &quot;,&quot; or &quot;;&quot;" message="<Reason> <List of users, separated by &quot; &quot;, &quot;,&quot; or &quot;;&quot;>"></Command>

### Dehoist {#cmd-dehoist}

Dehoisting, which means the removal of unnormal characters at the beginning of usernames, can either be started using the `dehoist` command or by enabling the related setting.

If the [setting for automatic dehoisting](./settings#auto-dehoist) is enabled, the bot will automatically dehoist all members once a day.

### Add role to multiple members {#cmd-role-massadd}

<Command name="role massadd" slash="role:Role [filter:Filter]" message="<Role> [<Filter>]"></Command>

Adds a role to all server members.

The possible filters can be found [below](#role-filters).

### Remove role from multiple members {#cmd-role-massremove}

<Command name="role massremove" slash="role:Role [filter:Filter]" message="<Role> [<Filter>]"></Command>

Removes a role from all server members.

The possible filters can be found [below](#role-filters).

## Possible filters for role mass actions {#role-filters}

Using the `filter` option, you can change which members will receive the role:
- All (don't specify)
- Only bots (`bot`)
- Only humans (`nobot`)
- Only members which currently have a role (enter the role ID only as filter)
- `-joined=<Relative time>`
- `-created=<Relative time>`
- `-role=<Role ID>`
- `-notrole=<Role ID>`
- `-username=<Text>`
- `-username-ignorecase=<Text>`
- `-usernameincludes=<Text>`
- `-usernameincludes-ignorecase=<Text>`
- `-nickname=<Text>`
- `-nickname-ignorecase=<Text>`
- `-nicknameincludes=<Text>`
- `-nicknameincludes-ignorecase=<Text>`

If no filter is selected, all server members are affected.
