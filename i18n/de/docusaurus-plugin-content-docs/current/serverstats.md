---
title: Serverstatistiken
description: TomatenKuchen-Serverstatistiken erlauben dir, die Aktivität deines Discord-Servers zu beobachten. Dazu gehört z. B. die Mitglieder- und Nachrichtenanzahl.
image: /img/stats.webp
---

## Statistiken in Kanalnamen {#channel-name}

![Discord-Sprachkanäle, welche die konfigurierten Informationen des Servers im Namen anzeigen](/img/stats.webp)

Du kannst die Kanäle, in denen Statistiken angezeigt werden, und wie sie angezeigt werden, in den [Einstellungen](https://tomatenkuchen.com/dashboard/settings#statsChannelFormat) einstellen.
Hier können die meisten [Aktionsfunktionen](/category/action-functions) verwendet werden.

Die Kanalnamens-Statistiken werden automatisch alle **10 Minuten** aktualisiert.

## Statistiken auf der Website und `stats`-Befehl {#website-command}

Beispiel von Statistiken auf der Botwebsite: [Vanilla Minigames Statistiken](https://tomatenkuchen.com/stats?guild=608640398595719170)

Der Bot sammelt täglich Statistiken über Server. Dazu gehören:
- Mitgliederanzahl
- Boostanzahl
- von Nutzern gesendete Nachrichten
- Anzahl aktiver Chatter (wie viele verschiedene Nutzer an dem Tag eine Nachricht gesendet haben)

Die beiden letzten werden nur gesammelt, wenn die [Sichtbarkeit](#visibility) auf "Public" gesetzt ist.

### Mögliche Filter {#filters}

Filter werden als Query-Parameter an die URL angehängt: `https://tomatenkuchen.com/stats?guild=608640398595719170&type=messages&time=2w`.
Diese URL zeigt die gesendete-Nachrichten-Statistik der letzten zwei Wochen an.

- `type`: Zeigt nur den angegebenen Typ an:
	- `&type=members`: Mitgliederzahl
	- `&type=messages`: Nachrichten
	- `&type=boosts`: Boostanzahl
	- `&type=chatters`: Anzahl aktiver Chatter
- `time`: Zeigt nur Statistiken innerhalb des angegebenen Zeitraums an:
	- `&time=1mo`: Zeigt nur Statistiken des letzten Monats an.
	- `&time=5d`: Zeigt nur Statistiken der letzten fünf Tage an.

Diese Optionen können auch beim `stats`-Befehl verwendet werden. Dieser generiert auch eine entsprechende URL, welche geteilt werden kann.

## Einstellungen {#settings}

### Sichtbarkeit {#visibility}

Du kannst [in den Einstellungen](https://tomatenkuchen.com/dashboard/settings#publicStats) die Sichtbarkeit der Statistiken ändern.
Du kannst zwischen "Public" ("öffentlich", für jeden mit dem Link aufrufbar), "Only Members" ("Nur für Servermitglieder") und "Disabled" ("deaktiviert", versteckt die Statistiken für alle) wählen.

Beachte, dass "Only Members" und "Disabled" das Sammeln von Nachrichtenstatistiken (Anzahl Nachrichten & aktiver Chatter) deaktivieren.

### Kanäle ausschließen {#excluded-channels}

Hier können Kanälen ausgewählt werden, in denen keine Nachrichtenstatistiken gesammelt werden, z. B. für Botspam-Kanäle.
