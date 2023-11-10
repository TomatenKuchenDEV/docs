---
title: Einstellungen
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärungen zu den möglichen AutoMod-Einstellungen.
---

## Servereinladungen löschen

Löscht Discord-Einladungen, die nicht für den aktuellen Server sind.

## Kanäle, in denen Einladungen erlaubt sind

In diesen Kanälen werden Einladungen nicht gelöscht, wenn die obrige Einstellung aktiviert ist.

## Antispam

De- oder aktiviert das Antispam auf dem Server.

## Standard-Nachrichtenlöschzeitraum

Wenn ein Nutzer gebannt wird wird dieser Zeitraum an Nachrichten automatisch gelöscht. Aufgrund einer Discord-Limitierung begrenzt auf maximal sieben Tage (`7d`).

## Markdown-Header blockieren

Verhindert, dass Nutzer Nachrichten senden, die mit Markdown-Überschriften (`#`, `##` und `###`) beginnen. So kann das Flooden des Kanals mit großen Überschriften verhindert werden.

## AutoMod-Erklärungen

Schreibt Nutzern eine PN, wenn sie gegen eine Discord-AutoMod-Regel des Servers verstoßen, in der das Wort und der vollständige Textinhalt wiedergegeben wird.

## PN-Nachrichten für Ban/Kick/Mute/Warn

Hier können die Nachrichten bearbeitet werden, die Nutzer per PN erhalten, wenn ein Moderator eine der angegebenen Funktionen nutzt.

Leer lassen zum Deaktivieren.

## Nur-Anhangs-Kanäle

In diesen Kanälen können Nutzer nur Anhänge, z. B. Bilder oder Videos, senden. Nur Text ist nicht erlaubt, Nachrichten können aber einen optionalen Text beeinhalten.

## Mindestaccountalter

Mindestalter für Discord-Nutzer, die dem Server neu beitreten. Wenn diese nicht alt genug sind, werden sie gekickt.

## AutoMod-Caps-Prozentsatz

Ab welchem Anteil von Großbuchstaben in Prozent (30-100, Standard 70) eine Nachricht aufgrund von zu vielen Caps gelöscht wird.

## PNs für immer deaktivieren

Deaktiviert das Senden von PNs an Nutzer, mit denen noch nie eine Direktnachricht geschrieben worden ist.

Dafür wird die Sicherheitsmaßnahmen-Funktion von Discord verwendet, welche vom Bot automatisch verlängert wird.

## Servereinladungen für immer deaktivieren

Deaktiviert Servereinladungen für immer, sodass Nutzer dem Server nicht mehr beitreten können, auch mit einer gültigen Einladung nicht.

Dafür wird die Sicherheitsmaßnahmen-Funktion von Discord verwendet, welche vom Bot automatisch verlängert wird.

## Grund erzwingen

Erzwingt einen Grund bei Moderationsaktionen.

## Vorlagen für Moderationsgründe

Es können Vorlagen für Moderationsgründe erstellt werden, um mit einem Shortcut einen längeren Grund schnell und einfach verwenden zu können.

### Beispiel

- `name`: "r1"
- `value`: "Du hast gegen Regel 1 verstoßen: Werbung ist verboten!"

## Auto-Dehoist

Stellt ein, ob der Bot automatisch einmal täglich den `dehoist`-Befehl ausführen soll.

Damit werden Zeichen aus dem Anzeigenamen von Nutzern entfernt, die diese in der Mitgliederliste nach oben pushen.
