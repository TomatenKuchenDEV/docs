---
title: Vote-Announcements
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt das Setup der Vote-Announcements.
---

Mithilfe der Vote-Announcements kannst du eine Nachricht senden lassen, wenn jemand für deinen Server bzw. Bot voted.

![Vote-Announcements](/img/voteannouncements.png)

## Einstellungen

### Kanal
Hier kann der Kanal festgelegt werden, in den die Votenachricht gesendet wird.

### Nachrichten
Hier kannst du die Server- und Botvotenachricht einstellen.

Folgende Variablen können verwendet werden:
- `{usermention}`: Erwähnung des Nutzers, welcher gevoted hat
- `{userid}`: ID des votenden Nutzers
- `{username}`: Nutzername des votenden Nutzers
- `{useravatar}`: Avatar-URL des votenden Nutzers
- `{domain}`: Die Domain, auf der gevoted wurde
- `{url}`: URL des Bots bzw. Servers
- `{voteurl}`: URL, auf der Nutzer voten können

### Voterolle
Hier kann eine Rolle festgelegt werden und wie lange Nutzer diese behalten.
Nutzer erhalten diese Rolle automatisch beim Voten. Nachdem die festgelegte Zeit abgelaufen ist, wird sie wieder entfernt.

## Unterstützte Server- und Botlisten

- Top.gg: `topgg`
  - Server & Bots
- Discordbotlist.com: `dbl`
  - Bots
- Discords.com: `discords`
  - Bots

Dir fehlt eine Seite? Schlage sie einfach auf unserem [Support-Server](https://tomatenkuchen.eu/discord) vor.
