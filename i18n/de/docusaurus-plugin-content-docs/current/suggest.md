---
title: Vorschläge
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Gibt Hinweise zur Verwendung des Vorschlagssystems
---

# Befehle

## `suggest`

Macht einen neuen Vorschlag. Dasselbe kann durch das Senden einer Nachricht im Vorschlagskanal erzielt werden.

Mit `suggest top` können die Vorschläge mit den meisten Votes angezeigt werden.

## `approve` und `deny`

Akzeptiert einen Vorschlag bzw. lehnt ihn ab. Entfernt je nach Modus die Reaktionen bzw. die Buttons der Nachricht, d. h. dass die Stimmen nicht mehr verändert werden können.

## `reply`

Antwortet auf einen Vorschlag.

## `editsuggest`

Bearbeitet einen deiner Vorschlag oder, wenn du die Berechtigung "Nachrichten verwalten" hast, auch die Vorschläge anderer Nutzer.

# Einstellungen

## Vorschlägekanäle

### `new`

In diesen Kanal werden neue Vorschläge gesendet. In den meisten Fällen reicht diese Einstellung aus.

### `approved` und `denied`

In diesen Kanal werden angenommene und abgelehnte Vorschläge gesendet.

### `replied`

In diesen Kanal werden beantwortete Vorschläge gesendet.

:::caution

Nutzer können nicht mehr auf dem Vorschlag abstimmen, wenn dieser Kanal gesetzt ist und eine Nachricht mit `reply` beantwortet wird!

:::

## Pending

Legt einen Kanal fest, in welchem neue Vorschläge gesammelt werden. Alle Nutzer, die Zugriff auf den Kanal haben, können die Vorschläge annehmen oder ablehnen.

## Buttons oder Reaktionen

Du kannst auswählen, ob man mit Buttons oder mit Reaktionen abstimmt. Buttons haben den Vorteil, dass Nutzer nur einmal abstimmen können.

## Grund erzwingen
Erzwingt einen Grund bei Vorschlagsaktionen, z. B. beim Annehmen oder Ablehnen. Standardmäßig deaktiviert.

## Vorlagen für Gründe
Wie auch bei [Moderationsgründen](./moderation) kann man Vorlage für Gründe erstellen.
