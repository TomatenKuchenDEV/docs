---
title: Ticket commands
description: Lists the ticket commands.
---

## Create ticket {#cmd-create}

<Command name="ticket" slash="[reason:Reason]" message="[<Reason>]"></Command>

Users with a [manage role](./general#manage-roles) can also specify a user for whom the ticket should be created instead of a reason, or a ticket category.

## Add a user or role to the current ticket {#cmd-add}

<Command name="tickets add" slash="[user:User or role]" message="<User|Role>"></Command>

## Remove a user or role from the current ticket {#cmd-remove}

<Command name="tickets remove" slash="[user:User or role]" message="<User|Role>"></Command>

## Close ticket {#cmd-close}

<Command name="close" slash="[reason:Reason]" message="[<Reason>]"></Command>

This will send the user a DM if this setting is enabled in the dashboard.

## Delete ticket {#cmd-delete}

<Command name="delete"></Command>

To delete a ticket, you need one of the ticket manager roles or the "Manage Guild" permission.

## Claiming {#cmd-claim}

:::warning

This command and button are only available when claiming has been enabled in the [settings](/tickets/claiming).

:::

- `claim` or button on the ticket message: Claims the current ticket.
- `claim <Other user>`: Transfers the current ticket to the other user.

## Reopening a closed ticket {#cmd-reopen}

Button on the close ticket message

## Show tickets & transcripts {#cmd-list}

<Command name="tickets list" slash="[user:User state:Filter]" message="[<User>] [<Filter>]"></Command>

Displays all tickets of the server, optionally filtered by user and/or status.

## Moving into another ticket category {#cmd-move}

<Command name="tickets move" slash="category:New category" message="<New category>"></Command>

This will send the ticket start message again and, if you're using channels for tickets, move the channel category if needed.

## Create a ticketembed {#cmd-embed}

Prepares a ticket embed. You can add custom buttons for different ticket categories.

After creation, you can fully edit the message using our [message editor](/messageeditor).

`ticketembed [<Title> <Description> <Button text>]`

## View statistics {#cmd-stats}

`stats tickets [<Time since when ticket statistics should be displayed>]`

## Save transcript {#cmd-transcript}

<Command name="transcript"></Command>

## Rename ticket {#cmd-rename}

<Command name="tickets name" slash="name:New ticket name" message="<New ticket name>"></Command>
