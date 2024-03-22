---
title: Ticketfunktionen
description: Erklärt die Funktionen des Ticketsystems mit all seinen Funktionen, Einrichtungshilfen und Einstellungen.
---

## Ticketkategorien erstellen {#create-ticket-categories}

Im Dashboard lassen sich Ticketkategorien erstellen, mit denen, je nachdem welches Ticketembed für die Erstellung genutzt wurde, ein unterschiedliches Ticket erstellt wird.
Du kannst die Kategorie, den Transcriptkanal und die Nachricht für jede Ticketkategorie einzeln einstellen.

Öffne die Einstellungsseite deines Servers und finde die Einstellung für Ticketkategorien. Klicke auf den Button "Hinzufügen" und fülle die Werte entsprechend aus.

`name` ist die interne ID der Ticketkategorie, trage dort etwas mit Wiedererkennungswert ein.
Die restlichen Felder beziehen sich auf die Nachricht, welche bei einem neuen Ticket gesendet wird, für mehr Informationen siehe [Ticket-erstellt-Nachricht](#ticket-create-message).

## Ticket-Claiming {#claiming}

Siehe [Claiming](./claiming).

## Automatisches Speichern von Anhängen in Tickets {#attachment-storing}

Standardmäßig werden Avatare und Anhänge auf dem TomatenKuchen-Server gespeichert, um diese auch nach dem Löschen eines Tickets im Transcript noch abrufbar zu machen.
Diese Einstellung kann jeder Nutzer individuell mithilfe des Befehls `usersettings` ändern.

## Einstellungen {#settings}

### Ticket-erstellt-Nachricht {#create-message}

Es kann eine Standard-Nachricht und eine Nachricht pro Ticketkategorie festgelegt werden, die beim Erstellen eines Tickets gesendet wird.

Diese Nachricht wird von einer kategoriespezifischen Nachricht überschrieben, sofern mindestens ein Nachrichtenfeld der Ticketkategorie ausgefüllt ist.

- `{userMention}`: Erwähnt den Ticketersteller
- `{username}`: Der Benutzername des Ticketerstellers
- `{globalName}`
- `{displayName}`
- `{id}`: Die (pro Server) eindeutige Ticket-ID
- `{serverName}`: Der Servername
- `{serverIcon}`: Das Servericon
- `{supporterRoles}`: Eine Erwähnung aller als Supporter markierten Rollen
- `{managerRoles}`: Eine Erwähnung aller als Moderator markierten Rollen

### Erinnerung für inaktive Tickets {#inactivity-remind}

Hier kann eine Zeit sowie die Nachricht festgelegt werden, die gesendet wird, wenn ein Ticket für eine bestimmte Zeit lang inaktiv ist, also keine neue Nachricht mehr gesendet wurde.

Zusätzlich zu den Variablen oben:

- `{allmention}`: Erwähnt den Ticketersteller und alle Nutzer, die zum Ticket hinzugefügt worden sind
- `{timestamp}`: Ein Discord-Timestamp, der zeigt, wann das Ticket automatisch geschlossen wird.

### Ticket bei Inaktivität schließen {#inactivity-close}

Mit dieser Einstellung kannst du ein Ticket automatisch vom Bot schließen lassen, wenn es für eine bestimmte Zeit lang inaktiv ist, also keine Nachricht mehr gesendet wurde.

### Kanäle oder Threads {#channels-or-threads}

Du kannst auswählen, ob der Bot Kanäle oder private Threads für Tickets verwenden soll.

Bei privaten Threads wird keine Ticketkategorie verwendet, sondern alle Threads werden im aktuellen Kanal erstellt, in welchem der Befehl ausgeführt worden ist.

### Ticketname {#ticket-name}

Diese [Einstellung](https://tomatenkuchen.com/dashboard/settings#ticketName) erlaubt dir, den Standardnamen eines Tickets anzupassen.

Die folgenden Variablen können im Namen verwendet werden (Groß- und Kleinschreibung wird ignoriert):
- `{username}`
- `{globalName}`
- `{id}`

Für eine Erklärung, wofür diese Variablen stehen, siehe [Ticket-erstellt-Nachricht](#ticket-create-message)

Der Name kann nach der Erstellung mit dem [rename-Befehl](./commands#cmd-rename) umbenannt werden.

### Nachricht an Ticketersteller beim Ticket schließen {#dm-author}

Wenn diese Einstellung auf "Immer" gesetzt ist sendet der Bot automatisch eine PN-Nachricht an den originalen Ticketersteller.

Auf "Manuell" enthält die Ticket-geschlossen-Nachricht einen Button, mit dem eine Nachricht an den Ticketersteller gesendet werden kann.

Im Modus "Deaktiviert" wird keine Nachricht beim Schließen eines Tickets an den Ersteller gesendet.

### Supporter-Rollen {#supporter-roles}

Supporter-Rollen sind Rollen, welche die Berechtigung haben, standardmäßig alle Ticketkanäle anzusehen.

### Manage-Rollen {#manage-roles}

Nutzer mit den hier ausgewählten Rollen haben dieselben Berechtigungen wie Nutzer, die nur eine [Supporter-Rolle](#supporter-rollen) besitzen.

Zusätzlich haben sie die Möglichkeit, Tickets zu löschen, Tickets für andere Nutzer als sie selbst anzulegen, sowie beim Erstellen eines Tickets die Möglichkeit, eine Ticketkategorie auszuwählen.

### Ticketlimit {#limit}

Das [Ticketlimit](https://tomatenkuchen.com/dashboard/settings#ticketLimit) stellt ein, wie viele Tickets ein Nutzer gleichzeitig offen haben kann.
Geschlossene und gelöschte Tickets zählen nicht dazu, erneut geöffenete jedoch schon.

Wenn ein Nutzer dieses Limit erreicht hat kann dieser keine neuen Tickets mehr erstellen.
Stattdessen müssen offene Tickets geschlossen werden.
Alternativ kann auch ein Nutzer mit einer [Manage-Rolle](#manage-roles) ein neues Ticket für den ursprünglichen Nutzer anlegen.

### Ausgeschlossene Rollen {#excluded-roles}

Mit dieser Einstellung können bestimmte Rollen vom Erstellen eines Tickets ausgeschlossen werden.

Auch hier können Nutzer mit einer Manage-Rolle ein Ticket für diese erstellen.
