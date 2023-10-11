---
title: Ticket commands
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Lists the ticket commands.
---

## Create ticket

`ticket [<Reason>]`

Instead of a reason moderators and admins can also specify a user for whom the ticket should be created.

## Add a user or role to the current ticket

`add <User|Role>`

## Remove a user or role from the current ticket

`remove <User|Role>`

## Close ticket

`close [<Reason>]`

This will send the user a DM if this setting is enabled in the dashboard.

## Delete ticket

`delete`

In order to delete a ticket you need one of the ticket manager roles or the "Manage Guild" permission.

## Claiming

- `claim`: Claims the current ticket.
- `claim <Other user>`: Transfers the current ticket to the other user.

## Reopening a closed ticket

Button on the close ticket message

## Show tickets & transcripts

`tickets list [<User>] [<Filter>]`

## Moving into another ticket category

`tickets move <New category>`

This sends the ticket start message again and, if you're using channels for tickets, move the channel category if needed.

## Create a ticketembed

Prepares a ticket embed. You can add custom buttons for different ticket categories.

After creation you can fully edit the message content and embed using https://embed.tomatenkuchen.com .

`ticketembed [<Title> <Description> <Button text>]`

## View statistics

`stats tickets`

## Save transcript

`transcript`
