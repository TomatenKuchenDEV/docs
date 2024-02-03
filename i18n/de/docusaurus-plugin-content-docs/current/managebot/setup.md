---
title: Einrichtung
description: Der Manage Bot erlaubt die Kontrolle von Pterodactyl-Servern von Discord aus. Diese Seite erklärt, wie du den Bot einrichten und verwenden kannst.
---

Mit dem Manage Bot kannst du deine Pterodactyl (https://pterodactyl.io)-Server von Discord aus verwalten.

## Einrichtung

![](/img/managebot_setup.png)

`/setup <Panel-URL> <API-Key> [<Alias-Name>]`

Es werden sowohl HTTP- als auch HTTPS-Panel unterstützt - beachte nur, dass die Panel bei HTTPS ein gültiges Zertifikat benötigen. Solltest du dieses nicht haben, nutze HTTP ohne SSL.

Ein "Alias" steht für ein Pterodactyl-Panel. Mithilfe von Aliasen kannst du mehrere Panel gleichzeitig verwenden.
Wenn kein Alias angegeben wird generiert der Bot automatisch einen.

## `/manage` verwenden

![](/img/managebot_manageautocomplete.png)

![](/img/managebot_manage.png)


Der Bot kann auch schnelle Aktionen auf dem Server ausführen:

![](/img/managebot_quickactions.png)

## `/console` und `/command`

Diese Befehle werden verwendet, um die Konsole eines Servers anzuzeigen bzw. Befehle auf diesem auszuführen. Beachte, dass der Server zum Ausführen von Befehlen online sein muss.
