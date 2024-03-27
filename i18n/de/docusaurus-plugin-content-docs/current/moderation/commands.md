---
title: Befehle
description: Erklärungen zu den Moderationsbefehlen
---

Wenn die [Einstellung](./settings) "Grund erzwingen" aktiviert ist, ist das Argument `[<Grund>]` nicht mehr optional.

## Nutzer bannen {#cmd-ban}

`ban <Nutzer> [<Zeit> <...Grund>] [forceban]`

Wenn `forceban` verwendet wird überprüft der Bot nicht, ob der Nutzer bereits gebannt ist.

## Nutzer entbannen {#cmd-unban}

`unban <Nutzer> [<...Grund>]`

## Gebannte oder gemutete Nutzer anzeigen {#cmd-banlist}

`banlist [<Nutzer>]`

## Modlogs eines Benutzers anzeigen {#cmd-modlogs}

`modlogs <Nutzer>`

## Nutzer kicken {#cmd-kick}

`kick <Nutzer> [<...Grund>]`

## Sperre einen oder mehrere Kanäle {#cmd-lock}

`lock lock|unlock [<Kanäle>]`

## Text ausgeben {#cmd-text-output}

`say <...Nachricht>`
`embed [<...Inhalt> <Kanal>]`

Du kannst auch Anhänge, z. B. Bilder, verwenden.

## Ändere den Slowmode vom aktuellen Kanal {#cmd-slowmode}

`slowmode <Dauer>`

## Mute einen Nutzer {#cmd-mute}

`mute <Nutzer> <Zeit> [<...Grund>]`

Dieser Befehl verwendet das Discord-Timeout-Feature, um das Senden von PN-Nachrichten, das Verwenden von Buttons und das Reagieren, zusätzlich zu den normalen Rollen-Mute-Funktionen, zu verhindern.

## Entmute einen Nutzer {#cmd-unmute}

`unmute <Nutzer> [<...Grund>]`

## Mute einen Nutzer {#cmd-voicemute}

`voicemute <Nutzer> <Zeit> <Scope> [<Kanäle>] [<...Grund>]`

Muted oder stummt einen Nutzer in allen Sprachkanälen oder nur in den ausgewählten.

"Scope" erlaubt dir, den Aktionstyp auszuwählen, möglich sind die folgenden Optionen:
- Nur muten
- Nur taub schalten (deafen)
- Muten und taub schalten

## Verwarne einen Nutzer {#cmd-warn}

`warn <Nutzer> [<...Grund>]`

## Statistiken ansehen {#cmd-mod-stats}

`stats moderation`
