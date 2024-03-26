---
title: Basic moderation commands
description: Lists moderation commands
---

If the [setting](./settings) "Force reason" is enabled, the argument `[<Reason>]` is not optional anymore.

## Ban user {#cmd-ban}

`ban <User> [<Time> <...Reason>] [forceban]`

If `forceban` is used, the bot won't check if the user is already banned.

## Unban user {#cmd-unban}

`unban <User> [<...Reason>]`

## List banned or muted users {#cmd-banlist}

`banlist [<User>]`

## Show modlogs of a user {#cmd-modlogs}

`modlogs <User>`

## Kick user {#cmd-kick}

`kick <User> [<...Reason>]`

## Lock one or multiple channels {#cmd-lock}

`lock lock|unlock [<channels>]`

## Let the bot send a custom message {#cmd-text-output}

`say <Message>`
`embed [<Content> <Channel>]`

You can also use attachments, such as images.

## Change the slowmode of a channel {#cmd-slowmode}

`slowmode <Amount in seconds>`

## Mute a user {#cmd-mute}

`mute <User> <Time> [<...Reason>]`

This uses the Discord timeout feature to prevent users from sending DMs, pressing buttons and adding reactions in addition to the normal role-mute behavior.

## Unmute a user {#cmd-unmute}

`unmute <User> [<...Reason>]`

## Voice mute a user {#cmd-voicemute}

`voicemute <User> <Time> <Scope> [<Channels>] [<...Reason>]`

Mutes or deafs a user in all or only the selected voice channels.

"Scope" allows you to select the action type, possible options are:
- Mute only
- Deaf only
- Mute and deaf

## Warn a user {#cmd-warn}

`warn <User> [<...Reason>]`

## View statistics {#cmd-mod-stats}

`stats moderation`
