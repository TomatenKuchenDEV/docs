---
title: Verifikation
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Einrichten und Verwendung der Verifikation zur Vermeidigung von Join- und Raidbots.
---

Die Verifikation kann verwendet werden, um potentielle Bots am Beitreten auf den Server zu hindern. Du kannst zwischen verschiedenen Modi wählen, die zur Verifikation verwendet werden.

## Befehle

Der Befehl `verify` wird zum Setup einer Verifikationsnachricht verwendet, die Einstellungen werden im [Dashboard](https://tomatenkuchen.com/dashboard/settings) durchgeführt.
Es können unbegrenzt Nachrichten pro Server erstellt werden.

## Einstellungen

### Verifikationsmodus

Du kannst aktuell zwischen den folgenden Modi auswählen:
- Keine
- Captcha
- Mathe-Aufgabe
- Website-Captcha

"Keine" weißt den Nutzern beim Klicken auf den Button direkt die ausgewählten Rollen zu.

### Verifikationsrollen

Hier kannst du die Rollen auswählen, die Nutzer nach der Verifikation erhalten.

### Aktionen bei falschen Verifikationsantworten

Hier können anhand der Anzahl der fehlgeschlagenen Verifikationsversuche entsprechende Strafen festgelegt werden.

Mögliche Aktionen:
- Ban
- Kick
- Mute
- Wartezeit, bis der Nutzer erneut die Verifizierung beginnen kann
- Zurücksetzen des fehlgeschlagenen Verifikationszählers

Bei "Mute" und "Wartezeit" kann zusätzlich noch eine Dauer angegeben werden, wie lange der Nutzer gemuted wird bzw. wie lange er/sie warten muss.

Beachte, dass die "Wartezeit" Nutzer nicht vom Senden von PN-Nachrichten abhält.
Nutze stattdessen "Mute", was sowohl Buttons als auch PNs deaktiviert und dem Nutzer die Wartezeit schöner anzeigt, als der Bot es kann.

### Schwierigkeitsstufe

Hier kann die Schwierigkeitsstufe der Modi (außer "Keine") festgelegt werden. Dadurch ändert sich die maximale Beantwortungszeit und bei:
- Captcha die Anzahl der Zeichen
- Mathe-Aufgaben die Komplexibität der Aufgaben
