---
title: Statusupdate
description: Der Manage Bot erlaubt die Kontrolle von Pterodactyl-Servern von Discord aus. Diese Seite erklärt das automatische Anzeigen von Server- und Nodestatistiken als Nachricht.
---

Der Manage Bot kann mithilfe der Statusupdate-Funktion den Status, die Konfiguration und den aktuellen Verbrauch eines bzw. mehrerer Server oder Nodes anzeigen.

1. `/statusupdate`

	Zuerst führst du den Statusupdate-Befehl aus. Dabei kannst du optional den Kanal auswählen, standardmäßig wird der aktuelle Kanal verwendet. Du kannst auch den Panelalias eines Panels angeben, bei dem sowohl Client- als auch Application-API-Key angegeben worden sind.

2. Nachricht bearbeiten

	Mit den Buttons kannst du die Nachricht so anpassen wie du willst. Genauere Informationen zur Verwendung der Variablen folgen noch, aber zusätzlich zu den Variablen der TomatenKuchen-Actions existiert `{node;<ID>[;<Wert>]}`, um einen bestimmten Wert einer Node anzuzeigen, und `{nodeconfig;<ID>[;<Wert>]}`, um Informationen über die Konfiguration einer Node anzuzeigen. Ebenfalls ist `{nextUpdate}` verfügbar, um den Zeitraum bis zur nächsten Aktualisierung der Nachricht anzugeben.

3. Nachricht senden
4. Fertig!

Stelle sicher, dass der Bot alle benötigten Berechtigungen in dem Kanal und im Panel behält, sobald er diese verliert wird die Statusupdate-Nachricht aus dem System gelöscht und muss neu erstellt werden.

Einige Informationen zu TomatenKuchen-Actions:
- Groß- und Kleinschreibung wird bei Namen von Actions nicht beachtet
- Am wichtigsten dürfte die Funktion `{formatBytes;<Bytes>[;<Nachkommastellen, Standard 2>]}` und die mathematischen Funktionen für Mal- und Geteiltrechnung `{*}` `{/}` sein
