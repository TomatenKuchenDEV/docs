---
title: Ticketbefehle
lang: de
---

# Befehle

## Ticket erstellen

`ticket [<Grund>]`

## Nutzer oder Rolle zum aktuellen Ticket hinzufügen

`add <Nutzer>`

## Nutzer oder Rolle vom aktuellen Ticket entfernen

`remove <Nutzer>`

## Ticket schließen

`close`

## Ticket löschen

`delete`

Um Tickets zu löschen braucht man mindestens die Berechtigung "Server verwalten".

## Geschlossenes Ticket wieder öffnen

`reopen`

## Transcript speichern

`transcript`

## Tickets & Transcripte anzeigen

`tickets [<Nutzer>]`

## Ticketembed erstellen

`ticketembed [<Title> <Beschreibung> <Buttontext>]`

## Ticketkategorien erstellen

`setup`

Mit dem Befehl `setup` lassen sich mehrere Ticketkategorien erstellen, in denen Texte des Tickets sowie die Kategorie, unter welcher das Ticket erstellt wird, ändern.

Der Befehl nutzt folgende Syntax:
* Erstellen: `setup add <Ticketembed-Nachrichten-ID> <Ticket-Ziel-Kategorie-ID> [<Ticketnachricht> | <Embedtitel> | <Embedbeschreibung> | <Embedfooter>]`
* Entfernen: `setup del <Ticketembed-Nachrichten-ID>`

# Automatische Transcripterstellung
Standardmäßig erstellt der Bot beim Schließen eines Tickets ein Transcript. Diese Einstellung kann im [Dashboard](https://tomatenkuchen.eu/dashboard) geändert werden.
