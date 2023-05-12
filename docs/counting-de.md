---
title: Counting
lang: de
---

Mit dem Counting-System können Nutzer auf dem Server zählen. Zwar langweilig, aber... warum nicht?

# Befehle
`countingleaderboard` zeigt das Counting-Leaderboard des Servers an. Es zeigt an, wie viele Zahlen ein Nutzer insgesamt und im aktuellen Versuch gezählt hat.

# Einstellungen

## Kanal
Hier kann der Counting-Kanal festgelegt werden.

## Start
Hier wird der Startwert festgelegt. Standardmäßig 1.

## Step
Wie weit Zahlen voneinander entfernt liegen. Standardmäßig 1.

Bei `1`: 1, 2, 3
Bei `5` und Startwert `0`: 0, 5, 10
Bei `0.01`: 1, 1.01, 1.02

## Zurücksetzen bei Fehler
Ob der aktuelle Stand zurückgesetzt wird, wenn ein Nutzer einen Fehler macht, also zählt, obwohl er nicht dran ist, oder eine falsche Zahl zählt.

## Zurücksetzen bei Nachrichtenlöschnug
Stellt ein, ob der aktuelle Stand zurückgesetzt wird, wenn ein Nutzer seine Nachricht löscht. Wenn eine Zahl oder mehreren Zahlen fehlen, kann das andere Nutzer im Kanal verwirren.

## Zurücksetzen bei Nachrichtenbearbeitung
Ob der aktuelle Stand verloren geht, wenn ein Nutzer seine Nachricht bearbeitet *und* sich die Zahl dabei verändert *oder* die Nachricht normalen Text enthält.

## Unterhaltung erlauben
Ob nach der Zahl noch normaler Text erlaubt ist: "42 Hallo :D"

## Webhooks verwenden
Ob Webhooks für Nachrichten verwendet werden sollen. Verhindert das Bearbeiten und Löschen von Nachrichten der Nutzer. Benötigt Webhooks-verwalten-Berechtigung.

## Reaktionen verwenden
Ob der Bot auf Nachrichten reagieren soll. Wird ignoriert, wenn "Webhooks verwenden" aktiviert ist.

Reagiert mit "✅" und "☑" auf jede zugelassene Nachricht. Reaktionen auf besondere Zahlen, z. B. 42 und 100, können nur durch das Entfernen der Reaktionen-hinzufügen-Berechtigung deaktiviert werden.

## Rolle bei Fehlern
Ob und wenn ja, welche Rolle Nutzer erhalten, wenn sie einen Fehler beim Zählen machen. Als Fehler zählt:
- Zählen, obwohl man  nicht dran ist
- Falsche Zahl
- Unterhaltung, obwohl Unterhaltungen nicht erlaubt sind

## Fehlerrolle entfernen nach
Nach welcher Zeit die Fehlerrolle wieder entfernt wird. Standardmäßig gar nicht.
