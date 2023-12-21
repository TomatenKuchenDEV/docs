---
title: Voicenotify
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt, wie man Nachrichten senden kann, sobald Nutzer einen Sprachkanal betreten.
---

Mithilfe der Voicenotify-Einstellungen kannst du eine Nachricht senden lassen, sobald ein Nutzer einen festgelegten Sprachkanal betritt.

## Notify-Kanäle {#settings}

Hier kannst du die Sprachkanäle hinzufügen und für jeden eine individuelle Nachricht festlegen.

### Nachricht {#settings-message}

Mögliche Variablen:
- `{username}`: Der Name des Nutzers
- `{globalname}`: Der globale Nickname des Nutzers
- `{usermention}`: Die Erwähnung
- `{useravatar}`: Die Avatar-URL des Nutzers
- `{displayname}`: Der Anzeigename des Nutzers
- `{channel}`: Der Kanalname des Kanals, dem der Nutzer beigetreten ist
- `{channelmention}`: Die Kanalerwähnung
- `{servername}`: Der Servername
- `{servericon}`: Das Servericon

### Nachrichtenkanal {#settings-channel}

In diesen Kanal wird die festgelegte Nachricht gesendet.

### Cooldown {#settings-cooldown}

Hier kann der Cooldown, in dem keine Nachricht gesendet wird, festgelegt werden.
Diese Einstellung kann verwendet werden, um Ping-Spam zu reduzieren. Der Mindestwert für beide Einstellungen beträgt 10 Sekunden (`10s`).

- `user` regelt den Cooldown pro Nutzer: Wenn ein Nutzer eine Nachricht auslöst wird keine Nachricht mehr gesendet, wenn er innerhalb dieser Zeitspanne den Kanal nochmal oder einen anderen betritt. Standard: Drei Minuten (`3m`)
- `channel` regelt den Cooldown pro Kanal: Wenn eine Nachricht in dem Kanal ausgelöst worden ist, wird innerhalb dieser Zeit keine Nachricht mehr gesendet, wenn derselbe oder ein anderer Nutzer den Kanal betritt. Standard: Eine Minute (`1m`)

### Nachricht löschen nach {#settings-delete-after}

Es kann eine Zeit festgelegt werden, nach welcher die Notify-Nachricht gelöscht werden soll. Diese Option ist standardmäßig deaktiviert.
