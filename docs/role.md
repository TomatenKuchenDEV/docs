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

Copies the given role.
Die Rolle wird mitsamt ihrer Berechtigungen kopiert, Kanalüberschreibungen der Originalrolle werden aber nicht kopiert.

- role*: The role

## clearpermissions {#cmd-clearpermissions}

Entfernt alle Berechtigungen einer Rolle. Kanalüberschreibungen werden nicht entfernt, daher entspricht dieser Befehl dem Button "Berechtigungen löschen" in der Discord-Server-Rollenliste.

- role*: The role to remove the permissions from

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

You can choose whether only bots, only humans or all members should receive the role.

- role*: The role to add to everyone
- filter: The filter

## massremove {#cmd-massremove}

Removes a role from all members.

You can choose whether only bots, only humans or all members should get the role removed.

- role*: The role to remove from everyone
- filter: The filter

## randomuser {#cmd-randomuser}

Wählt zufällig die angegebene Anzahl an Nutzern mit der angegebenen Rolle aus.

- role*: The role
- amount: The amount of users to return
