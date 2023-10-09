---
title: Twitchmodul für z. B. Livestreams
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Mit dem Bot kannst du eine Nachricht senden lassen, wenn ein Twitch-Streamer livestreamt oder sich etwas anderes ändert.
---

Das Twitchmodul bietet verschiedene Möglichkeiten zum Anzeigen von Änderungen eines Streamers.

Beachte, dass du dich zunächst mit dem in den Einstellungen verlinkten Link authentifizieren musst, bevor du das Twitchmodul nutzen kannst.

## Einstellungen

### Twitch-Nachrichten

Hier kann der Benutzername, der Kanal, der Auslöser und die Nachricht festgelegt werden, welche beim Auslösen des Triggers in den festgelegten Kanal gesendet wird.

## Mögliche Variablen

- `{username}`: Der Benutzername
- `{link}`: Der Kanallink

## Mögliche Trigger

- `stream.online`: Wird ausgelöst, wenn der Nutzer seinen Livestream startet
- `stream.offline`: Wenn der Nutzer seinen Livestream stoppt
- `channel.update`: Wenn der Nutzer seinen Kanal aktualisiert
- `channel.raid`: Wenn ein Kanal geraidet wird
- `user.update`: Wenn der Nutzer seine öffentlichen Accountdaten aktualisiert

Jeder Server kann bis zu zehn verschiedene Elemente hinzufügen - das entspricht zehn Streamern mit je einer Livenachricht.

## Beispiel

- Kanal (`channel`): Kanal auswählen, in den die Livenachricht gesendet werden soll
- Trigger (`trigger`): Wenn eine Nachricht bei Streamstart gesendet werden soll: `stream.online`
- Twitch-Benutzername (`username`): Der Nutzername des Streamers aus der URL
- Nachrichteninhalt (`content`): `🔴 Der Streamer {username} ist live!`

## Befehle

Mit dem Nachrichtenbefehl `youtube twitch <Streamername>` kannst du dir Informationen über einen Twitch-Benutzer und einen möglicherweise aktuell laufenden Livestream anzeigen lassen.
