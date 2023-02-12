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

## Setup ticket categories

`setup`

Mit dem Befehl `setup` lassen sich mehrere Ticketkategorien erstellen, in denen Texte des Tickets sowie die Kategorie, unter welcher das Ticket erstellt wird, ändern.

The command has the following syntax:
* Create: `setup add <Ticketembed message ID> <Ticket-Ziel-Kategorie-ID> [<Ticketnachricht> | <Embedtitle> | <Embeddescription> | <Embedfooter>]`
* Delete: `setup del <Ticketembed message ID>`
* List/Edit: `setup [list]`

# Automatic transcript creation
By default the bot will automatically create a transcript when a ticket is closed. This setting can be changed on the [dashboard](https://tomatenkuchen.eu/dashboard).
