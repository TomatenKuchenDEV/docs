---
title: Vorschläge
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt das Vorschlagssystem vom Bot.
---

## Befehle

### `suggest [<Text> <Bild>]`

Macht einen neuen Vorschlag. Dasselbe kann durch das Senden einer Nachricht im Vorschlagskanal erzielt werden.

Mit dem Befehl `suggest top` können die Vorschläge mit den meisten Votes angezeigt werden.

### `approve <ID> [<Grund>]` und `deny <ID> [<Grund>]`

Akzeptiert einen Vorschlag bzw. lehnt ihn ab. Entfernt die Reaktionen bzw. Buttons der Nachricht, welches das nachträgliche Verändern der Stimmen verhindert.

### `reply <ID> [<Text>]`

Antwortet auf einen Vorschlag.

### `editsuggest <ID> [<Neuer Text>]`

Bearbeitet einen deiner Vorschlag oder, wenn du die Berechtigung "Nachrichten verwalten" hast, auch die Vorschläge anderer Nutzer.

## Einstellungen

### Vorschlägekanäle

#### `new`

In diesen Kanal werden neue Vorschläge gesendet. In den meisten Fällen reicht diese Einstellung aus.

#### `approved` und `denied`

In diesen Kanal werden angenommene und abgelehnte Vorschläge gesendet.

#### `replied`

In diesen Kanal werden beantwortete Vorschläge gesendet.

:::warning

Nutzer können nicht mehr auf einem Vorschlag abstimmen, wenn dieser Kanal gesetzt ist und ein Vorschlag mit `reply` beantwortet wird.

:::

### Pending-Kanal

Legt einen Kanal fest, in welchem neue Vorschläge gesammelt werden, um manuell zugelassen oder abgelehnt zu werden.

Alle Nutzer, die Zugriff auf den Kanal haben, können die Vorschläge annehmen oder ablehnen.

Wenn hier kein Kanal ausgewählt ist ist diese Funktion deaktiviert und Vorschläge werden direkt in den Vorschlägekanal gesendet.

### Buttons oder Reaktionen

Du kannst auswählen, ob man mit Buttons oder mit Reaktionen abstimmt. Buttons haben den Vorteil, dass Nutzer nur einmal abstimmen können.

### Grund erzwingen

Erzwingt einen Grund bei Vorschlagsaktionen, z. B. beim Annehmen oder Ablehnen. Standardmäßig deaktiviert.

### Vorlagen für Gründe

Wie auch bei [Moderationsgründen](/category/moderation) kann man Vorlage für Gründe erstellen.
