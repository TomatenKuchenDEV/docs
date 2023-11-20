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

## Saving of attachments in tickets

By default, attachments are saved on the TomatenKuchen to make them retrievable in a transcript even if the original channel was deleted.
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

Here you can set a time and a message to be sent if no message has been sent for the specified time in the ticket.

In addition to the variables above:

- `{allmention}`: Mentions the ticket creator and all to the ticket added users
- `{timestamp}`: A Discord timestamp which shows when the ticket will be closed automatically

### Close ticket on inactivity

Using this time setting you can let the bot close a ticket automatically if it has been inactive for a certain time, so if no message has been sent.

### Channels or threads

You can select whether the bot should use channels or threads for tickets.

### Message to ticket creator on ticket close

If this setting is set to "Always" the bot sends a DM message to the original ticket creator.

In the mode "Manual" the ticket close message contains a button which can be used to send a message to the ticket creator.

In the mode "Disabled" no message is sent to the creator when a ticket is closed.
