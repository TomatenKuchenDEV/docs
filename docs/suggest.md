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

:::caution

Users cannot vote on a suggestion anymore if this channel is set and the suggestion is replied to using the `reply` command.

:::

### Pending

Sets a channel in which new suggestions are collected to be allowed manually.

All users which have access to the channel can accept or deny them.

### Buttons or reactions

You can select if users vote using buttons or reactions. Buttons have the advantage that users can vote only once.

### Enforce reason

Enforce a reason for suggestion actions, e.g. when approving or denying. Disabled by default.

### Reason presets

Like with [moderation reasons](/category/moderation) you can create preset reasons.
