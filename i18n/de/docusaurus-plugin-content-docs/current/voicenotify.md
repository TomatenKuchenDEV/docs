---
title: Voicenotify
description: Mit dem TomatenKuchen-Voicenotify-System lässt sich eine beliebige Nachricht mit einem konfigurierbaren Cooldown senden, wenn ein Nutzer einem Sprachkanal beitritt.
---

Mithilfe der Voicenotify-Einstellungen kannst du eine Nachricht senden lassen, sobald ein Nutzer einen festgelegten Sprachkanal betritt.

## Notify-Kanäle {#settings}

Hier kannst du die Sprachkanäle hinzufügen und für jeden eine individuelle Nachricht festlegen.

### Nachricht {#message}

Mögliche Variablen (ignoriert Groß- bzw. Kleinschreibung):
- `{username}`: Der Name des Nutzers
- `{globalName}`: Der globale Nickname des Nutzers
- `{userMention}`: Die Erwähnung
- `{userAvatar}`: Die Avatar-URL des Nutzers
- `{displayName}`: Der Anzeigename des Nutzers
- `{channel}`: Der Kanalname des Kanals, dem der Nutzer beigetreten ist
- `{channelMention}`: Die Kanalerwähnung
- `{serverSame}`: Der Servername
- `{serverIcon}`: Das Servericon

### Nachrichtenkanal {#channel}

In diesen Kanal wird die festgelegte Nachricht gesendet.

### Nachricht löschen nach {#delete-after}

Es kann eine Zeit festgelegt werden, nach welcher die Notify-Nachricht gelöscht werden soll. Diese Option ist standardmäßig deaktiviert.

### Cooldown {#cooldown}

Hier kann der Cooldown, in dem keine Nachricht gesendet wird, festgelegt werden.
Diese Einstellung kann verwendet werden, um Ping-Spam zu reduzieren.
Der Mindestwert für beide Einstellungen beträgt 15 Sekunden.

- `user` regelt den Cooldown pro Nutzer: Wenn ein Nutzer eine Nachricht auslöst wird keine Nachricht mehr gesendet, wenn er innerhalb dieser Zeitspanne den Kanal nochmal oder einen anderen betritt. Standard: Drei Minuten (`3m`)
- `channel` regelt den Cooldown pro Kanal: Wenn eine Nachricht in dem Kanal ausgelöst worden ist, wird innerhalb dieser Zeit keine Nachricht mehr gesendet, wenn derselbe oder ein anderer Nutzer den Kanal betritt. Standard: Eine Minute (`1m`)
