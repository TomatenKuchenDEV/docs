---
title: Befehle
description: Erklärungen zu den Moderationsbefehlen
---

Wenn die [Einstellung "Grund erzwingen"](./settings#enforce-reason) aktiviert ist, ist das Argument "Grund" nicht mehr optional.

## Nutzer bannen {#cmd-ban}

<Command name="ban" slash="user:User [time:Tempban-Zeitraum] [reason:Grund] [forceban:Forceban user?]" message="<Nutzer> [<Tempban-Zeitraum> <...Grund>] [forceban]"></Command>

Wenn `forceban` verwendet wird überprüft der Bot nicht, ob der Nutzer bereits gebannt ist.

## Nutzer entbannen {#cmd-unban}

<Command name="unban" slash="user:Nutzer [reason:Grund]" message="<Nutzer> [<...Grund>]"></Command>

## Gebannte oder gemutete Nutzer anzeigen {#cmd-banlist}

<Command name="banlist" slash="[user:Nutzer]" message="[<Nutzer>]"></Command>

Zeigt gebannte und aktuell getimeoutete Nutzer an.

Du kannst optional einen Benutzer angeben, damit der Bot stattdessen mit Informationen über die spezifische Aktion anzeigt, z. B. den Bangrund.

## Modlogs eines Benutzers anzeigen {#cmd-modlogs}

<Command name="modlogs" slash="[user:Nutzer] [moderator:Moderator, nach dem gefiltert werden soll]" message="[<Nutzer>] [<Moderator, nach dem gefiltert werden soll>]"></Command>

Zeigt die Modlogs eines Benutzers.

Du kannst optional nach dem Moderator filtern, welcher die Aktion ausgeführt hat.

## Nutzer kicken {#cmd-kick}

<Command name="kick" slash="user:Nutzer [reason:Grund]" message="<Nutzer> [<...Grund>]"></Command>

Kickt einen Nutzer vom Server.

## Sperre einen oder mehrere Kanäle {#cmd-lock}

<Command name="lock lock" slash="channels:Kanäle" message="<...Kanäle>"></Command>

<Command name="lock unlock" slash="channels:Kanäle" message="<...Kanäle>"></Command>

## Text ausgeben {#cmd-text-output}

<Command name="say" slash="text:Ausgabetext" message="<...Ausgabetext> [Anhang]"></Command>

<Command name="embed" slash="[input/file:Inhalt] [channel:Kanal]" message="[<...Inhalt> <Kanal>]"></Command>

## Ändere den Slowmode vom aktuellen Kanal {#cmd-slowmode}

<Command name="slowmode" slash="[time:Neue Dauer]" message="[<Neue Dauer>]"></Command>

Der Wert "Neue Dauer" darf sechs Stunden nicht überschreiten.

Wenn keine Zeit angegeben wird wird der aktuelle Slowmode ausgegeben.
Mit `0` kann der Slowmode deaktiviert werden.

## Mute einen Nutzer {#cmd-mute}

<Command name="mute" slash="user:Nutzer time:Zeit [reason:Grund]" message="<Nutzer> <Zeit> [<...Grund>]"></Command>

Dieser Befehl verwendet das Discord-Timeout-Feature, um das Senden von PN-Nachrichten, das Verwenden von Buttons und das Reagieren, zusätzlich zu den normalen Rollen-Mute-Funktionen, zu verhindern.

## Entmute einen Nutzer {#cmd-unmute}

<Command name="unmute" slash="user:Nutzer [reason:Grund]" message="<Nutzer> [<...Grund>]"></Command>

## Mute einen Nutzer {#cmd-voicemute}

<Command name="voicemute" slash="user:User time:Zeit [scope:Muten|Deafen|Beides] [channels:Sprachkanäle] [reason:Grund]" message="<Nutzer> <Zeit> [<Scope>] [<...Sprachkanäle>] [<...Grund>]"></Command>

Muted oder stummt einen Nutzer in allen Sprachkanälen oder nur in den ausgewählten.

"Scope" erlaubt dir, den Aktionstyp auszuwählen, möglich sind die folgenden Optionen:
- Nur muten
- Nur taub schalten (deafen)
- Muten und taub schalten

## Verwarne einen Nutzer {#cmd-warn}

`warn <Nutzer> [<...Grund>]`
<Command name="warn" slash="guild:Server ID" message="<Server ID>"></Command>

## Statistiken ansehen {#cmd-mod-stats}

<Command name="stats moderation"></Command>
