---
title: Ticketbefehle
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt das Ticketsystem und die Befehle davon.
---

# Befehle

## Ticket erstellen

`ticket [<Grund>]`

## Nutzer oder Rolle zum aktuellen Ticket hinzufügen

`add <Nutzer>`

## Nutzer oder Rolle vom aktuellen Ticket entfernen

`remove <Nutzer>`

## Ticket schließen

`close [<Grund>]`

## Ticket löschen

`delete`

Um Tickets zu löschen braucht man eine der Ticket-Manager-Rollen oder die Berechtigung "Server verwalten".

## Geschlossenes Ticket wieder öffnen

`reopen`

## Transcript speichern

`transcript`

## Tickets & Transcripte anzeigen

`tickets [<Nutzer>] [<Filter>]`

## Ticketembed erstellen

Bereitet ein Ticketembed vor. Es können weitere Buttons für verschiedene Ticketkategorien hinzugefügt werden.

`ticketembed [<Titel> <Beschreibung> <Buttontext>]`

# Ticketkategorien erstellen

Im Dashboard lassen sich Ticketkategorien erstellen, mit denen, je nachdem welches Ticketembed für die Erstellung genutzt wurde, ein unterschiedliches Ticket erstellt wird.
Du kannst die Kategorie, den Transcriptkanal und die Nachricht für jede Ticketkategorie einzeln einstellen.

Öffne die Einstellungsseite deines Servers und finde die Einstellung für Ticketkategorien. Klicke auf den Button "Hinzufügen" und fülle die Werte entsprechend aus.

<code>name</code> ist der benutzerfreundliche Name/ID der Ticketkategorie. <code>message</code> ist veraltet und sollte leer gelassen werden.

# Claiming
Es gibt verschiedene Modi für das Beanspruchen/Claimen von Tickets:

## Disabled
Die Standardeinstellung - Claimen ist deaktiviert und der `claim`-Befehl kann nicht verwendet werden.

## Only claimer
Nur der zugewiesene Nutzer für das Ticket kann den Kanal sehen und antworten. Andere *Supporter*- (nicht Moderator-!)Rollen können das Ticket nicht mehr sehen.

## Claimer can reply, staff view
Nur der zugewiesene Nutzer für das Ticket kann antworten. Andere Nutzer mit einer der festgelegten Supporterrollen können das Ticket nur ansehen.

## Claimer and staff can reply
Jeder, sowohl der zugewiesene Nutzer als auch die Supporterrollen, kann der Ticket sehen und darauf antworten.

# Automatisches Speichern von Benutzeravataren und Anhängen
Standardmäßig werden Anhänge in einem anderen Discord-Kanal gespeichert, um diese auch nach dem Löschen eines Tickets im Transcript noch abrufbar zu machen.
Diese Einstellung kann jeder Nutzer individuell mithilfe von dem Befehl <code>/usersettings</code> ändern.
