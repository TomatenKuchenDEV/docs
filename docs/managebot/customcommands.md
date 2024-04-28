---
title: Customcommands
description: The Manage Bot allows you to control Pterodactyl servers using Discord. This page explains how to create and use custom commands.
---

The Manage Bot allows you to create customcommands to manage a server.

![Filled in Discord slash command to create customcommands, in this case to whitelist a player on a Minecraft server](/img/managebot_ccadd.png)

## Commands {#commands}

### `/customcommand add <Name> <Panel alias> <Server ID> <Command> [<Response>]` {#cc-add}

Creates a customcommand on the server, linked to your panel access data.

You can find the panel alias using `/list`.
If no response is set the bot will reply with "The command was run in panel …: …"

### `/customcommand delete <Name>` {#cc-delete}

Deletes a customcommand.

### `/customcommand list` {#cc-list}

Lists all customcommands of the server.

## Variables {#vars}

- `{args}`: A list of all arguments
- `{1}` `{2}` `{3}`: The first three arguments, optional
- `{!1}` `{!2}` `{!3}`: The first three arguments, required

## Examples {#examples}

### Start a server {#server-start}

- `command`: `start`
- `response`: `The server is being started!`

You can also use `stop`, `restart`, and `kill`.

### Minecraft whitelist {#minecraft-whitelist}

- `command`: `whitelist add {!1}`
- `response`: `The player **{1}** has been whitelisted!`
