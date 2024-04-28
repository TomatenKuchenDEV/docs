---
title: Einrichtung / Funktionen
description: Der Manage Bot erlaubt die Kontrolle von Pterodactyl-Servern von Discord aus. Diese Seite erklärt, wie du den Bot einrichten und verwenden kannst.
---

Mit dem Manage Bot kannst du deine Pterodactyl (https://pterodactyl.io)-Server von Discord aus verwalten.

## Einrichtung {#setup}

![Setup-Befehl auf Discord inklusive Syntax](/img/managebot_setup.png)

`/setup <Panel-URL> <API-Key> [<Alias-Name>]`

Es werden sowohl HTTP- als auch HTTPS-Panel unterstützt - beachte nur, dass die Panel bei HTTPS ein gültiges Zertifikat benötigen. Solltest du dieses nicht haben, nutze HTTP ohne SSL.

Ein "Alias" steht für ein Pterodactyl-Panel. Mithilfe von Aliasen kannst du mehrere Panel gleichzeitig verwenden.
Wenn kein Alias angegeben wird generiert der Bot automatisch einen.

## `/manage` verwenden {#manage}

![Autocomplete, welches beim Verwenden des manage-Befehls angezeigt wird, nachdem ein Panel erfolgreich eingerichtet wurde](/img/managebot_manageautocomplete.png)

![Discord-Nachricht mit einem Embed mit Informationen über den Server, z. B. Status, RAM-Verbrauch und Uptime, und Buttons zur Steuerung](/img/managebot_manage.png)

### Schnelle Aktionen {#quick-actions}

Der Bot kann auch schnelle Aktionen auf dem Server ausführen:

![Ausgabe, wenn die Aktion "Ein Backup erstellen" ausgeführt wird](/img/managebot_quickactions.png)

Aktuell werden folgende Aktionen unterstützt:
- Ein Backup erstellen
- Alle Backups des Servers, inklusive einem One-Time-Downloadlink, anzeigen
- Server verzögert (nach 20 Sekunden) neu starten

## `/console` und `/command` {#console-command}

Diese Befehle werden verwendet, um die Konsole eines Servers anzuzeigen bzw. Befehle auf diesem auszuführen. Beachte, dass der Server zum Ausführen von Befehlen online sein muss.
