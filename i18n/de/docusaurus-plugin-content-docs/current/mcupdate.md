---
title: Minecraft-Serverstatus-Update
description: Zeige den aktuellen Status eines Minecraft-Servers in einem Kanalnamen oder -thema, oder in einer eigenen Nachricht an.
---

Mit dieser Funktion kannst du jederzeit den aktuellen Minecraft-Java-Serverstatus sowie, sofern aktiviert, die Liste aller Spieler sowie einige weitere Informationen anzeigen lassen.

Du kannst zwischen verschiedenen Anzeigetypen wählen:
- Kanalname
- Kanalthema (nur für textbasierte Kanäle)
- Nachricht

Kanalname und -thema werden aufgrund eines Discord-Limits nur alle fünf Minuten aktualisiert, die Nachricht im Normalfall alle zwei Minuten - so sind deine Spieler immer gut über den aktuellen Status informiert.

## Einrichtung {#setup}

:::warning Berechtigungen

Für die Einrichtung benötigt der Bot ausreichende Berechtigungen zum Bearbeiten sowie Löschen von Nachrichten im aktuellen Kanal.

:::

Um die Einrichtung zu starten musst du mit entsprechenden Berechtigungen den Befehl `minecraft update` ausführen.

Dort wirst du zunächst nach der Serverdomain gefragt, z. B. `vanillaminigames.net`.

Anschließend der Port, wenn der Server eine eigene Domain besitzt ist es in der Regel der Port `25565`.

Wenn du den Query-Port aktiviert hast, gib ihn **zusätzlich** mit dem Argument `-query=<Port>` an, z. B. `25565 -query=25566`.
Mit dem Query-Port können mehr Informationen angezeigt werden, z. B. die aktuellen Spielernamen, verwendete Plugins und noch einiges mehr.

Dann kannst du den Typ auswählen, diese werden oben bereits erklärt.
Auch wird der Kanal und das Format abgefragt, wie der Status dargestellt werden soll.

Wenn du das Setup abgeschlossen hast, dauert es möglicherweise noch einige Minuten, bis der Status angezeigt wird.
