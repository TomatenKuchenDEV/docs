---
title: Einrichtung
description: Der Manage Bot erlaubt die Kontrolle von Pterodactyl-Servern von Discord aus. Diese Seite erklärt, wie du den Bot einrichten und verwenden kannst.
---

Mit dem Manage Bot kannst du deine Pterodactyl (https://pterodactyl.io)-Server von Discord aus verwalten.

## Einrichtung

![](https://cdn.discordapp.com/attachments/856211013162893352/1103019459305799821/image.png)

`/setup <Panel-Haupt-URL> <API-Key> [<Alias>] [default]`

Die Panel-Haupt-URL ist die URL von der Startseite des Panels, also ohne Parameter wie `server/12345678` am Ende.

### URL-Beispiel

URL eines Servers: https://panel.ptero/server/12345678
URL, die du eingeben musst: https://panel.ptero/

Es werden sowohl HTTP- als auch HTTPS-Panel unterstützt - beachte nur, dass die Panel bei HTTPS ein gültiges Zertifikat benötigen. Solltest du dieses nicht haben, nutze HTTP ohne SSL.

Ein "Alias" steht für ein Pterodactyl-Panel. Mithilfe von Aliasen kannst du mehrere Panel gleichzeitig verwenden.
Wenn kein Alias angegeben wird generiert der Bot automatisch einen.

## `/manage` verwenden

![](https://cdn.discordapp.com/attachments/856211013162893352/1026119789900464189/2022-10-02_15_10_48.png)

![](https://cdn.discordapp.com/attachments/856211013162893352/1026119790215053433/2022-10-02_15_11_09.png)


Der Bot kann auch schnelle Aktionen auf dem Server ausführen:

![](https://cdn.discordapp.com/attachments/856211013162893352/1026119790563176488/2022-10-02_15_11_53.png)

## `/console` und `/command`

Diese Befehle werden verwendet, um die Konsole eines Servers anzuzeigen bzw. Befehle auf diesem auszuführen. Beachte, dass der Server zum Ausführen von Befehlen online sein muss.
