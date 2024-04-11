---
title: Voice notify
description: Using the TomatenKuchen voice notify system you can send a custom message with a configurable cooldown when a user joins a voice channel.
---

By using the voice notify settings, you can send a message once someone joins selected voice channels.

## Notify channels {#settings}

Here you can add voice channels and modify the message for each of them.

### Message {#message}

This message is sent once a member joins the configured voice channel.

Possible variables (case-insensitive):
- `{username}`: The name of the user
- `{globalName}`: The global nickname of the user
- `{userMention}`: The user mention
- `{userAvatar}`: The avatar url of the user
- `{displayName}`: The display name of the user
- `{channel}`: The channel name of the channel which the user joined
- `{channelMention}`: The channel mention
- `{serverName}`: The server name
- `{serverIcon}`: The server icon

### Message channel {#send-channel}

The set message above will be send to this channel.

### Delete message after {#delete-after}

You can set a time after which the notify message should get deleted automatically. This is disabled by default.

### Cooldown {#cooldown}

This setting changes the cooldown in which no join notification is sent.
It can be used to reduce ping spam.

- `user` changes the cooldown per user: Once a user triggers a message, they won't trigger another message until the cooldown is over, regardless of which voice channel they join. Default: three minutes (`3m`)
- `channel` changes the cooldown per channel: Once a user triggers a message in a channel, the channel won't send another message until the cooldown runs out - regardless of which user joins. Default: one minute (`1m`)

The minimum value for both settings is 15 seconds.
