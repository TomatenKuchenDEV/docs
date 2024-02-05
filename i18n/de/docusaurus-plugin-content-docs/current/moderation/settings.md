---
title: Einstellungen
description: Erklärungen zu den möglichen AutoMod-Einstellungen.
---

## Servereinladungen löschen {#settings-delete-invites}

Löscht Discord-Einladungen, die nicht für den aktuellen Server sind.

## Kanäle, in denen Einladungen erlaubt sind {#settings-invites-allowed}

In diesen Kanälen werden Einladungen nicht gelöscht, wenn die obrige Einstellung aktiviert ist.

## Antispam {#setting-antispam}

De- oder aktiviert das Antispam auf dem Server.

## Teamkanal {#setting-team-channel}

Legt den Teamkanal auf dem Server fest, in welchen eine Nachricht gesendet wird, wenn ein Nutzer eine Discord-AutoMod-Aktion auslöst.

Mit dieser Nachricht kannst mit entsprechenden Berechtigungen du bei Bedarf Schritte gegen den Nutzer einleiten, z. B. diesen verwarnen oder bannen.

## Standard-Nachrichtenlöschzeitraum {#setting-default-delete-duration}

Wenn ein Nutzer gebannt wird wird dieser Zeitraum an Nachrichten automatisch gelöscht. Aufgrund einer Discord-Limitierung begrenzt auf maximal sieben Tage (`7d`).

## Markdown-Header blockieren {#setting-block-markdown-headers}

Verhindert, dass Nutzer Nachrichten senden, die mit Markdown-Überschriften (`#`, `##` und `###`) beginnen. So kann das Flooden des Kanals mit großen Überschriften verhindert werden.

## AutoMod-Erklärungen {#setting-automod-explain}

Schreibt Nutzern eine PN, wenn sie gegen eine Discord-AutoMod-Regel des Servers verstoßen, in der das Wort und der vollständige Textinhalt wiedergegeben wird.

## PN-Nachrichten für Ban/Kick/Mute/Warn {#setting-dm-messages-on-ban-kick-mute-warn}

Hier können die Nachrichten bearbeitet werden, die Nutzer per PN erhalten, wenn ein Moderator eine der angegebenen Funktionen nutzt.

Leer lassen zum Deaktivieren.

## Nur-Anhangs-Kanäle {#setting-attachment-only-channels}

In diesen Kanälen können Nutzer nur Anhänge, z. B. Bilder oder Videos, senden. Nur Text ist nicht erlaubt, Nachrichten können aber einen optionalen Text beeinhalten.

## Mindestaccountalter {#setting-min-age}

Mindestalter für Discord-Nutzer, die dem Server neu beitreten. Wenn diese nicht alt genug sind, werden sie gekickt.

## Mindestaccountalter-Warnung {#setting-min-age-warning}

Ähnlich wie die obrige Einstellung, aber sendet nur eine Warnung in den [Teamkanal](#setting-team-channel), anstatt den Nutzer zu kicken.

## AutoMod-Caps-Prozentsatz {#setting-automod-caps}

Ab welchem Anteil von Großbuchstaben in Prozent (30-100, Standard 70) eine Nachricht aufgrund von zu vielen Caps gelöscht wird.

## PNs für immer deaktivieren {#setting-disable-dms-forever}

Deaktiviert das Senden von PNs an Nutzer, mit denen noch nie eine Direktnachricht geschrieben worden ist.

Dafür wird die Sicherheitsmaßnahmen-Funktion von Discord verwendet, welche vom Bot automatisch verlängert wird.

## Servereinladungen für immer deaktivieren {#setting-pause-invites-forever}

Deaktiviert Servereinladungen für immer, sodass Nutzer dem Server nicht mehr beitreten können, auch mit einer gültigen Einladung nicht.

Dafür wird die Sicherheitsmaßnahmen-Funktion von Discord verwendet, welche vom Bot automatisch verlängert wird.

## Grund erzwingen {#setting-enforce-reason}

Erzwingt einen Grund bei Moderationsaktionen.

## Vorlagen für Moderationsgründe {#setting-reason-presets}

Es können Vorlagen für Moderationsgründe erstellt werden, um mit einem Shortcut einen längeren Grund schnell und einfach verwenden zu können.

### Beispiel {#setting-reason-presets-examples}

- `name`: "werbung"
- `value`: "Du hast gegen unsere Regeln verstoßen: Werbung ist verboten!"

<Command slash="mute user:Nutzer reason:werbung" message="mute <Nutzer> werbung"></Command>

## Automatisches dehoisten {#setting-auto-dehoist}

Stellt ein, ob der Bot automatisch einmal täglich den `dehoist`-Befehl ausführen soll.

Damit werden Zeichen aus dem Anzeigenamen von Nutzern entfernt, die diese in der Mitgliederliste nach oben pushen.
