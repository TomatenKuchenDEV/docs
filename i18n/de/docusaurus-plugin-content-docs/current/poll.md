---
title: Umfragen
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Führe Umfragen auf deinem Server durch - auch als normales Mitglied.
---

Der `poll`-Befehl erlaubt dir das Erstellen von Umfragen auf deinem Server.

Standardmäßig kann jeder den Befehl nutzen, jedoch kannst du die Berechtigungen des Slashcommands in den Integrationseinstellungen von Discord anpassen.

## Einstellungen {#settings}

### Ausgeschlossene Rollen {#create}

Nutzer, die eine oder mehrere dieser Rolle haben, können nicht an Umfragen auf dem Server teilnehmen.

Jedoch wird ihre Stimme weiterhin gezählt, wenn sie davor bereits abgestimmt haben.

## Erstellen einer Umfrage {#create}

1. Öffne den Kanal, im dem die Umfrage gestartet werden soll.
2. Führe den `poll`-Slash- oder -Message-Command mit den entsprechenden Argumenten aus.
	- `time`*: Das Zeitlimit, wie lange die Umfrage laufen soll. Wenn diese Zeit abgelaufen ist werden die Ergebnisse angezeigt.
	- `title`*: Der Titel der Umfrage, z. B. "Was ist deine Lieblingsfarbe?"
	- `options`*: Die Optionen, die die Nutzer haben sollen, getrennt mit Kommas, z. B. `Rot,Gelb,Grün,Blau`
	- `max_votes`: Die Anzahl der Stimmen, die ein Nutzer hat. Standardmäßig kann jeder Nutzer nur eine Option auswählen, mit dieser Einstellung kann dies verändert werden.
	- `hide_votes`: Versteckt den "Votes"-Button unter dem Umfragen-Embed, wodurch Nutzer nicht mehr sehen können, wer für welche Option abgestimmt hat.

\*: Dieses Argument muss angegeben werden.
