---
title: Events
description: Mit dem Bot kannst du Events importieren sowie in einer Nachricht als Kalender anzeigen lassen.
---

## Befehle {#commands}

Der Befehl `eventimport` erlaubt dir, ein oder mehrere Events aus einer `.ics`-Datei zu importieren.
Du kannst dabei entweder die Datei als Anhang hochladen oder eine URL einfügen.

## Einstellungen {#settings}

### Event-Reminder {#reminder}

Hier kann ein Kanal ausgewählt werden, in welchen der Bot eine Nachricht sendet, kurz bevor ein Event beginnt.
Die Zeit, wie lange davor ein Event angekündigt wird, wird durch die "time"-Einstellung als relative Zeit festgelegt.

Ebenfalls kann die gesendete Nachricht mit den angegebenen Variablen vollständig angepasst werden.

### Online-Kalender {#calendar}

Mit dieser Einstellung kannst du ändern, ob die Events des Servers als Link online zum Import verfügbar sind.
Standardmäßig ist diese Einstellung deaktiviert.

Wenn aktiviert können Nutzer den in der Einstellungsbeschreibung angegebenen Link in z. B. Google Kalender oder einem beliebigen anderen Kalenderprogramm hinzufügen.

Der Vorteil im Vergleich zum Export einer `.ics`-Datei in Discord ist, dass einerseits alle Events schnell und einfach abrufbar sind, und andererseits, dass Änderungen an den Originalevents keinen erneuten Export- und Import der Datei erfordern:
Kalender-Apps aktualisieren importierte Kalender in der Regel alle paar Minuten bis Stunden.
