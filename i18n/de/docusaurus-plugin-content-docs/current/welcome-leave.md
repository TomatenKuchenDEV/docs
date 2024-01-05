---
title: Willkommens- und Leavenachrichten
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Hilft bei der Einrichtung von Mitgliederwillkommens- und -leavenachrichten.
---

Hier findest du alle Einstellungen, die du im [Dashboard](https://tomatenkuchen.com/dashboard/settings#welcomeChannel) für Willkommens- und Leavenachrichten anpassen kannst.

## Willkommensnachrichtenkanal {#settings-welcome-channel}

Legt den Kanal fest, in dem Willkommensnachrichten gesendet werden.
Leer lassen, um diese Nachrichten zu deaktivieren.

## Leave/Server-verlassen-Nachrichtenkanal {#settings-leave-channel}

Legt den Kanal fest, in denen eine Nachricht gesendet wird, wenn ein Nutzer den Server verlässt.

## Willkommensnachricht {#settings-welcome-message}

Ändert die Nachricht, die angezeigt wird, wenn ein Nutzer den Server betritt.

Folgende Variablen sind verfügbar:
- `{serverName}`: Servername
- `{serverIcon}`: Servericon
- `{memberCount}`: Mitgliederanzahl
- `{username}`: Nutzername
- `{globalName}`: Globaler Nickname
- `{userid}`: Nutzer-ID
- `{userMention}`: Erwähnung des Nutzers
- `{userAvatar}`: Nutzeravatar
- `{inviterUsername}`: Nutzername des einladenden Nutzers
- `{inviterid}`: ID des einladenden Nutzers
- `{inviterMention}`: Erwähnung des einladenden Nutzers
- `{inviterAvatar}`: Avatar des einladenden Nutzers

## Leavenachricht {#settings-leave-message}

Ändert die Nachricht, die angezeigt wird, wenn ein Nutzer den Server verlässt.

Es sind dieselben Variablen wie für die Willkommensnachrichten verfügbar.

## Willkommensnachricht bei Verlassen löschen {#settings-delete-welcome-on-leave}

Hier kann die Zeit eingestellt werden, wie lange es maximal gedauert haben darf, bis der Nutzer den Server wieder verlassen hat.

So können Willkommensnachrichten von Nutzern, die z. B. weniger als zehn Minuten (`10m`) auf dem Server waren, wieder aus dem Kanal gelöscht werden.

## Leavenachricht bei Rejoin löschen {#settings-delete-leave-on-rejoin}

Hier kann die Zeit eingestellt werden, wie lange es maximal gedauert haben darf, bis der Nutzer dem Server erneut beigetreten ist.

## Nutzer entfernen beim Verlassen {#settings-remove-left-users}

Diese Einstellung sorgt, wenn aktiviert, dafür, dass, sobald ein Nutzer den Server verlässt, seine Votes auf Vorschlägen sowie Giveaways, denen der Nutzer beigetreten ist, entfernt wird.
