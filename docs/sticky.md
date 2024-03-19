---
title: Sticky messages
description: Using sticky messages you can "pin" messages to the end of the channel - this page explains how to set them up.
---

Using TomatenKuchen you can create sticky message which are held at the end of the selected channel. This means that the bot deletes it's old message and sends the configured message again once someone sends a message in the channel.

This feature can be used if the channel topic isn't enough for explaining the channel rules or for another reason a message should always be stickied to the bottom of the channel.

## Settings per sticky message {#settings}

### Message content {#content}

Using the built-in [message editor](/messageeditor) the sticky message can be freely edited.

### Channel {#channel}

In which channel the sticky message should be pinned to the bottom.

The bot at least needs the permission "Manage Messages" to work.

### Respond to bots {#reply-to-bots}

Whether the bot should respond to other bots when they send a message into the channel.
If disabled TK only responds to humans.
