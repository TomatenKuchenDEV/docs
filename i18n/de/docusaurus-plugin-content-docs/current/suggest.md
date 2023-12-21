---
title: Vorschläge
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt das Vorschlagssystem vom Bot.
---

## Befehle {#commands}

### `suggest [<Text> <Bild>]`

Macht einen neuen Vorschlag. Dasselbe kann durch das Senden einer Nachricht im Vorschlagskanal erzielt werden.

Mit dem Befehl `suggest top` können die Vorschläge mit den meisten Votes angezeigt werden.

### `approve <ID> [<Grund>]` und `deny <ID> [<Grund>]`

Akzeptiert einen Vorschlag bzw. lehnt ihn ab. Entfernt die Reaktionen bzw. Buttons der Nachricht, welches das nachträgliche Verändern der Stimmen verhindert.

### `reply <ID> <Text>`

Antwortet auf einen Vorschlag mit dem angegebenen Text.

### `editsuggest <ID> <Neuer Inhalt>`

Bearbeitet einen deiner Vorschlag oder, wenn du die Berechtigung "Nachrichten verwalten" hast, auch die Vorschläge anderer Nutzer.

## Einstellungen {#settings}

### Vorschlägekanäle {#settings-channels}

#### `new` {#settings-channel-new}

In diesen Kanal werden neue Vorschläge gesendet. In den meisten Fällen reicht diese Einstellung aus.

Wenn in diesen Kanal eine Nachricht gesendet wird, wird diese (inklusive Anhängen) automatisch zu einem Vorschlag.
Dies kann durch den Beginn einer Nachricht mit "[!]" für diese Nachricht deaktiviert werden.

#### `approved` und `denied` {#settings-channel-approved-denied}

In diesen Kanal werden angenommene und abgelehnte Vorschläge gesendet.

#### `replied` {#settings-channel-replied}

In diesen Kanal werden beantwortete Vorschläge gesendet.

:::warning

Nutzer können nicht mehr auf einem Vorschlag abstimmen, wenn dieser Kanal gesetzt ist und ein Vorschlag mit `reply` beantwortet wird.

:::

### Ausstehend-Kanal {#settings-pending}

Legt einen Kanal fest, in welchem neue Vorschläge gesammelt werden, um manuell zugelassen oder abgelehnt zu werden.

Alle Nutzer, die Zugriff auf den Kanal haben, können die Vorschläge annehmen oder ablehnen.

Wenn hier kein Kanal ausgewählt ist ist diese Funktion deaktiviert und Vorschläge werden direkt in den Vorschlägekanal gesendet.

### Buttons oder Reaktionen {#settings-buttons-reactions}

Du kannst auswählen, ob man mit Buttons oder mit Reaktionen abstimmt.

Buttons, der Standardwert, haben den Vorteil, dass Nutzer nur einmal für einen Vorschlag abstimmen können.
Ebenfalls benötigt die Einstellung "Nutzer, die den Server verlassen haben, aus Giveaways und Vorschlags-Votes entfernen" Buttons.

### Cooldown zwischen Vorschlägen {#settings-cooldown}

Diese Zeit legt fest, wie lange Nutzer nach dem Absenden eines Vorschlags warten müssen, bis sie wieder einen neuen Vorschlag machen können.

### Ersteller per PN informieren {#settings-dm-author}

Wenn dieser Wert aktiviert ist, erhält der Ersteller eines Vorschlags eine PN, wenn deren Vorschlag angenommen oder abgelehnt wurde oder eine Antwort erhalten hat.

Diese Einstellung ist standardmäßig aktiviert.

### Grund erzwingen {#settings-require-reason}

Erzwingt einen Grund bei Vorschlagsaktionen, z. B. beim Annehmen oder Ablehnen. Standardmäßig deaktiviert.

### Vorlagen für Gründe {#settings-preset}

Wie auch bei [Moderationsgründen](/category/moderation) kann man Vorlage für Gründe erstellen.
