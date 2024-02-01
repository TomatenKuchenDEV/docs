---
title: Ticketfunktionen
description: Erklärt die Funktionen sowie die Einrichtung und Einstellungen des Ticketsystems.
---

## Ticketkategorien erstellen {#create-ticket-categories}

Im Dashboard lassen sich Ticketkategorien erstellen, mit denen, je nachdem welches Ticketembed für die Erstellung genutzt wurde, ein unterschiedliches Ticket erstellt wird.
Du kannst die Kategorie, den Transcriptkanal und die Nachricht für jede Ticketkategorie einzeln einstellen.

Öffne die Einstellungsseite deines Servers und finde die Einstellung für Ticketkategorien. Klicke auf den Button "Hinzufügen" und fülle die Werte entsprechend aus.

`name` ist der Name und die interne ID der Ticketkategorie. Die restlichen Felder beziehen sich auf die Nachricht, welche bei einem neuen Ticket gesendet wird, für mehr Informationen siehe [Ticket-erstellt-Nachricht](#ticket-create-message).

## Ticket-Claiming {#claiming}

Siehe [Claiming](./claiming).

## Automatisches Speichern von Anhängen in Tickets {#attachment-storing}

Standardmäßig werden Avatare und Anhänge auf dem TomatenKuchen-Server gespeichert, um diese auch nach dem Löschen eines Tickets im Transcript noch abrufbar zu machen.
Diese Einstellung kann jeder Nutzer individuell mithilfe des Befehls `usersettings` ändern.

## Einstellungen {#settings}

### Ticket-erstellt-Nachricht {#ticket-create-message}

Es kann eine Standard-Nachricht und eine Nachricht pro Ticketkategorie festgelegt werden, die beim Erstellen eines Tickets gesendet wird.

Diese Nachricht wird von einer kategoriespezifischen Nachricht überschrieben, sofern mindestens ein Nachrichtenfeld der Ticketkategorie ausgefüllt ist.

- `{usermention}`
- `{username}`
- `{globalname}`
- `{displayname}`
- `{id}`: Die Ticket-ID
- `{servername}`
- `{servericon}`
- `{supporterroles}`: Eine Erwähnung alle als Supporter markierten Rollen
- `{managerroles}`: Eine Erwähnung alle als Moderator markierten Rollen

### Erinnerung für inaktive Tickets {#settings-inactivity-remind}

Hier kann eine Zeit sowie die Nachricht festgelegt werden, die gesendet wird, wenn ein Ticket für eine bestimmte Zeit lang inaktiv ist, also keine neue Nachricht mehr gesendet wurde.

Zusätzlich zu den Variablen oben:

- `{allmention}`: Erwähnt den Ticketersteller und alle Nutzer, die zum Ticket hinzugefügt worden sind
- `{timestamp}`: Ein Discord-Timestamp, der zeigt, wann das Ticket automatisch geschlossen wird.

### Ticket bei Inaktivität schließen {#settings-inactivity-close}

Mit dieser Einstellung kannst du ein Ticket automatisch vom Bot schließen lassen, wenn es für eine bestimmte Zeit lang inaktiv ist, also keine Nachricht mehr gesendet wurde.

### Kanäle oder Threads {#settings-channels-or-threads}

Du kannst auswählen, ob der Bot Kanäle oder private Threads für Tickets verwenden soll.

Bei privaten Threads wird keine Ticketkategorie verwendet, sondern alle Threads werden im aktuellen Kanal erstellt, in welchem der Befehl ausgeführt worden ist.

### Nachricht an Ticketersteller beim Ticket schließen {#settings-dm-author}

Wenn diese Einstellung auf "Immer" gesetzt ist sendet der Bot automatisch eine PN-Nachricht an den originalen Ticketersteller.

Auf "Manuell" enthält die Ticket-geschlossen-Nachricht einen Button, mit dem eine Nachricht an den Ticketersteller gesendet werden kann.

Im Modus "Deaktiviert" wird keine Nachricht beim Schließen eines Tickets an den Ersteller gesendet.
