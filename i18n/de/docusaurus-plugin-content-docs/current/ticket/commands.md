---
title: Ticketbefehle
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Listet alle Ticketbefehle auf.
---

## Ticket erstellen

`ticket [<Grund>]`

Anstelle eines Grundes können Moderatoren und Admins auch einen Nutzer angeben, für den das Ticket erstellt werden soll.

## Nutzer oder Rolle zum aktuellen Ticket hinzufügen

`add <Nutzer|Rolle>`

## Nutzer oder Rolle vom aktuellen Ticket entfernen

`remove <Nutzer|Rolle>`

## Ticket schließen

`close [<Grund>]`

Dies wird dem Nutzer eine PN senden, wenn diese Einstellung im Dashboard aktiviert ist.

## Ticket löschen

`delete`

Um Tickets zu löschen braucht man eine der Ticket-Manager-Rollen oder die Berechtigung "Server verwalten".

## Geschlossenes Ticket wieder öffnen

Button auf der Ticket-geschlossen-Nachricht

## Tickets & Transcripte anzeigen

`tickets list [<Nutzer>] [<Filter>]`

## Ticket in andere Kategorie verschieben

`tickets move <Neue Kategorie>`

Dies wird die Anfangsnachricht vom Ticket erneut senden und, wenn Kanäle für die Tickets verwendet werden, ggf. die Kategorie des Kanals.

## Ticketembed erstellen

Bereitet ein Ticketembed vor. Es können weitere, benutzerdefinierte Buttons für verschiedene Ticketkategorien hinzugefügt werden.

Nach der Erstellung kannst du den Nachrichteninhalt und die Embeds mithilfe von https://embed.tomatenkuchen.com anpassen.

`ticketembed [<Titel> <Beschreibung> <Buttontext>]`

## Statistiken ansehen

`stats tickets [<Zeitpunkt, ab dem Statistiken über Tickets gesammelt werden>]`

## Transcript speichern

`transcript`
