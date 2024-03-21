---
title: Ticketbefehle
description: Listet alle Ticketbefehle auf.
---

## Ticket erstellen {#cmd-create}

<Command name="ticket" slash="[reason:Grund]" message="[<Grund>]"></Command>

Anstelle eines Grundes können Nutzer mit einer [Managerolle](./general#manage-roles) auch einen Nutzer angeben, für den das Ticket erstellt werden soll, oder eine Ticketkategorie.

## Nutzer oder Rolle zum aktuellen Ticket hinzufügen {#cmd-add}

<Command name="tickets add" slash="[user:Nutzer oder Rolle]" message="<Nutzer oder Rolle>"></Command>

## Nutzer oder Rolle vom aktuellen Ticket entfernen {#cmd-remove}

<Command name="tickets remove" slash="[user:Nutzer oder Rolle]" message="<Nutzer oder Rolle>"></Command>

## Ticket schließen {#cmd-close}

<Command name="close" slash="[reason:Grund]" message="[<Grund>]"></Command>

Dies wird dem Nutzer eine PN senden, wenn diese Einstellung im Dashboard aktiviert ist.

## Ticket löschen {#cmd-delete}

<Command name="delete"></Command>

Um Tickets zu löschen braucht man eine der Ticket-Manager-Rollen oder die Berechtigung "Server verwalten".

## Claiming {#cmd-claim}

:::warning

Diese Befehle bzw. dieser Button ist nur verfügbar, wenn Claimen in den [Einstellungen](/tickets/claiming) aktiviert wurde.

:::

- `claim` oder Button auf der Ticketnachricht: Claimt das aktuelle Ticket.
- `claim <Anderer Nutzer>`: Überträgt das aktuelle Ticket an den anderen Nutzer.

## Geschlossenes Ticket wieder öffnen {#cmd-reopen}

Button auf der Ticket-geschlossen-Nachricht

## Tickets & Transcripte anzeigen {#cmd-list}

<Command name="tickets list" slash="[user:Nutzer state:Filter]" message="[<Nutzer>] [<Filter>]"></Command>

Zeigt alle Tickets des Servers an, optional anhand eines Nutzers oder des Status gefiltert.

## Ticket in andere Kategorie verschieben {#cmd-move}

<Command name="tickets move" slash="category:Neue Kategorie" message="<Neue Kategorie>"></Command>

Dies wird die Anfangsnachricht vom Ticket erneut senden und, wenn Kanäle für die Tickets verwendet werden, ggf. die Kategorie des Kanals ändern.

## Ticketembed erstellen {#cmd-embed}

Bereitet ein Ticketembed vor. Es können weitere, benutzerdefinierte Buttons für verschiedene Ticketkategorien hinzugefügt werden.

Nach der Erstellung kannst du den Nachrichteninhalt und die Embeds mithilfe von https://embed.tomatenkuchen.com anpassen.

`ticketembed [<Titel> <Beschreibung> <Buttontext>]`

## Statistiken ansehen {#cmd-stats}

`stats tickets [<Zeitpunkt, ab dem Statistiken über Tickets gesammelt werden>]`

## Transcript speichern {#cmd-transcript}

`transcript`
