---
title: Setup
description: The Manage Bot allows you to control Pterodactyl servers using Discord. This page explains how to set up and use the bot.
---

With this bot, you can manage your Pterodactyl (https://pterodactyl.io) panel servers from Discord.

## Setup

![](/img/managebot_setup.png)

To set up the bot, use the following command:

`/setup <Panel url> <API key> [<Alias name>]`

The bot supports both HTTP and HTTPS panels. Just make sure that panels using HTTPS require a valid certificate. If you don't have a valid certificate, use HTTP without SSL.

An "alias" refers to a single panel. With aliases, you can use multiple Pterodactyl panels at the same time. If you don't provide an alias, the bot will auto-generate one for you.

## How to use (`/manage`)

![](/img/managebot_manageautocomplete.png)

![](/img/managebot_manage.png)

The bot also supports running quick actions on the server:

![](/img/managebot_quickactions.png)

## `/console` and `/command`

These commands can be used to view the server console and run commands on a server. Note that the server must be online in order to execute commands on it.
