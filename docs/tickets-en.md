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

`close [<Reason>]`

## Delete ticket

`delete`

In order to delete a ticket you need one of the ticket manager roles or the "Manage Guild" permission.

## Claiming

`claim`
Claims the ticket.

`claim <Other user>`
Transfers the current ticket to the other user.

## Reopen a closed ticket

`reopen`

## Save transcript

`transcript`

## Show tickets & transcripts

`tickets [<User>] [<Filter>]`

## Create a ticketembed

Prepares a ticket embed. You can add more buttons for different ticket categories.

`ticketembed [<Title> <Description> <Button text>]`

# Setting up ticket categories

In the dashboard you can create ticket categories, with which, depending on which ticketembed was used for the creation, a different ticket is created.
You can set the category, the transcript channel and the message for each ticket category individually.

Open the settings page of your server and find the setting for ticket categories. Click on the "Add" button and fill in the values accordingly.

<code>name</code> is the user friendly name/ID of the ticket category. <code>message</code> should be left empty as it's deprecated.

# Claiming
You can choose different modes for ticket claiming:

## Disabled
The default setting - you can't use the `claim` command in this mode.

## Only claimer
Only the assigned user can see and reply to the ticket. *Supporter* (not manager!) ticket roles are removed from the channel.

## Claimer can reply, other staff view
Only the assigned user can reply to the ticket. Supporter roles can view the channel, but cannot reply.

## Claimer and staff can reply
The claimer and users from the supporter roles can view and reply to the ticket.

# Saving of user avatars and attachments in tickets
By default, attachments are saved in another Discord channel to make them still retrievable after deleting a ticket in the transcript.
Users can change this setting by using the command <code>/usersettings</code>.
