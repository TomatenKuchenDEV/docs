---
title: Serverstatistiken
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt die Verwendung von Serverstatistiken
---

# Statistiken in Kanalnamen

![](https://tomatenkuchen.eu/assets/images/stats.webp)

Du kannst die Kanäle, in denen Statistiken angezeigt werden, und wie sie angezeigt werden, in den [Einstellungen](https://tomatenkuchen.eu/dashboard/settings/) einstellen.
Mögliche Variablen:
- `{members}`: Anzahl aller Mitglieder auf dem Server
- `{members.humans}`; Anzahl der nicht-Bots auf dem Server
- `{members.bots}`; Anzahl der Bots auf dem Server
- `{emojis}`; Anzahl der Emojis auf dem Server
- `{stickers}`; Anzahl der Sticker auf dem Server
- `{roles}`; Anzahl der Rollen
- `{boosts}`; Anzahl der Boosts
- `{channels}`; Anzahl aller Kanäle
- `{voicechannels}`; Anzahl der Sprachkanäle
- `{textchannels}`; Anzahl der Textkanäle
- `{categories}`; Anzahl der Kategorien
- `{usersWithRole:<id>}`; Anzahl der Mitglieder mit einer bestimmten Rolle. Ersetze `<id>` mit einer Rollen-ID.

Die Statistiken werden automatisch alle **10 Minuten** aktualisiert.

# Statistiken auf der Botwebsite und `stats`

Beispiel: [Vanilla Minigames Statistiken](https://tomatenkuchen.eu/stats/?guild=608640398595719170)

Der Bot sammelt täglich Statistiken über Server. Dazu gehören:
- Mitgliederanzahl
- Nachrichten pro Tag
- Boostanzahl
- Anzahl aktiver Chatter (wie viele Nutzer an dem Tag eine Nachricht gesendet haben)

## Mögliche Filter
Filter werden als Query-Parameter an die URL angehängt: `https://tomatenkuchen.eu/stats/?guild=608640398595719170?type=messages&time=2w`. Die Verwendung der `?` und `&` in dieser Form ist wichtig.

- `type`: Zeigt nur den angegebenen Typ an:
	- `?type=members`: Mitgliederzahl
	- `?type=messages`: Nachrichten pro Tag
	- `?type=boosts`: Boostanzahl
	- `?type=chatters`: Anzahl aktiver Chatter
- `time`: Zeigt nur Statistiken innerhalb des angegebenen Zeitraums an:
	- `?time=1mo`: Zeigt nur Statistiken innerhalb des letzten Monats an.

Diese Optionen können auch beim `stats`-Befehl verwendet werden. Dieser generiert auch eine entsprechende URL, welche geteilt werden kann.

# Einstellungen

## Sichtbarkeit
Du kannst die Sichtbarkeit der Statistiken ändern. Du kannst zwischen "öffentlich", "Nur für Mitglieder des Servers" und "deaktiviert" wählen.

## Kanäle ausschließen
Hier können Kanälen ausgewählt werden, in denen keine Nachrichtenstatistiken gesammelt werden, z. B. für Botspam-Kanäle.
