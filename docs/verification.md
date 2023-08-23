---
title: Verifikation
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Setup and usage of verification to prevent bots.
---

Verification can be used to prevent bots joining the server. You can select one of multiple modes to use for verification.

## Commands

The command `verify` can be used to send a verification message. There is no limit on created messages per server.

## Settings

### Verification mode

Currently you can select one of the following modes:
- None
- Captcha
- Math task

"None" adds the selected roles directly to the user when they click the verify button.

### Verification roles

You can select the roles which users will receive after verification here.

### Aktionen bei falschen Verifikationsantworten

Hier können anhand der Anzahl der fehlgeschlagenen Verifikationsversuche entsprechende Strafen festgelegt werden.

Possible actions:
- Ban
- Kick
- Mute
- Wartezeit, bis der Nutzer erneut die Verifizierung beginnen kann
- Zurücksetzen des Zählers

Bei "Mute" und "Wartezeit" kann zusätzlich noch eine Dauer angegeben werden, wie lange der Nutzer gemuted wird bzw. wie lange er/sie warten muss.

Beachte, dass die "Wartezeit" Nutzer nicht vom Senden von PN-Nachrichten abhält.
Nutze stattdessen "Mute", was sowohl Buttons als auch PNs deaktiviert und dem Nutzer die Wartezeit schöner anzeigt, als der Bot es kann.

### Task difficulty

Hier kann die Schwierigkeitsstufe der Modi (außer "Keine") festgelegt werden. Dadurch ändert sich die Beantwortungszeit und bei:
- Captcha die Anzahl der Zeichen
- Mathe-Aufgaben die Komplexibität der Aufgaben
