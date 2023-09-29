---
title: Basic moderation commands
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

## View statistics

`stats moderation`
