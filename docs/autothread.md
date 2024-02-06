---
title: Automatic threads
description: Using the automatic thread creation feature, you can e.g. improve the usability of discussion or bug report channels.
---

Using this feature you can let the bot automatically create threads in selected channels when a new message is sent in them.

## Adding channels {#add-channels}

You can add channels using the [setting in the dashboard](https://tomatenkuchen.com/dashboard/settings#autoThreadChannels), in which a new thread should be created when a new message is sent.

You have multiple variables when choosing the name of the thread.

## Variables for the thread name {#vars}

- `{username}`: The username of the user
- `{globalName}`: The global display name
- `{nickname}`: The nickname of the user on the server
- `{content}`: The content of the message

Note that the name must not be longer than 100 characters.

## Permissions {#permissions}

The bot requires at least the following permissions in the selected channels for this feature:
- View Channel
- Send Messages
- Read Message History
- Create Public Threads
