---
title: Boost messages
description: Explains how to send a message on new or former boosters.
---

This feature can be used to send a message if a user boosts the server and didn't boost before, and if a user removes all it's boosts from the server.

It's not possible for the bot to find out how many times a specific user has boosted the server.

## Settings {#settings}

### Boost start and end message {#message}

Setting for configuring the message which is sent once a user boosts the server for the first time, or removes its last boost.

### Boost message channel {#start-channel}

The bot will send a message into this message once a user boosts the server for the first time.

### Former boost message channel {#end-channel}

The bot will send a message into this channel once a user removes all its boosts from the server.

## Variables {#vars}

:::tip Casing

The casing of how the variables are written doesn't matter.

:::

- `{userMention}`: Mention of the user
- `{username}`: Username
- `{displayName}`: Nickname
- `{globalName}`: Global displayname
- `{boosts}`: Amount of boosts on the server
- `{level}`: Current boost level
