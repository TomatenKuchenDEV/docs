---
title: Twitch module for e.g. livestreams
description: TomatenKuchen is a multipurpose Discord bot with a lot of features for your server. Using the bot you can send a message if a Twitch streamer goes live or something else changes.
---

The Twitch module has several options for sending messages on changes of a streamer.

Note that you have to authorize yourself first in the settings to be able to use the Twitch module.

## Settings {#settings}

### Twitch messages {#settings-update}

You can set the username, the channel, the trigger and the message which is sent to the selected channel once the trigger is triggered.

## Possible arguments {#vars}

- `{username}`: The username
- `{link}`: The channel URL

## Possible triggers {#trigger}

- `stream.online`: Triggered when the streamer starts it's livestream (default)
- `stream.offline`: When the streamer stops it's livestream
- `channel.update`: When the user updates it's channel
- `channel.raid`: When the channel is raided
- `user.update`: When the user updates it's public account data

You can create up to 10 elements per server, which equals 10 different streamers with a live notification each.

## Example {#example}

- Channel (`channel`): Select a channel into which the live message should be sent
- Trigger (`trigger`): When a message on stream start should be sent: `stream.online`
- Twitch username (`username`): The username of the streamer from the URL, e.g. `monstercat`
- Message content (`content`): `🔴 The streamer {username} is live!`

## Commands {#commands}

### Twitch user info {#cmd-twitch}

Using the message command `twitch <Streamer name>` you can get information about a Twitch user and a currently running livestream.
