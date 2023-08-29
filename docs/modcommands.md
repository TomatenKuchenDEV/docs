---
title: Moderation commands
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Lists moderation commands
---

If the setting "Force reason" is enabled, the argument `<Reason>` is not optional anymore.

## Ban user

`ban <User> [<Reason>] [forceban]`

If `forceban` is used, the bot won't check if the user is already banned.

## Unban user

`unban <User> [<Reason>]`

## List banned or muted users

`banlist [<User>]`

## Show modlogs of a user

`modlogs <User>`

## Kick user

`kick <User> [<Reason>]`

## Lock one or multiple channels

`lock lock|unlock [<channels>]`

## Delete messages

`purge <Amount> [<Filter>] [pinned]`

`<Filter>` can be one of the following:
* `<User>`: Deletes all messages from a user
* bot: Deletes all messages from bots
* nobot: Deletes all messages from humans
* embed: Deletes all messages with embeds
* file: Deletes all messages with attachments
* mention: Deletes all messages with mentions
* link: Deletes all messages with links
* emoji: Deletes all messages with emojis
* `contains <Text>`: Deletes all messages that contain a certain text
* `notcontains <Text>`: Deletes all messages that *not* contain a certain text

If you include `pinned`, pinned messages will be deleted too.

## Let the bot send a custom message

`say <Message>`
`embed [<Content> <Channel>]`

You can also use attachments, e.g. images.

## Change the slowmode of a channel

`slowmode <Amount in seconds>`

## Mute a user

`mute <User> <Time> <Reason>`

## Unmute a user

`unmute <User> [<Reason>]`

## Warn a user

`warn <User> <Reason>`

## Mass actions

### Ban users

`mass ban <Reason> <List of users, separated by " ", "," or ";">`

### Kick users

`mass kick <Reason> <List of users, separated by " ", "," or ";">`

### Add role to many users

`role massadd <Role> [<Filter>]`

### Remove role from many users

`role massremove <Role> [<Filter>]`
