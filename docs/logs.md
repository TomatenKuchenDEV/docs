---
title: Logging
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. This page explains the logging system.
---

TomatenKuchen provides feature rich logging about most actions that bots can capture.

Note that for most logs, the "View Audit Log" permission is required.

## Log channels with categories {#categories}

Logs are grouped into different categories. For each category you can select a channel in which the bot should send the logs to. The categories are:

- `messageUpdate`: Message edited
- `messageDelete`: Message deleted
- `channelThread`: Kanal or thread created/edited/deleted
- `emojiSticker`: Emoji or sticker created/edited/deleted
- `guild`: Other server changes, e.g. name or icon
- `event`: Scheduled event created/edited/deleted
- `user`: User changed username or avatar
- `member`: Other user changes, e.g. name, avatar	or roles
- `timeout`: User timeouted or untimeouted/timeout ended
- `kick`: User kick
- `ban`: User banned or unbanned
- `voice`: Actions in voice channels

## Channels from which logs are ignored {#ignored-channels}

You can select channels here of which logs won't be shown.
