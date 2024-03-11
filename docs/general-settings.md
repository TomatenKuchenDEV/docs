---
title: General settings
description: This page explains the most important settings to change the behavior of the Discord bot.
---

This page explains server settings that can be useful for many servers.

## Server language {#lang}

The server language changes the language as well as the formatting of numbers in bot responses.
You can change this setting [in the dashboard](https://tomatenkuchen.com/dashboard/settings#lang). By default, it is set to the current Discord server language as long as a translation is available.

You can easily help with translating the bot and adding new languages using [Weblate](/weblate).

## Prefix {#prefix}

Here you can enter multiple message command prefixes, which are the text used before commands: `tk!` -> `tk!help`.

The prefix of slashcommands cannot be changed as Discord doesn't want to support it.

:::tip Multiple bots with slashcommands

If you only want to show the commands of a single bot in the slashcommands select, simply mention the bot in the chat box and start writing the name of the command: `@TomatenKuchen help`

:::

## Deleting message commands {#delete-command}

This option determines whether the message that triggered a command is deleted when using message commands.

:::tip Override per command

Using [integrations](/integrations) and the action functions `run` and `delete` or `noDelete` this setting can be changed per commnand.

:::

## Timezone {#timezone}

This option determines the server timezone, which affects the send time of birthday messages.

To see your current timezone, use a website like https://xske.github.io/tz.
The input must be a valid value from this [Wikipedia list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## Dashboard access {#dashboard-access}

All users with these selected roles have access to all pages of the dashboard.

Note that the server owner and members with the "Administrator" permission always have access.

:::warning Manage Server permission

As soon as you select one or more roles here, all server members who only have the "Manage Server" permission and none of the selected roles will lose access.

:::
