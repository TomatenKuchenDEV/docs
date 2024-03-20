---
title: Autodelete
description: Erklärt die Einrichtung von Kanälen, in denen Nachrichten nach einer bestimmten Zeit gelöscht werden.
---

Es können Kanäle festgelegt werden, in denen die Nachrichten nach der festgelegten Zeit (± eine Minute) gelöscht werden.

Diese Funktion ist nützlich für z. B. Werbekanäle, in denen Nachrichten nach 6 Stunden o. ä. gelöscht werden sollen.

## Einstellungen pro Kanal {#settings}

Die Zeit wird im Standard-Zeitformat des Bots angegeben:
- `5m`: Fünf Minuten
- `1h30m`: Eine Stunde und 30 Minuten
- `6h`: Sechs Stunden, nachdem die Nachricht gesendet worden ist.

Es können Zeiten von bis zu einem Jahr angegeben werden.

## Autopurge {#autopurge}

In dem festgelegten Intervall in den [Autopurge-Einstellungen](https://tomatenkuchen.com/dashboard/settings#autoPurge) werden die letzten 1000 Nachrichten in dem jeweils ausgewählten Kanal gelöscht.

Das Intervall muss mindestens 30 Minuten betragen und die zu löschenden Nachrichten dürfen nicht älter als 14 Tage alt sein.
