---
title: Twitch module for e.g. livestreams
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Using the bot you can send a message if a Twitch streamer goes live or something else changes.
---

The Twitch module has several options for sending messages on changes of a streamer.

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

You can create up to 10 elements per server, which equals 10 different streamers with a live notification each.

## Commands

### Twitch user info

Using the message command `twitch <Streamer name>` you can get information about a Twitch user and a currently running livestream.
