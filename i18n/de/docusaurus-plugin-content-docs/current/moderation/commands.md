---
title: Grundsätzliche Moderationsbefehle
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärungen zu den Moderationsbefehlen
---

Wenn die [Einstellung](./settings) "Grund erzwingen" aktiviert ist, ist das Argument `<Grund>` nicht mehr optional.

## Nutzer bannen {#cmd-ban}

`ban <Nutzer> [<Zeit> <Grund>] [forceban]`

Wenn `forceban` verwendet wird überprüft der Bot nicht, ob der Nutzer bereits gebannt ist.

## Nutzer entbannen {#cmd-unban}

`unban <Nutzer> [<Grund>]`

## Gebannte oder gemutete Nutzer anzeigen {#cmd-banlist}

`banlist [<Nutzer>]`

## Modlogs eines Benutzers anzeigen {#cmd-modlogs}

`modlogs <Nutzer>`

## Nutzer kicken {#cmd-kick}

`kick <Nutzer> [<Grund>]`

## Sperre einen oder mehrere Kanäle {#cmd-lock}

`lock lock|unlock [<Kanäle>]`

## Text ausgeben {#cmd-text-output}

`say <Nachricht>`
`embed [<Inhalt> <Kanal>]`

Du kannst auch Anhänge, z. B. Bilder, verwenden.

## Ändere den Slowmode vom aktuellen Kanal {#cmd-slowmode}

`slowmode <Dauer>`

## Mute einen Nutzer {#cmd-mute}

`mute <Nutzer> <Zeit> <Grund>`

## Entmute einen Nutzer {#cmd-unmute}

`unmute <Nutzer> [<Grund>]`

## Verwarne einen Nutzer {#cmd-warn}

`warn <Nutzer> <Grund>`

## Statistiken ansehen {#cmd-mod-stats}

`stats moderation`
