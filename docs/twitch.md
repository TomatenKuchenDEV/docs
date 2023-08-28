---
title: Twitchmodule for e.g. livestreams
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Using the bot you can send a message if a Twitch streamer goes live or something else changes.
---

The twitch module has several options for sending messages on changes of a streamer.

Note that you have to authorize yourself first in the settings to be able to use the Twitch module.

## Settings

### Twitch messages

You can set the username, the channel, the trigger and the message which is sent to the selected channel once the trigger is triggered.

## Possible triggers

- `stream.online`: Triggered when the streamer starts it's livestream
- `stream.offline`: When the streamer stops it's livestream
- `channel.update`: When the user updates it's channel
- `channel.raid`: When the channel is raided
- `user.update`: When the user updates it's public account data

If you create `stream.online` and `stream.offline` triggers for every streamer you want to be notified for, you can currently add up to 5 streamers per server.
