---
title: Log- & Bansync
description: Log- und Bansync-Erklärung
---

# Logsync
Mithilfe der Logsync-Funktion des Bots kannst du die Logs eines Servers auf einen anderen senden lassen, z. B. um Logs von einem Haupt- auf einen teaminternen Server zu senden.

## Setup
`sync logs <Server-ID>`

Die Server-ID bekommst du entweder über den Entwicklermodus von Discord, durch `server` oder aus der Dashboard-URL.

Wenn du den Befehl mit der Server-ID eingegeben hast erhältst du einen Code, den du dann bei `sync verify <Code>` auf dem anderen Server eingeben musst. Ab dann werden die Logs des ersten Servers auf den zweiten gesendet.

Um die Synchronisation zu beenden verwende den Befehl `sync stop`.

# Bansync
Auch Bans bzw. Unbans lassen sich mithilfe des Bots synchronisieren. Im Gegensatz zu Logs lassen sich bei Bans mehrere Server gleichzeitig verwenden, auf die bzw. von denen synchronisiert wird.

## Setup
`sync bans <Server-ID> <Bans synchronisieren> <Unbans synchronisieren>`

Bans bzw. Unbans synchronisieren stellt ein, ob Bans bzw. Unbans synchronisiert werden sollen. Wenn du z. B. nur Bans synchronisieren willst, wähle bei Unbans "False" aus.

Der Rest ist wie bei Logsync.
