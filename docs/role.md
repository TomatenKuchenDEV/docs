---
title: Role command
description: The role command allows you to manage roles and their members on a server.
---

This page explains the subcommands of the `role` command and explains their features.

## list {#cmd-info}

Lists all roles on the server and optionally filters them.

- filter: The filter(s) to apply on all roles:
	`-managed`/`-unmanaged`: Whether the role has been created manually and is fully editable, or is managed by a Discord integration, e.g. a bot.
	`-withmembers`/`-withoutmembers`: Whether there's at least one (cached) member on the server with the role.
	`-hoisted`/`-unhoisted`: Whether the role is displayed separately in the member list.
	`-mentionable`/`-unmentionable`: Whether the role is mentionable by default.
	`-startswith=<Name>`/`-endswith=<Name>`: Whether the role name starts or ends with this text.
	`-includes=<Name>`/`-notincludes=<Name>`: Whether the role name includes this text (casing is ignored).

## info {#cmd-info}

Displays information about the given role.

- role: The role to show information about.

## bypermission {#cmd-bypermission}

Lists all roles with a specific permission.

- permission*: The permission to filter

## clone {#cmd-clone}

<Command name="role clone" slash="role:Role" message="<Role>"></Command>

Copies the given role including its permissions.

Permission overwrites of the role aren't copied.

## clearpermissions {#cmd-clearpermissions}

<Command name="role clearpermissions" slash="role:Role" message="<Role>"></Command>

Removes all permissions of a role.

Permission overwrites aren't removed, therefore this command's feature mostly equals the button "Reset permissions" in the Discord server role list.

## add {#cmd-add}

Adds a role to a member.

If no time is given, the user keeps the role forever.

- role*: The role to add
- user*: The user to add the role to
- time: The time how long the user should keep the role

## remove {#cmd-remove}

Removes a role from a member.

If no time was given the user loses the role forever.

- role*: The role to remove
- user*: The user to remove the role from
- time: The time after which the user gets the role back

## massadd {#cmd-massadd}

Adds a role to all members.

See the [mass action](/moderation/massactions#cmd-role-massadd) docs page for more information.

## massremove {#cmd-massremove}

Removes a role from all members.

See the [mass action](/moderation/massactions#cmd-role-massremove) docs page for more information.

## randomuser {#cmd-randomuser}

Randomly selects the given amount of users which have the given role.

- role*: The role
- amount: The amount of users to return, one by default
