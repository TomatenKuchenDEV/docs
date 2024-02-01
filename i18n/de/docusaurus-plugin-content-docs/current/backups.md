---
title: Backups und Vorlagen
description: Backups erlauben dir, schnell einen gegrieften Server wiederherzustellen. Mit Templates kannst du einfach andere veröffentlichte Serverdesigns auf einen vorhandenen Server übernehmen.
---

## Backups {#backups}

Mit Backups kannst du im Falle eines Servergriefs oder der ausversehenen Löschung z. B. eines Kanals diesen leicht wiederherstellen.

### Was sind TomatenKuchen-Backups? {#about-backups}

- Backups werden standardmäßig für immer gespeichert
	- Aufgrund einer Discord-Richtlinie werden die Nachrichten eines Backups unter Umständen nach 30 Tagen gelöscht.
- Das Erstellen und Laden ist für alle Nutzer kostenlos
- Es werden alle Einstellungen von Discord-Servern gespeichert, die der Bot sinnvoll wiederherstellen kann.
- Normale Nutzer können maximal vier Backups gleichzeitig besitzen
- Backups dürfen nicht größer als einige Megabyte sein - dieses Limit wird im Normalfall nur bei der sogenannten sicheren Speicherung von Bildern erreicht.

### Erstellen eines Backups {#backup-create}

Mit dem Befehl `backup create` kannst du ein Backup für den aktuellen Server erstellen.

Dort hast du die Möglichkeit, einzelne Bereiche vom Server auszuwählen, welche gespeichert werden sollen.

Vor allem bei der Einstellung "sicheres Speichern" von Bildern sind diese Optionen hilfreich, um die Backupgröße zu reduzieren.

### "Sicheres" Speichern von Anhängen {#backup-safe-storing-attachments}

Mit dieser Einstellung werden Anhänge und sonstige Bilder, z. B. Servericon und -banner, nicht als URL gespeichert, sondern als vollständige Datei.

Diese Einstellung hat den Vorteil, dass Anhänge auch wiederhergestellt werden können, wenn die Originalnachricht gelöscht oder z. B. das Servericon geändert worden ist.

Der Nachteil ist, dass durch die rohen Dateidaten das Backup sehr schnell sehr groß wird - z. B. ist bei einem einzigen, zwei Megabyte großen Anhang das Backup auch *mindestens* zwei Megabyte groß.

## Discord-Vorlagen/-Templates {#templates}

Mit dem Befehl `template <discord.new-Link oder -Code>` kannst du eine Discord-Vorlage auf den aktuellen Server laden.

Dadurch werden alle Kanäle (außer beim Argument `-ignorechannels`) und Rollen (außer beim Argument `-ignoreroles`) gelöscht und entsprechend dem Template neu erstellt.

Templates kannst du von deinen Servern unter dem Einstellungstab "Server-Vorlage", von anderen Nutzern oder Websiten, die eine Liste dieser Templates bereitstellen, erhalten.
