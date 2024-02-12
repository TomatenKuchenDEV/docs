---
title: Vote-Announcements
description: Erklärt das Setup der Vote-Announcements.
image: /img/voteannouncements.png
---

Mithilfe der Vote-Announcements kannst du eine Nachricht senden lassen, wenn jemand für deinen Server bzw. Bot voted.

![Vote-Announcements](/img/voteannouncements.png)

## Befehle {#commands}

Mit dem Befehl `leaderboard servervote` bzw. `leaderboard botvote` lässt sich ein Leaderboard anzeigen, auf welchem angezeigt wird, welcher Nutzer am häufigsten gevoted hat.

## Einstellungen {#settings}

### Kanal {#settings-channel}

Hier kann der Kanal festgelegt werden, in den die Votenachricht gesendet wird.

### Nachrichten {#settings-message}

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

### Voterolle {#settings-role}

Hier kann eine Rolle festgelegt werden und wie lange Nutzer diese behalten.
Nutzer erhalten diese Rolle automatisch beim Voten. Nachdem die festgelegte Zeit abgelaufen ist, wird sie wieder entfernt.

## Unterstützte Server- und Botlisten {#supported}

Nutze je nach Server- bzw. Botliste die entsprechende URL als Webhook-URL und das im Dashboard erwähnte Secret als Webhook-Secret.

- Top.gg: `topgg`
  - Bots: `https://api.tomatenkuchen.com/botvote/<Server-ID>/topgg`
- Discordbotlist.com: `dbl`
  - Bots: `https://api.tomatenkuchen.com/botvote/<Server-ID>/dbl/<Bot-ID>`
- Discords.com: `discords`
  - Bots: `https://api.tomatenkuchen.com/botvote/<Server-ID>/discords`

Dir fehlt eine Seite? Schlage sie einfach auf unserem [Support-Server](https://tomatenkuchen.com/discord) vor.
