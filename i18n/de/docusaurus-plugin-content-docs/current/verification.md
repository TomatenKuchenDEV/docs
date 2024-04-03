---
title: Verifikation
description: Einrichten und Verwendung der Verifikation zur Vermeidigung von Join- und Raidbots.
image: /img/verification_website.png
---

Die Verifikation kann verwendet werden, um potentielle Bots am Beitreten auf den Server zu hindern. Du kannst zwischen verschiedenen Modi wählen, die zur Verifikation verwendet werden.

![Website-Verifikations-Beispiel](/img/verification_website.png)

## Verifikationsnachrichtenbefehl {#commands}

Der Befehl `verification` wird zum Setup einer Verifikationsnachricht verwendet.
Einstellungen können im [Dashboard](https://tomatenkuchen.com/dashboard/settings#verificationRole) geändert werden.

Es können unbegrenzt Nachrichten pro Server erstellt werden.

## Einstellungen {#settings}

### Verifikationsmodus {#mode}

Du kannst aktuell zwischen den folgenden Modi auswählen:
- Keine Verifikation
- Captcha
- Mathe-Aufgabe
- Website-Captcha

"Keine Verifikation" weist den Nutzern beim Klicken auf den Button direkt die ausgewählten Rollen zu.

### Verifikationsrollen {#roles}

Hier kannst du die Rollen auswählen, die Nutzer nach der Verifikation erhalten.

### Aktionen bei falschen Verifikationsantworten {#fail}

Hier können anhand der Anzahl der fehlgeschlagenen Verifikationsversuche entsprechende Strafen festgelegt werden.

Mögliche Aktionen:
- Ban
- Kick
- Mute
- Wartezeit, bis der Nutzer die Verifizierung erneut versuchen kann
- Zurücksetzen des fehlgeschlagenen Verifikationszählers

Bei "Mute" und "Wartezeit" kann zusätzlich noch eine Dauer angegeben werden, wie lange der Nutzer gemuted wird bzw. wie lange er/sie warten muss.

Beachte, dass die "Wartezeit" Nutzer nicht vom Senden von PN-Nachrichten abhält.
Nutze stattdessen "Mute", was mit einem Discord-Timeout sowohl Buttons als auch neue PNs deaktiviert und dem Nutzer die Wartezeit schöner anzeigt, als der Bot es kann.

### Schwierigkeitsstufe {#difficulty}

Hier kann die Schwierigkeitsstufe der Modi (außer "Keine") festgelegt werden. Dadurch ändert sich die maximale Beantwortungszeit und bei:
- Captcha die Anzahl der Zeichen
- Mathe-Aufgaben die Komplexibität der Aufgaben
