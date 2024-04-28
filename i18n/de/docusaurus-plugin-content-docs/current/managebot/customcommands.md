---
title: Customcommands
description: Der Manage Bot erlaubt die Kontrolle von Pterodactyl-Servern von Discord aus. Diese Seite erklärt die Verwendung von Customcommands zur Serverkontrolle.
---

Der Manage Bot erlaubt die Verwendung von Customcommands zur Verwaltung eines Servers.

![Ausgefüllter Discord-Slashcommand zum Erstellen von Customcommands, in diesem Fall zum Whitelisten eines Spielers auf einem Minecraft-Server](/img/managebot_ccadd.png)

## Befehle {#commands}

### `/customcommand add <Name> <Panel-Alias> <Server-ID> <Befehl> [<Antwort>]` {#cc-add}

Erstellt einen Customcommand auf dem Server, verlinkt mit deinen Panel-Zugangsdaten.

Den Panel-Alias findest du bei `/list`.
Wenn keine Antwort angegeben wird antwortet der Bot mit "Der Befehl wurde im Panel … ausgeführt: …"

### `/customcommand delete <Name>` {#cc-delete}

Löscht einen Customcommand.

### `/customcommand list` {#cc-list}

Listet alle Customcommands des Servers auf.

## Variablen {#vars}

- `{args}`: Eine Liste aller Argumente
- `{1}` `{2}` `{3}`: Die ersten drei Argumente, optional
- `{!1}` `{!2}` `{!3}`: Die ersten drei Argumente, erzwungen

## Beispiele {#examples}

### Server starten {#server-start}

- `command`: `start`
- `response`: `Der Server wird gestartet!`

Du kannst auch `stop`, `restart` und `kill` verwenden.

### Minecraft Whitelist {#minecraft-whitelist}

- `command`: `whitelist add {!1}`
- `response`: `Der Spieler **{1}** wurde gewhitelisted!`
