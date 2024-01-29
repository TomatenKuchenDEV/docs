---
title: Ticketbefehle
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Listet alle Ticketbefehle auf.
---

## Ticket erstellen {#cmd-create}

`ticket [<Grund>]`

Anstelle eines Grundes können Moderatoren und Admins auch einen Nutzer angeben, für den das Ticket erstellt werden soll.

## Nutzer oder Rolle zum aktuellen Ticket hinzufügen {#cmd-add}

`tickets add <Nutzer|Rolle>`

## Nutzer oder Rolle vom aktuellen Ticket entfernen {#cmd-remove}

`tickets remove <Nutzer|Rolle>`

## Ticket schließen {#cmd-close}

`close [<Grund>]`

Dies wird dem Nutzer eine PN senden, wenn diese Einstellung im Dashboard aktiviert ist.

## Ticket löschen {#cmd-delete}

`delete`

Um Tickets zu löschen braucht man eine der Ticket-Manager-Rollen oder die Berechtigung "Server verwalten".

## Claiming {#cmd-claim}

:::warning

Diese Befehle bzw. dieser Button ist nur verfügbar, wenn Claimen in den [Einstellungen](/tickets/claiming) aktiviert wurde.

:::

- `claim` oder Button auf der Ticketnachricht: Claimt das aktuelle Ticket.
- `claim <Anderer Nutzer>`: Überträgt das aktuelle Ticket an den anderen Nutzer.

## Geschlossenes Ticket wieder öffnen {#cmd-reopen}

Button auf der Ticket-geschlossen-Nachricht

## Tickets & Transcripte anzeigen {#cmd-history}

`tickets list [<Nutzer>] [<Filter>]`

## Ticket in andere Kategorie verschieben {#cmd-move}

`tickets move <Neue Kategorie>`

Dies wird die Anfangsnachricht vom Ticket erneut senden und, wenn Kanäle für die Tickets verwendet werden, ggf. die Kategorie des Kanals ändern.

## Ticketembed erstellen {#cmd-embed}

Bereitet ein Ticketembed vor. Es können weitere, benutzerdefinierte Buttons für verschiedene Ticketkategorien hinzugefügt werden.

Nach der Erstellung kannst du den Nachrichteninhalt und die Embeds mithilfe von https://embed.tomatenkuchen.com anpassen.

`ticketembed [<Titel> <Beschreibung> <Buttontext>]`

## Statistiken ansehen {#cmd-stats}

`stats tickets [<Zeitpunkt, ab dem Statistiken über Tickets gesammelt werden>]`

## Transcript speichern {#cmd-transcript}

`transcript`
