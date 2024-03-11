---
title: Twitchmodul für z. B. Livestreams
description: Mit dem Bot kannst du eine Nachricht senden lassen, wenn ein Twitch-Streamer livestreamt oder sich etwas anderes ändert.
---

Das Twitchmodul bietet verschiedene Möglichkeiten zum Anzeigen von Änderungen eines Streamers.

Beachte, dass du dich zunächst mit dem in den Einstellungen verlinkten Link authentifizieren musst, bevor du das Twitchmodul nutzen kannst.

## Einstellungen {#settings}

### Nachrichten bei Aktualisierung, z. B. Live {#update}

Hier kann der Benutzername, der Kanal, der Auslöser und die Nachricht festgelegt werden, welche beim Auslösen des Triggers in den festgelegten Kanal gesendet wird.

## Mögliche Variablen {#vars}

- `{username}`: Der Benutzername
- `{link}`: Der Kanallink

## Mögliche Trigger {#trigger}

- `stream.online`: Wird ausgelöst, wenn der Nutzer seinen Livestream startet (Standard)
- `stream.offline`: Wenn der Nutzer seinen Livestream stoppt
- `channel.update`: Wenn der Nutzer seinen Kanal aktualisiert
- `channel.raid`: Wenn ein Kanal geraidet wird
- `user.update`: Wenn der Nutzer seine öffentlichen Accountdaten aktualisiert

Jeder Server kann bis zu zehn verschiedene Elemente hinzufügen - das entspricht zehn Streamern mit je einer Livenachricht.

## Beispiel {#example}

- Kanal (`channel`): Kanal auswählen, in den die Livenachricht gesendet werden soll
- Trigger (`trigger`): Wenn eine Nachricht bei Streamstart gesendet werden soll: `stream.online`
- Twitch-Benutzername (`username`): Der Nutzername des Streamers aus der URL, z. B. `monstercat`
- Nachrichteninhalt (`content`): `🔴 Der Streamer {username} ist live!`

## Befehle {#commands}

### Twitch-Nutzer-Info {#cmd-twitch}

<Command name="twitch" slash="channel:Streamername" message="<Streamername>"></Command>

Mit dem Twitch-Befehl kannst du dir Informationen über einen Twitch-Benutzer und einen möglicherweise aktuell laufenden Livestream anzeigen lassen.
