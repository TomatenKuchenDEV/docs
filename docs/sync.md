---
title: Syncing logs & bans
description: The bot can also sync logs and bans, as well as unbans, across multiple servers.
---

## General setup {#setup}

You can obtain the server ID either through Discord's developer mode, by using the `server` command, or from the URL on the [server settings page](https://tomatenkuchen.com/dashboard/settings) in the dashboard.

Once you've used the command with the server ID, you will receive a code that you have to enter on the other server using `sync verify <Code>`.
From that point on, the logs received from the first server will be sent to the second server.

To stop the synchronization, use the command `sync stop` on the server where the synchronization has been set up.

## Logsync {#logs}

With the bot's logsync feature, you can send the logs from one server to another, for example, to send logs from a main server to a team internal server.

This affects all types of logs. Note that if the target server hasn't selected a log channel in their settings, that specific log type won't be recorded there.

<Command name="sync logs" slash="guild:Server ID" message="<Server ID>"></Command>

## Bansync {#bans}

Bans and unbans can also be synced using the bot. Unlike logs, bans can be synced to and from multiple servers simultaneously.

<Command name="sync bans" slash="guild:Server ID bans:True|False unbans:True|False" message="<Server ID> <Sync bans: true|false> <Sync unbans: true|false>"></Command>

The `bans` and `unbans` options control whether users should be banned and unbanned, respectively.

For example, if you only want to sync new bans, choose "True" for bans and "False" for unbans.
