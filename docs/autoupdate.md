---
title: Autoupdate
description: Explains autoupdating message and lists possible variables
image: /img/autoupdate.webp
---

Autoupdate ("automatically updating messages") are messages which auto update **every 10 minutes**. You can use them to display statistics in messages or to create a birthday calendar.

![Autoupdate example message, showing the server leaderboard, AFK users and birthdays](/img/autoupdate.webp)

## Possible arguments {#vars}

All variables ignore the name casing.

- `{members}`: Member count
- `{members.humans}`: Non-app count
- `{members.bots}`: App count
- `{emojis}`: Emoji amount
- `{stickers}`: Sticker amount
- `{roles}`: Role amount
- `{boosts}`: Server boost amount
- `{channels}`: Channel amount
- `{voiceChannels}`: Voice channel amount
- `{textChannels}`: Amount of text based channels
- `{categories}`: Category amount
- `{leaderboard}`: Shows the top 15 of the server leaderboard
- `{boosters}`: Lists all boosters of the server
- `{afk}`: List of users marked as AFK
- `{birthday}`: List of all users with a public birthday and all fictive birthdays of the server
- `{events}`: List of up to 15 upcoming scheduled server events
