---
title: Voicenotify
lang: de
---

Mithilfe der Voicenotify-Einstellungen kannst du eine Nachricht senden lassen, sobald ein Nutzer festgelegten Sprachkanälen betritt.

# Einstellungen

## Notify-Kanäle
Hier kannst du die Sprachkanäle hinzufügen und für jeden eine eigene Nachricht festlegen.

## Nachrichtenkanal
In diesen Kanal wird die festgelegte Nachricht gesendet.

## Cooldown
Hier kann der Cooldown, in dem keine Nachricht gesendet wird, festgelegt werden.
Diese Einstellung kann verwendet werden, um Ping-Spam zu reduzieren. Der Mindestwert für beide Einstellungen beträgt 10 Sekunden (`10s`).

- `user` regelt den Cooldown pro Nutzer: Wenn ein Nutzer eine Nachricht auslöst wird keine Nachricht mehr gesendet, wenn er innerhalb dieser Zeitspanne den Kanal nochmal oder einen anderen betritt. Standard: Drei Minuten (`3m`)
- `channel` regelt den Cooldown pro Kanal: Wenn eine Nachricht in dem Kanal ausgelöst worden ist, wird innerhalb dieser Zeit keine Nachricht mehr gesendet, wenn derselbe oder ein anderer Nutzer den Kanal betritt. Standard: Eine Minute (`1m`)
