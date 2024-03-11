---
title: Vote announcements
description: Vote announcements allow you to track votes for your Discord server or bot - easily send a fully customizable message or add a role to the user for a custom time.
image: /img/voteannouncements.png
---

By using the vote announcements you can send a custom message once someone votes for your server or bot.

![Vote announcements](/img/voteannouncements.png)

## Commands {#commands}

Use the commands `leaderboard servervote` or `leaderboard botvote` to get a leaderboard which shows which users voted the most often.

## Settings {#settings}

### Channel {#channel}

Select the channel in which the vote messages will be sent.

### Messages {#message}

You can customize the server and bot vote message here.

You can use the following variables:
- `{usermention}`: Mention of the user who voted
- `{userid}`: ID of the voting user
- `{username}`: Username of the voting user
- `{globalname}`: Global nickname of the voting user
- `{useravatar}`: Avatar URL of the voting user
- `{domain}`: The domain the user voted on
- `{url}`: URL of the bot or server
- `{voteurl}`: Vote URL of the bot or server

### Vote role {#role}

Here you can select a role users will receive after voting. It will be automatically removed after the set time.
