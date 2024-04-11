---
title: Einstellungen
description: Erklärungen zu den möglichen AutoMod-Einstellungen.
---

## Servereinladungen löschen {#delete-invites}

Löscht Discord-Einladungen, die nicht für den aktuellen Server sind.

## Kanäle, in denen Einladungen erlaubt sind {#invites-allowed}

In diesen Kanälen werden Einladungen nicht gelöscht, wenn die obrige Einstellung aktiviert ist.

## Antispam {#antispam}

De- oder aktiviert das Antispam auf dem Server.

## Teamkanal {#team-channel}

Legt den Teamkanal auf dem Server fest, in welchen eine Nachricht gesendet wird, wenn ein Nutzer eine Discord-AutoMod-Aktion auslöst.

Mit dieser Nachricht kannst mit entsprechenden Berechtigungen du bei Bedarf Schritte gegen den Nutzer einleiten, z. B. diesen verwarnen oder bannen.

## Standard-Nachrichtenlöschzeitraum {#default-delete-duration}

Wenn ein Nutzer gebannt wird wird dieser Zeitraum an Nachrichten automatisch gelöscht. Aufgrund einer Discord-Limitierung begrenzt auf maximal sieben Tage (`7d`).

## Markdown-Header blockieren {#block-markdown-headers}

Verhindert, dass Nutzer Nachrichten senden, die mit Markdown-Überschriften (`#`, `##` und `###`) beginnen.

So kann das "Flooden" von Kanälen mit langen Textwänden verhindert werden.

## AutoMod-Erklärungen {#automod-explain}

Schreibt Nutzern eine PN, wenn sie gegen eine Discord-AutoMod-Regel des Servers verstoßen, in der das Wort und der vollständige Textinhalt wiedergegeben wird.

## Direktnachrichten bei Ban/Kick/Mute/Warn {#dm-messages}

Hier können die Nachrichten bearbeitet werden, die Nutzer per PN erhalten, wenn ein Moderator eine der angegebenen Funktionen nutzt.

Leer lassen zum Deaktivieren.

## Nur-Anhangs-Kanäle {#only-attachment-channels}

In diesen Kanälen können Nutzer nur Anhänge, z. B. Bilder oder Videos, senden. Nur Text ist nicht erlaubt, Nachrichten können aber einen optionalen Text beeinhalten.

## Links-Lösch-Kanäle {#delete-links-channels}

In diesen Kanälen werden alle Arten von Links bzw. URLs gelöscht und der Nutzer für kurze Zeit getimeouted.

## Mindestaccountalter {#min-age}

Mindestalter für Discord-Nutzer, die dem Server neu beitreten. Wenn diese nicht alt genug sind, werden sie gekickt.

## Mindestaccountalter-Warnung {#min-age-warning}

Ähnlich wie die obrige Einstellung, aber sendet nur eine Warnung in den [Teamkanal](#team-channel), anstatt den Nutzer zu kicken.

## AutoMod-Caps-Prozentsatz {#automod-caps}

Ab welchem Anteil von Großbuchstaben in Prozent (30-100, Standard 70) eine Nachricht aufgrund von zu vielen Caps gelöscht wird.

## PNs für immer deaktivieren {#disable-dms-forever}

Deaktiviert das Senden von PNs an Nutzer, mit denen noch nie eine Direktnachricht geschrieben worden ist.

Dafür wird die Sicherheitsmaßnahmen-Funktion von Discord verwendet, welche vom Bot automatisch verlängert wird.

## Servereinladungen für immer deaktivieren {#pause-invites-forever}

Deaktiviert Servereinladungen für immer, sodass Nutzer dem Server nicht mehr beitreten können, auch mit einer gültigen Einladung nicht.

Dafür wird die Sicherheitsmaßnahmen-Funktion von Discord verwendet, welche vom Bot automatisch verlängert wird.

## Grund erzwingen {#enforce-reason}

Erzwingt einen Grund bei Moderationsaktionen.

## Vorlagen für Moderationsgründe {#reason-presets}

Es können Vorlagen für Moderationsgründe erstellt werden, um mit einem Shortcut einen längeren Grund schnell und einfach verwenden zu können.

### Beispiel {#reason-presets-examples}

- `name`: "werbung"
- `value`: "Du hast gegen unsere Regeln verstoßen: Werbung ist verboten!"

<Command name="mute" slash="user:Nutzer reason:werbung" message="<Nutzer> werbung"></Command>

## Automatisches dehoisten {#auto-dehoist}

Stellt ein, ob der Bot automatisch einmal täglich den `dehoist`-Befehl ausführen soll.

Damit werden Zeichen aus dem Anzeigenamen von Nutzern entfernt, die diese in der Mitgliederliste nach oben pushen.

## Dateiblacklist {#file-blacklist}

Diese Einstellung und der Befehl `fileblacklist` erlauben dir, das Senden bestimmter Dateien auf deinem Server zu verhindern.

Um das zu tun musst du den SHA-256-Hash der Datei berechnen. Wenn du nicht weißt, wie das geht, nutze einfach den Befehl:

<Command name="fileblacklist add" slash="[url:A file URL or sha256 hash to blacklist] [file:The file you want to blacklist] [reason:The blacklist reason]" message="<URL>|<Anhang> [<Reason>]"></Command>

Entweder ein Dateihash, eine URL oder der Anhang selbst muss angegeben werden.

Obwohl der Grund optional ist wird empfohlen, den Kontext oder den Grund für die Blacklist dort einzutragen, weil du später nicht mehr die Möglichkeit mit TomatenKuchen hast, die Datei anzusehen.
Der Grund könnte z. B. einfach "nsfw" oder "Verwendet von Spammern." sein.
