---
title: Counting / Zählen
description: Erklärt die Einrichtung und die Verwendung vom Counting-System.
image: /img/countingleaderboard.png
---

Mit dem Counting-System können Nutzer auf dem aktuellen Server mit anderen Mitgliedern zählen.

## Befehle {#commands}

### Erfolgreiches Zählen {#cmd-counting}

`leaderboard counting` zeigt das Counting-Leaderboard des Servers an. Es zeigt an, wie viele Zahlen ein Nutzer insgesamt und im aktuellen Versuch gezählt hat.

![/leaderboard counting](/img/countingleaderboard.png)

### Fehler beim Zählen {#cmd-countingfail}

Das beim Befehl `leaderboard countingfail` angezeigte Leaderboard zeigt an, wie viele Fehler ein Nutzer insgesamt beim Zählen gemacht hat.

## Einstellungen {#settings}

[Counting-Einstellungen öffnen](https://tomatenkuchen.com/dashboard/settings#counting)

### Kanal {#channel}

Der Zähl-Kanal, in welchem Nutzer können.

### Start {#start}

Hier wird der Startwert festgelegt, welcher beim ersten Zählen in einem Kanal und bei einem Fehler verwendet wird. Standardmäßig 1.

### "step"/Schrittgröße {#step}

Wie weit die Zahlen voneinander entfernt liegen. Standardmäßig 1.

Beispiel:
- `1`: 1, 2, 3
- `5` und Startwert `0`: 0, 5, 10
- `0.01`: 1, 1.01, 1.02
- `-2`: 1, -1, -3

### Zurücksetzen bei Fehler {#fail}

Ob der aktuelle Stand zurückgesetzt wird, wenn ein Nutzer einen Fehler macht, also zählt, obwohl er nicht dran ist, oder eine falsche Zahl zählt.

### Zurücksetzen bei Nachrichtenlöschung {#delete}

Stellt ein, ob der aktuelle Stand zurückgesetzt wird, wenn ein Nutzer seine Nachricht löscht. Wenn eine oder mehrere Zahlen fehlen, kann das andere Nutzer im Kanal verwirren.

### Zurücksetzen bei Nachrichtenbearbeitung {#edit}

Ob der aktuelle Stand verloren geht, wenn ein Nutzer seine Nachricht bearbeitet *und* sich die Zahl dabei verändert oder die Nachricht normalen Text enthält.

### Unterhaltung erlauben {#allow-chat}

Ob nach einer gültigen Zahl noch normaler Text erlaubt ist, z. B. `42 Ich mag TomatenKuchen!`

### Webhooks verwenden {#webhooks}

Ob Webhooks für Nachrichten verwendet werden sollen. Verhindert das Bearbeiten und Löschen von Nachrichten der Nutzer. Benötigt Webhooks-verwalten-Berechtigung.

### Reaktionen verwenden {#reactions}

Ob der Bot auf gültige Nachrichten mit "✅" oder "☑" reagieren soll.

Wird ignoriert, wenn "Webhooks verwenden" aktiviert ist.
Reaktionen auf besondere Zahlen, z. B. 42 und 100, können nur durch das Entfernen der Reaktionen-hinzufügen-Berechtigung deaktiviert werden.

### Rolle bei Fehlern {#fail-role}

Welche Rolle Nutzer erhalten, wenn sie einen Fehler beim Zählen machen. Als Fehler zählt:
- Zweimal hintereinander zählen
- Falsche Zahl
- Unterhaltung, obwohl Unterhaltungen nicht erlaubt sind

### Fehlerrolle entfernen nach {#fail-role-time}

Nach welcher Zeit die Fehlerrolle wieder entfernt wird. Standardmäßig gar nicht.
