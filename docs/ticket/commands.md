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

## Reopen a closed ticket

`reopen`

## Save transcript

`transcript`

## Show tickets & transcripts

`tickets [<User>] [<Filter>]`

## Create a ticketembed

Prepares a ticket embed. You can add more buttons for different ticket categories.

`ticketembed [<Title> <Description> <Button text>]`
