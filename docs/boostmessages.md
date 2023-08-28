---
title: Boost messages
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains how to send a message on new or former boosters.
---

This feature can be used to send a message if a user boosts the server and didn't boost before, and if a user removes all it's boosts from the server.

It's not possible for the bot to find out how many times a specific user has boosted the server.

## Settings

### Boost message channel

The bot will send a message into this message once a user boosts the server for the first time.

### Former boost message channel

The bot will send a message into this channel once a user removes all it's boosts from the server.

### Boost (end) message

Setting for configuring the message which is sent once a user boosts the server for the first time or removes it's last boost.

## Variables

- `{usermention}`: Mention of the user
- `{username}`: Username
- `{displayname}`: Nickname
- `{globalname}`: Global displayname
- `{boosts}`: Amount of boosts on the server
- `{level}`: Current boost level
