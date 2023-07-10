---
title: Voice notify
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains on how to set up voice notify messages.
---

By using the voice notify settings, you can send a message once someone joins selected voice channels.

## Settings

### Notify channels
Here you can add voice channels and modify the message for each of them.

### Message channel
The set message above will be send to this channel.

### Cooldown
This setting changes the cooldown in which no message is sent. It can be used to reduce ping spam. The minimum value for both settings is 10 seconds (`10s`).

- `user` changes the cooldown per user: Once a user triggers a message, they won't trigger another message until the cooldown is over, regardless of which voice channel they join. Default: three minutes (`3m`)
- `channel` changes the cooldown per channel: Once a user triggers a message in a channel, the channel won't send another message until the cooldown runs out - regardless of which user joins. Default: one minute (`1m`)

### Delete message after
You can set a time after which the notify message should get deleted automatically. This is disabled by default.
