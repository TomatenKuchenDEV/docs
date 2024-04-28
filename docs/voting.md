---
title: Vote announcements
description: Vote announcements allow you to track votes for your Discord server or bot - easily send a fully customizable message or add a role to the user for a custom time.
image: /img/voteannouncements.webp
---

By using the vote announcements you can send a custom message once someone votes for your server or bot.

![Vote announcements](/img/voteannouncements.webp)

## Commands {#commands}

Use the commands `leaderboard servervote` or `leaderboard botvote` to get a ranking showing which users voted the most often.

## Settings {#settings}

### Channel {#channel}

Select the channel in which the vote messages will be sent.

### Messages {#message}

You can customize the server and bot vote message here.

You can use the following variables (casing is ignored):
- `{userMention}`: Mention of the user who voted
- `{userId}`: ID of the voting user
- `{username}`: Username of the voting user
- `{globalName}`: Global nickname of the voting user
- `{userAvatar}`: Avatar URL of the voting user
- `{domain}`: The name of the server (the domain) the user voted on
- `{url}`: URL of the bot or server page
- `{voteUrl}`: Direct vote link of the bot or server

### Vote role {#role}

Here you can select a role users will receive after voting, and how long they'll keep it.

Users receive this role automatically after voting on a page.
It will be automatically removed after the set time.
