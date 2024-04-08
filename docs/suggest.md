---
title: Suggestions
description: Helps with the suggestion system.
---

## Commands {#commands}

### Creating suggestions {#cmd-suggest}

<Command name="suggest" slash="text:Suggestion content [image:Image as attachment]" message="<Suggestion content> [<Image as attachment>]"></Command>

Makes a new suggestion. The same can be achieved by sending a message in the suggestion channel.

The command `suggest top` lists the most voted suggestions.

### `approve <ID> [<Reason>]` and `deny <ID> [<Reason>]` {#cmd-approve-deny}

Approves or denies a suggestion. It removes the reactions or buttons of the message, which disables changing the vote counts.

### Replying to suggestions {#cmd-reply}

<Command name="reply" slash="id:Suggestion ID text:Comment" message="<ID> <Comment>"></Command>

Replies to a suggestion with the given text.

### Editing suggestions {#cmd-editsuggest}

<Command name="reply" slash="id:Suggestion ID text:New content" message="<ID> <New content>"></Command>

Edits one of your suggestions or, if you have the permission "Manage messages", also the suggestions of other users.

## Settings {#settings}

### Suggestion channels {#channels}

#### `new` {#channel-new}

New suggestions are sent into this channel. In most cases using only this setting is what you want.

If a message is sent in this channel it's automatically converted to a suggestion (including attachments).
This can be disabled for a message by prefixing the content of it with "[!]".

#### `approved` and `denied` {#channel-approved-denied}

Approved and denied suggestions will be sent to these channels.

#### `replied` {#channel-replied}

Replied suggestions will be sent to this channel.

:::warning

Users cannot vote on a suggestion anymore if this channel is set and the suggestion is replied to using the `reply` command.

:::

### Pending suggestions channel {#pending}

Sets a channel in which new suggestions are collected to be allowed or denied manually.

All users which have access to the channel can accept or deny them.

If no channel is selected here this feature is disabled and suggestions are sent directly to the suggestion channel.

### Buttons or reactions {#buttons-reactions}

You can select if users vote using buttons or reactions.

Buttons, the default value, have the advantage that users can vote only for one suggestion at a time.
Also, the setting "Remove left users from giveaways and suggestion votes" requires buttons.

### Cooldown between suggestions {#cooldown}

This time sets how long users have to wait after submitting a suggestion until they're able to make another suggestion.

### Inform creator via DM {#dm-author}

If this setting is enabled the creator of the suggestion receives a DM when their suggestion was accepted or denied, or received a reply.

This setting is enabled by default.

### Enforce reason {#enforce-reason}

Enforce a reason for suggestion actions, e.g. when approving or denying. Disabled by default.

### Reason presets {#reason-presets}

Similar to [moderation preset reasons](/moderation/settings#reason-presets) you can create predefined reasons which allow easier usage.
Check the linked page for examples.

### Visibility of votes {#public-votes}

This setting changes whether suggestion messages should have a "Votes" button which shows which user voted which option.
The amount of votes is displayed always, regardless of this setting.

Note that enabling this setting doesn't work retroactively to protect anonymity of users.

### Vote excluded roles {#vote-excluded-roles}

Members with roles selected in the [setting](https://tomatenkuchen.com/dashboard/settings#suggestVoteExcludedRoles) are unable to vote on suggestions.

Note that while both [buttons and reactions](#buttons-reactions) support this setting, it is not recommended to use reactions due to limits when removing a user reaction.
