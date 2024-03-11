---
title: Vote-Announcements
description: Vote-Announcements erlauben dir, Votes für deinen Discord-Server oder -Bot zu sammeln - sende einfach eine vollständig konfigurierbare Nachricht oder füge dem Nutzer eine Rolle für eine benutzerdefinierte Zeit hinzu.
image: /img/voteannouncements.png
---

Mithilfe der Vote-Announcements kannst du eine Nachricht senden lassen, wenn jemand für deinen Server bzw. Bot voted.

![Vote-Announcements](/img/voteannouncements.png)

## Befehle {#commands}

Mit dem Befehl `leaderboard servervote` bzw. `leaderboard botvote` lässt sich ein Leaderboard anzeigen, auf welchem angezeigt wird, welche Nutzer am häufigsten gevoted haben.

## Einstellungen {#settings}

### Kanal {#channel}

Hier kann der Kanal festgelegt werden, in den die Votenachricht gesendet wird.

### Nachrichten {#message}

Hier kannst du die Server- und Botvotenachricht einstellen.

Folgende Variablen können verwendet werden:
- `{usermention}`: Erwähnung des Nutzers, welcher gevoted hat
- `{userid}`: ID des votenden Nutzers
- `{username}`: Nutzername des votenden Nutzers
- `{globalname}`: Globaler Nickname des votenden Nutzers
- `{useravatar}`: Avatar-URL des votenden Nutzers
- `{domain}`: Die Domain, auf der gevoted wurde
- `{url}`: URL des Bots bzw. Servers
- `{voteurl}`: URL, auf der Nutzer voten können

### Voterolle {#role}

Hier kann eine Rolle festgelegt werden und wie lange Nutzer diese behalten.
Nutzer erhalten diese Rolle automatisch beim Voten. Nachdem die festgelegte Zeit abgelaufen ist, wird sie wieder entfernt.
