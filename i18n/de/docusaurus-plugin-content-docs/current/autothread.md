---
title: Automatische Threads
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Mit der automatischen Erstellung von Threads können z. B. Diskussionskanäle oder Bugreport-Kanäle übersichtlicher gestaltet werden.
---

Mithilfe dieser Funktion lassen sich automatisch Threads in ausgewählten Kanälen erstellen, wenn eine neue Nachricht in diesen gesendet wird.

## Kanäle hinzufügen {#add-channels}

In der [Einstellung im Dashboard](https://tomatenkuchen.com/dashboard/settings#autoThreadChannels) können Kanäle hinzugefügt werden, in welchen ein neuer Thread erstellt werden soll, wenn eine neue Nachricht gesendet wird.

Du hast mehrere Variablen zur Auswahl, welche im Namen des Threads verwendet werden können.

## Variablen für den Threadnamen {#vars}

- `{username}`: Der Benutzername des Nutzers
- `{globalName}`: Der globale Anzeigename
- `{nickname}`: Der Nickname des Nutzers auf dem Server
- `{content}`: Der Inhalt der Nachricht

Beachte, dass der Name maximal 100 Zeichen lang sein kann.

## Berechtigungen {#permissions}

Der Bot benötigt für diese Funktion mindestens die folgenden Berechtigungen in den Kanälen:
- Kanal ansehen
- Nachrichten senden
- Nachrichtenverlauf lesen
- Öffentliche Threads erstellen
