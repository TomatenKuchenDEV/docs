---
title: Generelle Einstellungen
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Mit dieser Funktion kannst du einfach nach bekannten Filmen, Serien und Darstellern suchen.
---

This page explains server settings that could be useful for many servers.

## Server language {#settings-lang}

The server language changes the language as well as the formatting of numbers in bot answers.
The setting can be changed [in the dashboard](https://tomatenkuchen.com/dashboard/settings#lang), by default it's set to the current Discord server language as long as a translation is available.

Using [Weblate](/weblate) you can easily help with translating the bot and adding new languages.

## Prefix {#settings-prefix}

Here multiple message command prefixes can be entered, aka the text which is used in front of commands: `tk!` -> `tk!help`.

The prefix of slashcommands cannot be changed due to Discord.

:::tip Slashcommands

If you only want to show the commands of a single bot in the slashcommands select, simply mention the bot in the chat box and start writing the name of the command: `@TomatenKuchen help`

:::

## Deleting message commands {#settings-delete-command}

Changes whether the message that triggered a command is deleted when using message commands.

:::tip Override per command

Using [integrations](/integrations) and the action functions `run` and `delete` or `noDelete` this setting can be changed per commnand.

:::

## Timezone {#settings-timezone}

The server timezone which determines the send time of birthday messages.

To see your current timezone, use a website like https://xske.github.io/tz.
The input must be a valid value of this [Wikipedia list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## Dashboard access {#settings-dashboard-access}

All users with these selected roles have access to all pages of the dashboard.

Note that the server owner and members with the "Administrator" permission always have access.

:::warning Manage Server permission

As soon as you select one or more roles here, all server members who only have the permission "Manage Server" and none of the selected roles will lose access.

:::
