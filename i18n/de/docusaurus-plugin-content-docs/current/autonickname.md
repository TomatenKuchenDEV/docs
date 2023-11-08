---
title: Automatische Nicknamen anhand von Rollen
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Hilft beim Einrichten der rollenbasierten Nicknamen.
image: /img/autonick.png
---

TomatenKuchen kann den Nicknamen von Nutzern basierend auf Rollen des Nutzers anpassen.

## Einstellungen

![](/img/autonick.png)

### Rollenabkürzungen

Jede Rolle kann hier eine Abkürzung erhalten, die im Nicknamen angezeigt wird, z. B. für die "Admin"-Rolle ein "A".

Nur in diesem Feld eingegebene Rollen werden im Nicknamen angezeigt.

### Format des Nicknamens

Hier kann festgelegt werden, wie der Bot den Nicknamen aufbaut.

Folgende Variablen können verwendet werden:
- `{roles}`: Eine oder mehrere Rollenabkürzungen (je nach Einstellung)
- `{name}`: Vorheriger Anzeigename
- `{username}`: Nutzername
- `{globalName}`: Globaler Anzeigename des Nutzers

### Maximale Rollen im Nicknamen

Stellt die maximale Anzahl der Rollen ein, die im Nicknamen angezeigt werden. Bedenke, dass die maximale Nicknamenlänge 32 Zeichen beträgt.
