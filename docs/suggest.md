---
title: Suggestions
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Helps with the suggestion system.
---

## Commands

### `suggest [<Text> <Image>]`

Makes a new suggestion. The same can be achieved by sending a message in the suggestion channel.

The command `suggest top` lists the most voted suggestions.

### `approve <ID> [<Reason>]` and `deny <ID> [<Reason>]`

Approves or denies a suggestion. It removes the reactions or buttons of the message, which disables changing the vote counts.

### `reply <ID> [<Text>]`

Replies to a suggestion.

### `editsuggest <ID> [<New text>]`

Edits one of your suggestions or, if you have the permission "Manage messages", also the suggestions of other users.

## Settings

### Suggestion channels

#### `new`

In this channel new suggestions will be sent. In most cases using this setting is what you want.

#### `approved` and `denied`

Approved and denied suggestions will be sent to these channels.

#### `replied`

Replied suggestions will be sent to this channel.

:::warning

Users cannot vote on a suggestion anymore if this channel is set and the suggestion is replied to using the `reply` command.

:::

### Pending channel

Sets a channel in which new suggestions are collected to be allowed or denied manually.

All users which have access to the channel can accept or deny them.

If no channel is selected here this feature is disabled and suggestions are sent directly to the suggestion channel.

### Buttons or reactions

You can select if users vote using buttons or reactions. Buttons have the advantage that users can vote only once.

### Cooldown between suggestions

This time sets how long users have to wait after submitting a suggestion until they're able to make another suggestion.

### Inform creator via DM

If this setting is enabled the creator of the suggestion receives a DM when their suggestion was accepted or denied, or received a reply.

This setting is enabled by default.

### Enforce reason

Enforce a reason for suggestion actions, e.g. when approving or denying. Disabled by default.

### Reason presets

Like with [moderation reasons](/category/moderation) you can create preset reasons.
