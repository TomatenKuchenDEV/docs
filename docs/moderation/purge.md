---
title: Deleting messages (Purge)
description: Lists moderation commands
---

## Syntax {#syntax}

`purge <Amount> [<Filter>] [pinned]`

If you include `pinned`, pinned messages will be deleted too.

## Filters {#filters}

`<Filter>` can be one of the following:
- `<User>`: Deletes all messages from a user
- bot: Deletes all messages from bots
- nobot: Deletes all messages from humans
- embed: Deletes all messages with embeds
- file: Deletes all messages with attachments
- mention: Deletes all messages with mentions
- link: Deletes all messages with links
- emoji: Deletes all messages with emojis
- `contains <Text>`: Deletes all messages that contain a certain text
- `notcontains <Text>`: Deletes all messages that do *not* contain a certain text

You can also use the parameters `-after=<Message ID>` and `-before=<Message ID>` to delete messages that were sent between two different messages.

:::info Not all messages were deleted?

If TomatenKuchen didn't delete the amount of messages you specified, it can have the following reasons:
- The messages are older than two weeks
- The messages are pinned and `pinned` wasn't specified as an argument
- The messages don't match the filter

Also note that the given amount of messages only changed how many messages are loaded -
not how many messages are deleted.

:::
