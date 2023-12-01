---
title: Counting
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt die Einrichtung und die Verwendung vom Counting-System.
image: /img/countingleaderboard.png
---

Mit dem Counting-System können Nutzer auf dem aktuellen Server mit anderen Mitgliedern zählen.

## Befehle

### Erfolgreiches Zählen

`leaderboard counting` zeigt das Counting-Leaderboard des Servers an. Es zeigt an, wie viele Zahlen ein Nutzer insgesamt und im aktuellen Versuch gezählt hat.

![/leaderboard counting](/img/countingleaderboard.png)

### Fehler beim Zählen

Das beim Befehl `leaderboard countingfail` angezeigte Leaderboard zeigt an, wie viele Fehler ein Nutzer insgesamt beim Zählen gemacht hat.

## Einstellungen

### Kanal
Hier kann der Counting-Kanal festgelegt werden.

### Start
Hier wird der Startwert festgelegt, welcher beim ersten Zählen in einem Kanal und bei einem Fehler verwendet wird. Standardmäßig 1.

### "step"/Schrittgröße
Wie weit die Zahlen voneinander entfernt liegen. Standardmäßig 1.

Beispiel:
- `1`: 1, 2, 3
- `5` und Startwert `0`: 0, 5, 10
- `0.01`: 1, 1.01, 1.02
- `-2`: 1, -1, -3

### Zurücksetzen bei Fehler
Ob der aktuelle Stand zurückgesetzt wird, wenn ein Nutzer einen Fehler macht, also zählt, obwohl er nicht dran ist, oder eine falsche Zahl zählt.

### Zurücksetzen bei Nachrichtenlöschnug
Stellt ein, ob der aktuelle Stand zurückgesetzt wird, wenn ein Nutzer seine Nachricht löscht. Wenn eine oder mehrere Zahlen fehlen, kann das andere Nutzer im Kanal verwirren.

### Zurücksetzen bei Nachrichtenbearbeitung
Ob der aktuelle Stand verloren geht, wenn ein Nutzer seine Nachricht bearbeitet *und* sich die Zahl dabei verändert oder die Nachricht normalen Text enthält.

### Unterhaltung erlauben
Ob nach einer gültigen Zahl noch normaler Text erlaubt ist, z. B. `42 Ich mag TomatenKuchen!`

### Webhooks verwenden
Ob Webhooks für Nachrichten verwendet werden sollen. Verhindert das Bearbeiten und Löschen von Nachrichten der Nutzer. Benötigt Webhooks-verwalten-Berechtigung.

### Reaktionen verwenden
Ob der Bot auf gültige Nachrichten mit "✅" oder "☑" reagieren soll.

Wird ignoriert, wenn "Webhooks verwenden" aktiviert ist.
Reaktionen auf besondere Zahlen, z. B. 42 und 100, können nur durch das Entfernen der Reaktionen-hinzufügen-Berechtigung deaktiviert werden.

### Rolle bei Fehlern
Welche Rolle Nutzer erhalten, wenn sie einen Fehler beim Zählen machen. Als Fehler zählt:
- Zweimal hintereinander zählen
- Falsche Zahl
- Unterhaltung, obwohl Unterhaltungen nicht erlaubt sind

### Fehlerrolle entfernen nach
Nach welcher Zeit die Fehlerrolle wieder entfernt wird. Standardmäßig gar nicht.
