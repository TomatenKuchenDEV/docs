---
title: Customcommands
description: The Manage Bot allows you to control Pterodactyl servers using Discord. This page explains on how to create and use customcommands.
---

The Manage Bot allows you to create customcommands to manage a server.

![Note: The command has been renamed in the meantime.](/img/managebot_ccadd.png)

## Commands

### `/customcommand add <Name> <Panel alias> <Server ID> <Command> [<Response>]`

Creates a customcommand on the server, linked to your panel access data.

You can find the panel alias using `/list`.
If no response it set the bot will reply with "The command was run in panel …: …"

### `/customcommand delete <Name>`

Deletes a customcommand.

### `/customcommand list`

Lists all customcommands of the server.

## Variables

- `{args}`: A list of all arguments
- `{1}` `{2}` `{3}`: The first three arguments, optional
- `{!1}` `{!2}` `{!3}`: The first three arguments, required

## Examples

### Start a server

- `command`: `start`
- `response`: `The server is being started!`

You can also use `stop`, `restart` and `kill`.

### Minecraft whitelist

- `command`: `whitelist add {!1}`
- `response`: `The player **{1}** has been whitelisted!`
