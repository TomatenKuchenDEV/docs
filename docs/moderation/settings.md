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

## DM messages on ban/kick/mute/warn

Edit the message users receive by DM if a moderator uses one of the mentioned moderation actions on them.

## Only attachment channels

In selected channels users can only send attachments, for example images or videos. Only text is not allowed, but messages can contain an optional text.

## Minimum account age

Minimum account age for newly joined Discord users. If they're not old enough they will be kicked.

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
