---
title: Boost-Nachrichten
description: Erklärt, wie man Nachrichten bei neuen Boostern oder ehemaligen Boostern senden kann.
---

Mit dieser Funktion kann eine Nachricht gesendet werden, wenn ein Nutzer den Server boosted und davor noch nicht geboosted hat, und wenn ein Nutzer alle seine Boosts vom Server entfernt.

Es ist nicht möglich für den Bot, herauszufinden, wie oft ein bestimmter Nutzer den Server geboosted hat.

## Einstellungen {#settings}

### Booststart- und -endnachricht {#message}

Hier kann die Nachricht, die beim Boosten bzw. Ende des Boostens gesendet wird, angepasst werden.

### Boost-Nachrichten-Kanal {#start-channel}

In diesen Kanal wird eine Nachricht gesendet, wenn ein Nutzer das erste Mal den Server boosted.

### Ehemalige-Booster-Nachrichten-Kanal {#end-channel}

In diesen Kanal wird eine Nachricht gesendet, wenn ein Nutzer alle seine Boosts vom Server entfernt hat.

## Variablen {#vars}

Wie fast überall wird die Groß- und Kleinschreibung der Variablen hier ignoriert.

- `{userMention}`: Erwähnung des Nutzers
- `{username}`: Globaler Benutzername
- `{displayName}`: Nickname
- `{globalName}`: Globaler Anzeigename
- `{boosts}`: Anzahl der Boosts auf dem Server
- `{level}`: Aktuelles Boostlevel
