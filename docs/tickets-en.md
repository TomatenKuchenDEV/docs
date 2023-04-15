---
title: Ticketcommands
lang: en
---

# Commands

## Create ticket

`ticket [<Reason>]`

## Add a user or role to the current ticket

`add <User>`

## Remove a user or role from the current ticket

`remove <User>`

## Close ticket

`close`

## Delete ticket

`delete`

In order to delete a ticket you need the "Manage Server" permission.

## Reopen a closed ticket

`reopen`

## Save transcript

`transcript`

## Show tickets & transcripts

`tickets [<User>]`

## Create a ticketembed

`ticketembed [<Title> <Description> <Button text>]`

# Setting up ticket categories

In the dashboard you can create ticket categories, with which, depending on which ticketembed was used for the creation, a different ticket is created.
You can set the category, the transcript channel and the message for each ticket category individually.

Open the settings page of your server and find the setting for ticket categories. Click on the "Add" button and fill in the values accordingly.
<code>message</code> equals the message id of a ticket embed message.

# Other
## Automatic transcript creation
By default, the bot creates a transcript when a ticket is closed. This setting can be changed in the [Dashboard](https://tomatenkuchen.eu/dashboard/settings/).

## Saving of attachments in tickets
By default, attachments are saved in another Discord channel to make them still retrievable after deleting a ticket in the transcript.
Every user can change this setting by using the command <code>/usersettings</code>.
