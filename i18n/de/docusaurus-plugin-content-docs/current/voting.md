---
title: Vote-Announcements
description: Mit Vote-Announcements kannst du Nutzer fürs Voten für Server/Bots belohnen - sende z. B. eine eigene Nachricht und füge dem Nutzer eine temporäre Rolle hinzu.
image: /img/voteannouncements.webp
---

Mithilfe der Vote-Announcements kannst du eine Nachricht senden lassen, wenn jemand für deinen Server bzw. Bot voted.

![Vote-Announcements](/img/voteannouncements.webp)

## Befehle {#commands}

Mit dem Befehl `leaderboard servervote` bzw. `leaderboard botvote` lässt sich ein Ranking der Nutzer anzeigen, welche am meisten gevoted haben.

## Einstellungen {#settings}

### Kanal {#channel}

Hier kann der Kanal festgelegt werden, in den die Votenachricht gesendet wird.

### Nachrichten {#message}

Hier kannst du die Server- und Botvotenachricht einstellen.

Folgende Variablen können verwendet werden (Groß- und Kleinschreibung wird ignoriert):
- `{userMention}`: Erwähnung des Nutzers, welcher gevoted hat
- `{userId}`: ID des votenden Nutzers
- `{username}`: Nutzername des votenden Nutzers
- `{globalName}`: Globaler Nickname des votenden Nutzers
- `{userAvatar}`: Avatar-URL des votenden Nutzers
- `{domain}`: Der Name des Dienstes (die Domain), auf der gevoted wurde
- `{url}`: URL des Bots bzw. Servers
- `{voteUrl}`: URL, auf der Nutzer voten können

### Voterolle {#role}

Hier kann eine Rolle festgelegt werden und wie lange Nutzer diese behalten.

Nutzer erhalten diese Rolle automatisch, nachdem sie auf einer Seite gevoted haben.
Nachdem die festgelegte Zeit abgelaufen ist wird die Rolle wieder entfernt.
