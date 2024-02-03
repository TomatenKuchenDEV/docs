---
title: Ticket commands
description: Lists the ticket commands.
---

## Create ticket {#cmd-create}

`ticket [<Reason>]`

Moderators and admins can also specify a user for whom the ticket should be created instead of a reason.

## Add a user or role to the current ticket {#cmd-add}

`tickets add <User|Role>`

## Remove a user or role from the current ticket {#cmd-remove}

`tickets remove <User|Role>`

## Close ticket {#cmd-close}

`close [<Reason>]`

This will send the user a DM if this setting is enabled in the dashboard.

## Delete ticket {#cmd-delete}

`delete`

To delete a ticket, you need one of the ticket manager roles or the "Manage Guild" permission.

## Claiming {#cmd-claim}

:::warning

This command and button are only available when claiming has been enabled in the [settings](/tickets/claiming).

:::

- `claim` or button on the ticket message: Claims the current ticket.
- `claim <Other user>`: Transfers the current ticket to the other user.

## Reopening a closed ticket {#cmd-reopen}

Button on the close ticket message

## Show tickets & transcripts {#cmd-history}

`tickets list [<User>] [<Filter>]`

## Moving into another ticket category {#cmd-move}

`tickets move <New category>`

This will send the ticket start message again and, if you're using channels for tickets, move the channel category if needed.

## Create a ticketembed {#cmd-embed}

Prepares a ticket embed. You can add custom buttons for different ticket categories.

After creation, you can fully edit the message content and embed using https://embed.tomatenkuchen.com .

`ticketembed [<Title> <Description> <Button text>]`

## View statistics {#cmd-stats}

`stats tickets [<Time since when ticket statistics should be displayed>]`

## Save transcript {#cmd-transcript}

`transcript`
