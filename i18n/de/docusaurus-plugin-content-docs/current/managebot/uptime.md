---
title: Uptime-Tracking
description: Der Manage Bot erlaubt die Kontrolle von Pterodactyl-Servern von Discord aus. Er hat auch die Möglichkeit, die Uptime von Webseiten und Nodes zu tracken.
---

Der Manage Bot erlaubt dir, die Uptime von einer unbegrenzten Anzahl an Webseiten und Pterodactyl-Nodes zu tracken.

## Uptime-Tracker hinzufügen

Um eine Seite oder eine Node zu tracken, muss sie mit dem Befehl `/uptime add` hinzugefügt werden. Dort kannst du entweder die URL der Webseite oder die interne Admin-Node-ID eingeben. Dafür muss der Manage Bot mit einem Admin-API-Key verknüpft sein, wofür du den Befehl `/adminsetup` verwenden kannst.

Wenn die Seite bzw. die Node zum Zeitpunkt des Hinzufügens erreichbar ist, wird sie ab jetzt - je nach Anzahl der auf dem Server vorhandenen Tracker - einmal pro Minute aufgerufen. Beachte, dass das erste Aufrufen einige Minuten länger dauern kann.

Sobald die Seite aufgerufen worden ist sind die ersten Statistiken bei `/uptime list` sichtbar.
