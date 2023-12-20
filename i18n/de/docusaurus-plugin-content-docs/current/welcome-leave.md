---
title: Willkommens- und Leavenachrichten
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Hilft bei der Einrichtung von Willkommens- und Leavenachrichten.
---

Hier findest du alle Einstellungen, die du im [Dashboard](https://tomatenkuchen.com/dashboard/settings) für Willkommens- und Leavenachrichten anpassen kannst.

## Willkommensnachrichtenkanal

Legt den Kanal fest, in dem Willkommensnachrichten gesendet werden.
Leer lassen, um diese Nachrichten zu deaktivieren.

## Leave/Server-verlassen-Nachrichtenkanal

Legt den Kanal fest, in denen eine Nachricht gesendet wird, wenn ein Nutzer den Server verlässt.

## Willkommensnachricht

Ändert die Nachricht, die angezeigt wird, wenn ein Nutzer den Server betritt.

Folgende Variablen sind verfügbar:
- `{servername}`: Servername
- `{servericon}`: Servericon
- `{membercount}`: Mitgliederanzahl
- `{username}`: Nutzername
- `{globalname}`: Globaler Nickname
- `{userid}`: Nutzer-ID
- `{usermention}`: Erwähnung des Nutzers
- `{useravatar}`: Nutzeravatar
- `{inviterusername}`: Nutzername des einladenden Nutzers
- `{inviterid}`: ID des einladenden Nutzers
- `{invitermention}`: Erwähnung des einladenden Nutzers
- `{inviteravatar}`: Avatar des einladenden Nutzers

## Leavenachricht

Ändert die Nachricht, die angezeigt wird, wenn ein Nutzer den Server verlässt.

Es sind dieselben Variablen wie für die Willkommensnachrichten verfügbar.

## Willkommensnachricht bei Verlassen löschen

Hier kann die Zeit eingestellt werden, wie lange es maximal gedauert haben darf, bis der Nutzer den Server wieder verlassen hat.

So können Willkommensnachrichten von Nutzern, die z. B. weniger als zehn Minuten (`10m`) auf dem Server waren, wieder aus dem Kanal gelöscht werden.

## Leavenachricht bei Rejoin löschen

Hier kann die Zeit eingestellt werden, wie lange es maximal gedauert haben darf, bis der Nutzer dem Server erneut beigetreten ist.
