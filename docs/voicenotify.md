---
title: Voice notify
description: Explains how to send a message once a user joins a voice channel.
---

By using the voice notify settings, you can send a message once someone joins selected voice channels.

## Notify channels {#settings}

Here you can add voice channels and modify the message for each of them.

### Message {#message}

Possible variables:
- `{username}`: The name of the user
- `{globalname}`: The global nickname of the user
- `{usermention}`: The user mention
- `{useravatar}`: The avatar url of the user
- `{displayname}`: The display name of the user
- `{channel}`: The channel name of the channel which the user joined
- `{channelmention}`: The channel mention
- `{servername}`: The server name
- `{servericon}`: The server icon

### Message channel {#channel}

The set message above will be send to this channel.

### Cooldown {#cooldown}

This setting changes the cooldown in which no message is sent. It can be used to reduce ping spam. The minimum value for both settings is 10 seconds (`10s`).

- `user` changes the cooldown per user: Once a user triggers a message, they won't trigger another message until the cooldown is over, regardless of which voice channel they join. Default: three minutes (`3m`)
- `channel` changes the cooldown per channel: Once a user triggers a message in a channel, the channel won't send another message until the cooldown runs out - regardless of which user joins. Default: one minute (`1m`)

### Delete message after {#delete-after}

You can set a time after which the notify message should get deleted automatically. This is disabled by default.
