---
title: Boost messages
description: TomatenKuchen is a multipurpose Discord bot with a lot of features. Explains how to send a message on new or former boosters.
---

This feature can be used to send a message if a user boosts the server and didn't boost before, and if a user removes all it's boosts from the server.

It's not possible for the bot to find out how many times a specific user has boosted the server.

## Settings {#settings}

### Boost message channel {#channel}

The bot will send a message into this message once a user boosts the server for the first time.

### Former boost message channel {#endchannel}

The bot will send a message into this channel once a user removes all it's boosts from the server.

### Boost (end) message {#message}

Setting for configuring the message which is sent once a user boosts the server for the first time or removes it's last boost.

## Variables {#vars}

- `{userMention}`: Mention of the user
- `{username}`: Username
- `{displayName}`: Nickname
- `{globalName}`: Global displayname
- `{boosts}`: Amount of boosts on the server
- `{level}`: Current boost level
