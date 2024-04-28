---
title: Setup / Features
description: The Manage Bot allows you to control Pterodactyl servers using Discord. This page explains how to set up and use the bot.
image: /img/managebot_manage.webp
---

With this bot, you can manage your Pterodactyl (https://pterodactyl.io) panel servers from Discord.

## Setup {#setup}

![Setup command on Discord including the syntax](/img/managebot_setup.webp)

`/setup <Panel url> <API key> [<Alias name>]`

The bot supports both HTTP and HTTPS panels. Just make sure that panels using HTTPS require a valid certificate. If you don't have a valid certificate, use HTTP without SSL.

An "alias" refers to a single panel. With aliases, you can use multiple Pterodactyl panels at the same time.
If you don't provide an alias, the bot will auto-generate one for you.

## How to use (`/manage`) {#manage}

![Autocomplete shown when using the manage command after setting up a panel](/img/managebot_autocomplete.webp)

![Discord message with an embed including information about the server, e.g. its status, memory usage and uptime, and buttons to control it](/img/managebot_manage.webp)

### Quick actions {#quick-actions}

The bot also supports running quick actions on the server:

![Output when using the "Create a backup" action](/img/managebot_quickaction_backup.webp)

Currently, the following actions are supported:
- Create a backup
- Show all backups of the server, including a one-time download link
- Delayed server restart (after 20 seconds)

## `/console` and `/command` {#console-command}

These commands can be used to view the server console and run commands on a server. Note that the server must be online in order to execute commands on it.
