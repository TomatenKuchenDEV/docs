---
title: Suggestions
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Helps with the suggestion system.
---

# Commands

## `suggest`

Macht einen neuen Vorschlag. Dasselbe kann durch das Senden einer Nachricht im Vorschlagskanal erzielt werden.

Mit `suggest top` können die Vorschläge mit den meisten Votes angezeigt werden.

## `approve` and `deny`

Akzeptiert einen Vorschlag bzw. lehnt ihn ab. Entfernt je nach Modus die Reaktionen bzw. die Buttons der Nachricht, d. h. dass die Stimmen nicht mehr verändert werden können.

## `reply`

Replies to a suggestion.

## `editsuggest`

Bearbeitet einen deiner Vorschlag oder, wenn du die Berechtigung "Nachrichten verwalten" hast, auch die Vorschläge anderer Nutzer.

# Settings

## Suggestion channels

### `new`

In diesen Kanal werden neue Vorschläge gesendet. In den meisten Fällen reicht diese Einstellung aus.

### `approved` and `denied`

Approved and denied suggestions will be sent to these channels.

### `replied`

Replied suggestions will be sent to this channel.

:::caution

Nutzer können nicht mehr auf einem Vorschlag abstimmen, wenn dieser Kanal gesetzt ist und dieser mit `reply` beantwortet wird!

:::

## Pending

Legt einen Kanal fest, in welchem neue Vorschläge gesammelt werden. Alle Nutzer, die Zugriff auf den Kanal haben, können die Vorschläge annehmen oder ablehnen.

## Buttons or reactions

Du kannst auswählen, ob man mit Buttons oder mit Reaktionen abstimmt. Buttons haben den Vorteil, dass Nutzer nur einmal abstimmen können.

## Force reason

Erzwingt einen Grund bei Vorschlagsaktionen, z. B. beim Annehmen oder Ablehnen. Standardmäßig deaktiviert.

## Vorlagen für Gründe

Wie auch bei [Moderationsgründen](./moderation) kann man Vorlage für Gründe erstellen.
