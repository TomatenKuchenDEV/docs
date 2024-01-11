---
title: Basic moderation commands
description: TomatenKuchen is a multipurpose Discord bot with a lot of features for your server. Lists moderation commands
---

If the [setting](./settings) "Force reason" is enabled, the argument `<Reason>` is not optional anymore.

## Ban user {#cmd-ban}

`ban <User> [<Reason>] [forceban]`

If `forceban` is used, the bot won't check if the user is already banned.

## Unban user {#cmd-unban}

`unban <User> [<Reason>]`

## List banned or muted users {#cmd-banlist}

`banlist [<User>]`

## Show modlogs of a user {#cmd-modlogs}

`modlogs <User>`

## Kick user {#cmd-kick}

`kick <User> [<Reason>]`

## Lock one or multiple channels {#cmd-lock}

`lock lock|unlock [<channels>]`

## Let the bot send a custom message {#cmd-text-output}

`say <Message>`
`embed [<Content> <Channel>]`

You can also use attachments, e.g. images.

## Change the slowmode of a channel {#cmd-slowmode}

`slowmode <Amount in seconds>`

## Mute a user {#cmd-mute}

`mute <User> <Time> <Reason>`

## Unmute a user {#cmd-unmute}

`unmute <User> [<Reason>]`

## Warn a user {#cmd-warn}

`warn <User> <Reason>`

## View statistics {#cmd-mod-stats}

`stats moderation`
