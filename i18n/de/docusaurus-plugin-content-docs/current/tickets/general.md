---
title: Ticketfunktionen
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt die Funktionen sowie die Einrichtung und Einstellungen des Ticketsystems.
---

## Ticketkategorien erstellen

Im Dashboard lassen sich Ticketkategorien erstellen, mit denen, je nachdem welches Ticketembed für die Erstellung genutzt wurde, ein unterschiedliches Ticket erstellt wird.
Du kannst die Kategorie, den Transcriptkanal und die Nachricht für jede Ticketkategorie einzeln einstellen.

Öffne die Einstellungsseite deines Servers und finde die Einstellung für Ticketkategorien. Klicke auf den Button "Hinzufügen" und fülle die Werte entsprechend aus.

`name` ist der benutzerfreundliche Name/ID der Ticketkategorie. `message` ist veraltet und sollte leer gelassen werden.

## Claiming

Siehe [Claiming](./claiming).

## Automatisches Speichern von Benutzeravataren und Anhängen

Standardmäßig werden Anhänge in einem anderen Discord-Kanal gespeichert, um diese auch nach dem Löschen eines Tickets im Transcript noch abrufbar zu machen.
Diese Einstellung kann jeder Nutzer individuell mithilfe von dem Befehl `usersettings` ändern.

## Einstellungen

### Ticket-erstellt-Nachricht

Es kann eine Standard-Nachricht und eine Nachricht pro Ticketkategorie festgelegt werden, die beim Erstellen eines Tickets gesendet wird.

- `{usermention}`
- `{username}`
- `{globalname}`
- `{displayname}`
- `{id}`: Die Ticket-ID
- `{servername}`
- `{servericon}`
- `{supporterroles}`: Eine Erwähnung alle als Supporter markierten Rollen
- `{managerroles}`: Eine Erwähnung alle als Moderator markierten Rollen

### Erinnerung für inaktive Tickets

Zusätzlich zu den Variablen oben:

- `{allmention}`: Erwähnt den Ticketersteller und alle Nutzer, die zum Ticket hinzugefügt worden sind
- `{timestamp}`: Ein Discord-Timestamp der zeigt, wann das Ticket automatisch geschlossen wird.

### Kanäle oder Threads

Du kannst auswählen, ob der Bot Kanäle oder Threads für Tickets verwenden soll.
