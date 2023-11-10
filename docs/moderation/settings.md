---
title: Settings
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains all AutoMod settings.
---

## Delete invites

Deletes Discord invites which aren't for the current server.

## Channels in which invites are allowed.

Invites in this channels aren't deleted if the above setting is enabled.

## Antispam

Enables or disables the antispam on the server.

## Default messages delete range

Deletes this time span of messages when a user is banned. Due to Discord limits you can use seven days (`7d`) at maximum.

## Block markdown headers

Prevents users from sending messages starting with markdown headers (`#`, `##` and `###`). This can prevent flooding of channels by using big text.

## AutoMod explanations

Writes users a DM when they violate a Discord AutoMod rule of the server which contains the violated word or RegEx and the full message content.

## DM messages on ban/kick/mute/warn

Edit the message users receive by DM if a moderator uses one of the mentioned moderation actions on them.

Leave empty to disable.

## Only attachment channels

In selected channels users can only send attachments, for example images or videos. Only text is not allowed, but messages can contain an optional text.

## Minimum account age

Minimum account age for newly joined Discord users. If they're not old enough they will be kicked.

## AutoMod caps percentage

At which percentage of capital letters in percent (30-100, default 70) the bot will start deleting a message due to too many caps.

## Disable DMs forever

Disables sending DMs to users which have never communicated before.

This uses the safety features function by Discord which is expanded automatically by the bot.

## Disable server invites forever

Disables server invites forever which prevents users from joining the server, even with a valid invite.

This uses the safety features function by Discord which is expanded automatically by the bot.

## Enforce reason

Requires a reason for moderation actions.

## Presets for moderation reasons

You can create presets for moderation reasons to create a shortcut for longer moderation reasons.

### Example

- `name`: "r1"
- `value`: "You violated rule 1: Advertising is forbidden!"

## Auto dehoist

Configures whether the bot should automatically run the `dehoist` command once a day.

This removes characters from the display name of users which push them to the top of the member list.
