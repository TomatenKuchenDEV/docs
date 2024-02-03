---
title: Settings
description: Explains all AutoMod settings.
---

## Delete invites {#settings-delete-invites}

Deletes Discord invites that are not for the current server, if enabled.

## Channels in which invites are allowed {#settings-invites-allowed}

Invites in these channels are not deleted if the above setting is enabled.

## Antispam {#setting-antispam}

Enables or disables the antispam on the server.

## Team channel {#setting-team-channel}

Selects the team channel on the server in which a message is sent when a user triggers a Discord AutoMod action.

Using this message, you can take steps against the user if you have the required permissions, for example, warn or ban them.

## Default messages delete range {#setting-default-delete-duration}

Deletes this time span of messages when a user is banned. Due to Discord limits, you can use a maximum of seven days (`7d`).

## Block markdown headers {#setting-block-markdown-headers}

Prevents users from sending messages starting with markdown headers (`#`, `##`, and `###`). This can prevent flooding of channels by using large text.

## AutoMod explanations {#setting-automod-explain}

Sends users a DM when they violate a Discord AutoMod rule of the server that contains the violated word or RegEx and the full message content.

## DM messages on ban/kick/mute/warn {#setting-dm-messages-on-ban-kick-mute-warn}

Edit the message users receive by DM if a moderator uses one of the mentioned moderation actions on them.

Leave empty to disable.

## Only attachment channels {#setting-attachment-only-channels}

In selected channels users can only send attachments, for example images or videos. Only text is not allowed, but messages can contain an optional text.

## Minimum account age {#setting-min-age}

Minimum account age for newly joined Discord users. If they are not old enough, they will be kicked.

## AutoMod caps percentage {#setting-automod-caps}

At what percentage of capital letters in a message (30-100, default 70) the bot will start deleting it due to too many caps.

## Disable DMs forever {#setting-disable-dms-forever}

Disables sending DMs to users who have never communicated before.

This uses the safety features function provided by Discord, which is expanded automatically by the bot.

## Disable server invites forever {#setting-pause-invites-forever}

Disables server invites forever, preventing users from joining the server even with a valid invite.

This uses the safety features function provided by Discord, which is expanded automatically by the bot.

## Enforce reason {#setting-enforce-reason}

Requires a reason for moderation actions.

## Presets for moderation reasons {#setting-reason-presets}

You can create presets for moderation reasons to create a shortcut for longer moderation reasons.

### Example {#setting-reason-presets-examples}

- `name`: "r1"
- `value`: "You violated rule 1: Advertising is forbidden!"

## Auto dehoist {#setting-auto-dehoist}

Configures whether the bot should automatically run the `dehoist` command once a day.

This removes characters from the display name of users, which push them to the top of the member list.
