---
title: Ticket features
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains the ticket system and the setup and settings of it.
---

## Setting up ticket categories

In the dashboard you can create ticket categories, with which, depending on which ticketembed was used for the creation, a different ticket is created.
You can set the category, the transcript channel and the message for each ticket category individually.

Open the settings page of your server and find the setting for ticket categories. Click on the "Add" button and fill in the values accordingly.

`name` is the user friendly name/ID of the ticket category. `message` should be left empty as it's deprecated.

## Claiming

See [Claiming](./claiming).

## Saving of user avatars and attachments in tickets

By default, attachments are saved in another Discord channel to make them still retrievable after deleting a ticket in the transcript.
Users can change this setting by using the command `usersettings`.

## Settings

### Ticket create message

You can set a default message and one for each ticket category which is sent after creating a ticket.

- `{usermention}`
- `{username}`
- `{globalname}`
- `{displayname}`
- `{id}`: The ticket ID
- `{servername}`
- `{servericon}`
- `{supporterroles}`: A mention of all as supporter marked roles
- `{managerroles}`: A mention of all as moderator marked roles

### Reminder for inactive tickets

In addition to the variables above:

- `{allmention}`: Mentions the ticket creator and all to the ticket added users
- `{timestamp}`: A Discord timestamp which shows when the ticket will be closed automatically

### Channels or threads

You can select whether the bot should use channels or threads for tickets.
