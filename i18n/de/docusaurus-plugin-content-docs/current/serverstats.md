---
title: Serverstatistiken
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt die Einrichtung und Verwendung von Serverstatistiken.
---

## Statistiken in Kanalnamen

![](https://tomatenkuchen.com/assets/images/stats.webp)

Du kannst die Kanäle, in denen Statistiken angezeigt werden, und wie sie angezeigt werden, in den [Einstellungen](https://tomatenkuchen.com/dashboard/settings) einstellen.
Hier können die meisten [Aktions-Funktionen](/category/action-functions) verwendet werden.

Die Kanalnamens-Statistiken werden automatisch alle **10 Minuten** aktualisiert.

## Statistiken auf der Botwebsite und `stats`-Befehl

Beispiel: [Vanilla Minigames Statistiken](https://tomatenkuchen.com/stats?guild=608640398595719170)

Der Bot sammelt täglich Statistiken über Server. Dazu gehören:
- Mitgliederanzahl
- Boostanzahl
- gesendete Nachrichten
- Anzahl aktiver Chatter (wie viele Nutzer an dem Tag eine Nachricht gesendet haben)

Die beiden letzten werden nur gesammelt, wenn die [Sichtbarkeit](#sichtbarkeit) auf "Public" gesetzt ist.

### Mögliche Filter

Filter werden als Query-Parameter an die URL angehängt: `https://tomatenkuchen.com/stats?guild=608640398595719170&type=messages&time=2w`.

- `type`: Zeigt nur den angegebenen Typ an:
	- `&type=members`: Mitgliederzahl
	- `&type=messages`: Nachrichten
	- `&type=boosts`: Boostanzahl
	- `&type=chatters`: Anzahl aktiver Chatter
- `time`: Zeigt nur Statistiken innerhalb des angegebenen Zeitraums an:
	- `&time=1mo`: Zeigt nur Statistiken des letzten Monats an.
	- `&time=5d`: Zeigt nur Statistiken der letzten fünf Tage an.

Diese Optionen können auch beim `stats`-Befehl verwendet werden. Dieser generiert auch eine entsprechende URL, welche geteilt werden kann.

## Allgemeine Einstellungen

### Sichtbarkeit

Du kannst die Sichtbarkeit der Statistiken ändern. Du kannst zwischen "Public" ("öffentlich"), "Only Members" ("Nur für Servermitglieder") und "Disabled" ("deaktiviert") wählen.

Beachte, das "Only Members" und "Disabled" das Sammeln von Nachrichtenstatistiken (Anzahl Nachrichten & aktiver Chatter) deaktivieren.

### Kanäle ausschließen

Hier können Kanälen ausgewählt werden, in denen keine Nachrichtenstatistiken gesammelt werden, z. B. für Botspam-Kanäle.
