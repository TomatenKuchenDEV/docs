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

# Ticketkategorien erstellen

Im Dashboard lassen sich Ticketkategorien erstellen, mit denen, je nachdem welches Ticketembed für die Erstellung genutzt wurde, ein unterschiedliches Ticket erstellt wird.
Du kannst die Kategorie, den Transcriptkanal und die Nachricht für jede Ticketkategorie einzeln einstellen.

Öffne die Einstellungsseite deines Servers und finde die Einstellung für Ticketkategorien. Klicke auf den Button "Hinzufügen" und fülle die Werte entsprechend aus.
<code>message</code> entspricht der Nachrichten-ID eines Ticketembeds.

# Sonstiges
## Automatische Transcripterstellung
Standardmäßig erstellt der Bot beim Schließen eines Tickets ein Transcript. Diese Einstellung kann im [Dashboard](https://tomatenkuchen.eu/dashboard/settings/) geändert werden.

## Automatisches Speichern von Anhängen
Standardmäßig werden Anhänge in einem anderen Discord-Kanal gespeichert, um diese auch nach dem Löschen eines Tickets im Transcript noch abrufbar zu machen.
Diese Einstellung kann jeder Nutzer individuell mithilfe von dem Befehl <code>/usersettings</code> ändern.
