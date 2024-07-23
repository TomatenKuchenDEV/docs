---
title: Umfragen
description: Führe Umfragen auf deinem Server durch - auch als normales Mitglied.
---

## Befehl {#commands}

Der `poll`-Befehl erlaubt dir das Erstellen von Umfragen auf deinem Server.

Standardmäßig kann jeder den Befehl nutzen, jedoch kannst du die Berechtigungen des Slashcommands in den Integrationseinstellungen von Discord anpassen.

:::note Discord-native Umfragen

Diesen Befehl gab es schon lange, bevor Discord Umfragen hinzugefügt hat.

Grundsätzlich bieten die eingebauten Umfragen alle notwendigen Funktionen, jedoch unterstützen sie keine benutzerdefinierte Endzeit und limitieren auf fünf mögliche Optionen, weswegen dieser Befehl weiterhin nützlich sein kann.

:::

## Erstellen einer Umfrage {#create}

1. Öffne den Kanal, im dem die Umfrage gestartet werden soll.
2. Führe den `poll`-Slash- oder -Message-Command mit den entsprechenden Argumenten aus.
	- `time`*: Das Zeitlimit, wie lange die Umfrage laufen soll. Nach dem Ablauf dieser Zeit kann nicht mehr abgestimmt werden. Verwende `0`, um die Umfrage unbegrenzt lange laufen zu lassen.
	- `title`*: Der Titel der Umfrage, z. B. "Was ist deine Lieblingsfarbe?" Bei der Verwendung des Message-Commands muss danach das Pipe-Symbol (` | `) verwendet werden, um Titel und die möglichen Optionen voneinander zu trennen.
	- `options`*: Die Optionen, die zur Auswahl stehen sollen, getrennt durch Kommas, z. B. `Rot,Gelb,Grün,Blau`
	- `max_votes`: Die Anzahl der Stimmen, die ein Nutzer hat. Standardmäßig kann jeder Nutzer nur eine Option auswählen, mit dieser Einstellung kann dies verändert werden.
	- `hide_votes`: Versteckt den "Votes"-Button unter dem Umfragen-Embed, wodurch Nutzer nicht mehr sehen können, wer für welche Option abgestimmt hat.

\*: Dieses Argument muss angegeben werden.

## Ausgeschlossene Rollen {#excluded-roles}

Nutzer, die eine oder mehrere dieser Rollen haben, können nicht an Umfragen auf dem Server teilnehmen.

Ihre Stimme wird jedoch weiterhin gezählt, wenn sie davor bereits abgestimmt haben.
