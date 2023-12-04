---
title: Syncing logs & bans
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. The bot can also sync logs and bans as well as unbans across multiple servers.
---

## Setup general

You can get the server ID either through Discord's developer mode, by using the `server` command or from the dashboard URL.

Once you've used the command with the server ID you will receive a code that you have to enter on the other server using `sync verify <Code>`.
From then on, the logs received of the first server will be sent to the second.

To stop the synchronization use the command `sync stop` on the server the synchronization has been set up.

## Logsync

Using the logsync feature of the bot you can send the logs of one server to another, e.g. to send logs from a main to a team internal server.

This affects all log types - note that if the target server didn't select a log channel on their settings, that log type won't get logged there.

`sync logs <Server ID>`

## Bansync

Bans and unbans can be synced using the bot as well. Unlike logs, bans can be synced to and from multiple servers at the same time.

`sync bans <Server ID> <Sync bans: true/false> <Sync unbans: true/false>`

Sync bans and sync unbans toggle whether users should be banned and unbanned. If you only want to sync bans, choose "False" for unbans.
