---
title: Ticketfunktionen
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt die Funktionen und Einstellungen des Ticketsystems.
---

## Ticketkategorien erstellen

Im Dashboard lassen sich Ticketkategorien erstellen, mit denen, je nachdem welches Ticketembed für die Erstellung genutzt wurde, ein unterschiedliches Ticket erstellt wird.
Du kannst die Kategorie, den Transcriptkanal und die Nachricht für jede Ticketkategorie einzeln einstellen.

Öffne die Einstellungsseite deines Servers und finde die Einstellung für Ticketkategorien. Klicke auf den Button "Hinzufügen" und fülle die Werte entsprechend aus.

<code>name</code> ist der benutzerfreundliche Name/ID der Ticketkategorie. <code>message</code> ist veraltet und sollte leer gelassen werden.

## Claiming
Es gibt verschiedene Modi für das Beanspruchen/Claimen von Tickets:

### Disabled
Die Standardeinstellung - Claimen ist deaktiviert und der `claim`-Befehl kann nicht verwendet werden.

### Only claimer
Nur der zugewiesene Nutzer für das Ticket kann den Kanal sehen und antworten. Andere *Supporter*- (nicht Moderator-!)Rollen können das Ticket nicht mehr sehen.

### Claimer can reply, staff view
Nur der zugewiesene Nutzer für das Ticket kann antworten. Andere Nutzer mit einer der festgelegten Supporterrollen können das Ticket nur ansehen.

### Claimer and staff can reply
Jeder, sowohl der zugewiesene Nutzer als auch die Supporterrollen, kann der Ticket sehen und darauf antworten.

## Automatisches Speichern von Benutzeravataren und Anhängen
Standardmäßig werden Anhänge in einem anderen Discord-Kanal gespeichert, um diese auch nach dem Löschen eines Tickets im Transcript noch abrufbar zu machen.
Diese Einstellung kann jeder Nutzer individuell mithilfe von dem Befehl <code>/usersettings</code> ändern.

## Variablen für Ticketnachrichten

### Ticket-erstellt-Nachrichten

- `{usermention}`
- `{username}`
- `{globalname}`
- `{displayname}`
- `{id}`: Die Ticket-ID
- `{servername}`
- `{servericon}`
- `{supporterroles}`: Eine Erwähnung alle als Supporter markierten Rollen
- `{managerroles}`: Eine Erwähnung alle als Moderator markierten Rollen

### Erinnerung für inaktive tickets

Zusätzlich zu den Variablen oben:

- `{allmention}`: Erwähnt den Ticketersteller und alle Nutzer, die zum Ticket hinzugefügt worden sind
- `{timestamp}`: Ein Discord-Timestamp der zeigt, wann das Ticket automatisch geschlossen wird.
