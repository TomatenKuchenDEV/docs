---
title: Log & ban sync
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. This page helps you with the log and ban sync feature.
---

## Logsync
Using the logsync feature of the bot you can send the logs of one server to another, e.g. to send logs from a main to a team internal server.

### Setup
`sync logs <Server ID>`

You can get the server ID either through Discord's developer mode, by using the `server` command or from the dashboard URL.

Once you've used the command with the server ID you will receive a code that you have to enter on the other server using `sync verify <Code>`. From then on the logs of the first server will be sent to the second.

To stop the synchronization use the command `sync stop`.

## Bansync
Bans and unbans can be synced using the bot as well. Unlike logs, bans can be synced to and from multiple servers at the same time.

### Setup
`sync bans <Server ID> <Sync bans> <Sync unbans>`

Sync bans and sync unbans toggle whether bans and unbans should be synced. If you only want to sync bans, choose "False" for unbans.

Everything else is the same as with logs.
