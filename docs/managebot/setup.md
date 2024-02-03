---
title: Setup
description: The Manage Bot allows you to control Pterodactyl servers using Discord. This page explains on how to setup and use the bot.
---

With this bot, you can manage your Pterodactyl (https://pterodactyl.io) panel servers from Discord.

## Setup

![](/img/managebot_setup.png)

`/setup <Panel url> <API key> [<Alias name>]`

The bot supports HTTP as well as HTTPS panels - just make sure that the panels require a valid certificate when using HTTPS. If you don't have that, use HTTP without SSL.

An "alias" refers to a single panel. With aliases you can use multiple Pterodactyl panels at the same time.
If you don't use an alias, the bot will auto generate one for you.

## How to use (`/manage`)

![](/img/managebot_manageautocomplete.png)

![](/img/managebot_manage.png)


The bot can also run quick actions on the server:

![](/img/managebot_quickactions.png)

## `/console` and `/command`

Those commands can be used to view the server console of a server and running commands on them. Note that a server has to be online to be able to execute commands on it.
