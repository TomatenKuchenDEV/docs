---
title: Vorschläge
description: Erklärt das Vorschlagssystem vom Bot.
---

## Befehle {#commands}

### Vorschlag erstellen {#cmd-suggest}

<Command name="suggest" slash="text:Vorschlags-Inhalt [image:Bild als Anhang]" message="<Vorschlags-Inhalt> [<Bild als Anhang>]"></Command>

Erstellt einen neuen Vorschlag. Dasselbe kann durch das Senden einer Nachricht im Vorschlagskanal erzielt werden.

Mit dem Befehl `suggest top` können die Vorschläge mit den meisten Votes angezeigt werden.

### `approve <ID> [<Grund>]` und `deny <ID> [<Grund>]` {#cmd-approve-deny}

Akzeptiert einen Vorschlag bzw. lehnt ihn ab. Entfernt die Reaktionen bzw. Buttons der Nachricht, welches das nachträgliche Verändern der Stimmen verhindert.

### Antworten auf einen Vorschlag {#cmd-reply}

<Command name="reply" slash="id:Vorschlags-ID text:Kommentar" message="<ID> <Kommentar>"></Command>

Antwortet auf einen Vorschlag mit dem angegebenen Text.

### Vorschlag bearbeiten {#cmd-editsuggest}

<Command name="reply" slash="id:Vorschlags-ID text:Neuer Inhalt" message="<ID> <Neuer Inhalt>"></Command>

Bearbeitet einen deiner Vorschlag oder, wenn du die Berechtigung "Nachrichten verwalten" hast, auch die Vorschläge anderer Nutzer.

## Einstellungen {#settings}

### Vorschlägekanäle {#channels}

#### `new` {#channel-new}

In diesen Kanal werden neue Vorschläge gesendet. In den meisten Fällen reicht diese Einstellung aus.

Wenn in diesen Kanal eine Nachricht gesendet wird, wird diese (inklusive Anhängen) automatisch zu einem Vorschlag.
Dies kann durch den Beginn einer Nachricht mit "[!]" für diese Nachricht deaktiviert werden.

#### `approved` und `denied` {#channel-approved-denied}

In diesen Kanal werden angenommene und abgelehnte Vorschläge gesendet.

#### `replied` {#channel-replied}

In diesen Kanal werden beantwortete Vorschläge gesendet.

:::warning

Nutzer können nicht mehr auf einem Vorschlag abstimmen, wenn dieser Kanal gesetzt ist und ein Vorschlag mit `reply` beantwortet wird.

:::

### Ausstehend-Kanal {#pending}

Legt einen Kanal fest, in welchem neue Vorschläge gesammelt werden, um manuell zugelassen oder abgelehnt zu werden.

Alle Nutzer, die Zugriff auf den Kanal haben, können die Vorschläge annehmen oder ablehnen.

Wenn hier kein Kanal ausgewählt ist ist diese Funktion deaktiviert und Vorschläge werden direkt in den Vorschlägekanal gesendet.

### Buttons oder Reaktionen {#buttons-reactions}

Du kannst auswählen, ob man mit Buttons oder mit Reaktionen abstimmt.

Buttons, der Standardwert, haben den Vorteil, dass Nutzer nur einmal für einen Vorschlag abstimmen können.
Ebenfalls benötigt die Einstellung "Nutzer, die den Server verlassen haben, aus Giveaways und Vorschlags-Votes entfernen" Buttons.

### Cooldown zwischen Vorschlägen {#cooldown}

Diese Zeit legt fest, wie lange Nutzer nach dem Absenden eines Vorschlags warten müssen, bis sie wieder einen neuen Vorschlag machen können.

### Ersteller per PN informieren {#dm-author}

Wenn dieser Wert aktiviert ist, erhält der Ersteller eines Vorschlags eine PN, wenn deren Vorschlag angenommen oder abgelehnt wurde oder eine Antwort erhalten hat.

Diese Einstellung ist standardmäßig aktiviert.

### Grund erzwingen {#require-reason}

Erzwingt einen Grund bei Vorschlagsaktionen, z. B. beim Annehmen oder Ablehnen. Standardmäßig deaktiviert.

### Vorlagen für Gründe {#preset}

Wie auch bei [Moderationsgründen](/category/moderation) kann man Vorlage für Gründe erstellen.

### Votes öffentlich? {#public-votes}

Diese Einstellung legt fest, ob Vorschlagsnachrichten einen "Votes"-Button haben sollen, mit welchem angezeigt werden kann, welches Mitglied wie abgestimmt hat.

Beachte, dass das Aktivieren dieser Einstellung zum Schutz der Anonymität der Nutzer nicht rückwirkend gilt.
