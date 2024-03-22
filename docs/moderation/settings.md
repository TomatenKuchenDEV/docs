---
title: Settings
description: Explains all AutoMod settings.
---

## Delete invites {#delete-invites}

Deletes Discord invites that are not for the current server, if enabled.

## Channels in which invites are allowed {#invites-allowed}

Invites in these channels are not deleted if the above setting is enabled.

## Antispam {#antispam}

Enables or disables the antispam on the server.

## Team channel {#team-channel}

Selects the team channel on the server in which a message is sent when a user triggers a Discord AutoMod action.

Using this message, you can take steps against the user if you have the required permissions, for example, warn or ban them.

## Default messages delete range {#default-delete-duration}

Deletes this time span of messages when a user is banned. Due to Discord limits, you can use a maximum of seven days (`7d`).

## Block markdown headers {#block-markdown-headers}

Prevents users from sending messages starting with markdown headers (`#`, `##`, and `###`). This can prevent flooding of channels by using large text.

## AutoMod explanations {#automod-explain}

Sends users a DM when they violate a Discord AutoMod rule of the server that contains the violated word or RegEx and the full message content.

## Direct messages on ban/kick/mute/warn {#dm-messages}

Edit the message users receive by DM if a moderator uses one of the mentioned moderation actions on them.

Leave empty to disable.

## Only attachment channels {#only-attachment-channels}

In selected channels, users can only send attachments, such as images or videos. Only text is not allowed, but messages can contain optional text.

## Links delete channels {#delete-links-channels}

In selected channels, all kind of links/URLs users send will be deleted, and the user timeouted for a short time.

## Minimum account age {#min-age}

Minimum account age for newly joined Discord users. If they are not old enough, they will be kicked.

## Minimum account age warning {#min-age-warning}

Similar to the above setting, but only sends a warning into the [team channel](#team-channel) instead of kicking the user.

## AutoMod caps percentage {#automod-caps}

At what percentage of capital letters in a message (30-100, default 70) the bot will start deleting it due to too many caps.

## Disable DMs forever {#disable-dms-forever}

Disables sending DMs to users who have never communicated before.

This uses the safety features function provided by Discord, which is expanded automatically by the bot.

## Disable server invites forever {#pause-invites-forever}

Disables server invites forever, preventing users from joining the server even with a valid invite.

This uses the safety features function provided by Discord, which is expanded automatically by the bot.

## Enforce reason {#enforce-reason}

Requires a reason for moderation actions.

## Presets for moderation reasons {#reason-presets}

You can create presets for moderation reasons to create a shortcut for longer moderation reasons.

### Example {#reason-presets-examples}

- `name`: `ads`
- `value`: `You violated our rule "Advertising is forbidden!"`

<Command name="mute" slash="user:User reason:ads" message="<User> ads"></Command>

## Auto dehoist {#auto-dehoist}

Configures whether the bot should automatically run the `dehoist` command once a day.

This removes characters from the display name of users, which push them to the top of the member list.

## File blacklist {#file-blacklist}

This setting and the command `fileblacklist` allow you to blacklist specific files from being sent on your server.

To do that, you need to calculate the sha256 hash of the file. If you don't know how to do that, simply use the command:

<Command name="fileblacklist add" slash="[url:A file URL or sha256 hash to blacklist] [file:The file you want to blacklist] [reason:The blacklist reason]" message="<User> [<Reason>]"></Command>

Either a file hash, URL or the attachment itself must be provided.

Note that while the reason is optional, it's recommended to fill in the context or reason for the blacklist, as you won't be able to see the blacklisted file using TomatenKuchen.
The reason could be for example "nsfw" or "Used by spammers."
