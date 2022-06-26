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

In order to delete a ticket you need the "Manage Server" permission.

## Reopen a closed ticket

`reopen`

## Save transcript

`transcript`

## Show tickets & transcripts

`tickets [<User>]`

## Create a ticketembed

`ticketembed [<Title> <Description> <Button text>]`

## Setup ticket categories

`setup`
See below for detailed explanition.

# Other features

## Ticket categories
Mit dem Befehl `setup` lassen sich mehrere Ticketkategorien erstellen, in denen Texte des Tickets sowie die Kategorie, unter welcher das Ticket erstellt wird, ändern.

The command uses the following syntax:
* Create: `setup add <Ticketembed-Nachrichten-ID> <Ticket-Ziel-Kategorie-ID> [<Ticketnachricht> | <Embedtitel> | <Embedbeschreibung> | <Embedfooter>]`
* Remove: `setup del <Ticketembed-Nachrichten-ID>`

## Automatic transcript creation
By default the bot will automatically create a transcript when a ticket is closed. This setting can be changed on the [dashboard](https://tomatenkuchen.eu/dashboard).
