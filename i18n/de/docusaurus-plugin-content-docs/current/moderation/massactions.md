---
title: Massenaktionen
description: Erklärt die Verwendung von Massenaktionen, z. B. das Kicken oder Bannen von mehreren Nutzern oder Hinzufügen/Entfernen von Rollen dieser.
---

## Befehle {#commands}

### Nutzer bannen {#cmd-mass-ban}

<Command slash="mass ban reason:Grund users:Liste von Nutzern, getrennt mit \" \", \",\" oder \";\"" message="mass ban <Grund> <Liste von Nutzern, getrennt mit \" \", \",\" oder \";\">"></Command>

### Nutzer kicken {#cmd-mass-kick}

<Command slash="mass kick reason:Grund users:Liste von Nutzern, getrennt mit \" \", \",\" oder \";\"" message="mass kick <Grund> <Liste von Nutzern, getrennt mit \" \", \",\" oder \";\">"></Command>

### Dehoist {#cmd-dehoist}

Das Dehoisten, also das Entfernen von unnormalen Zeichen am Anfang von Nutzernamen, kann entweder mit dem Befehl `dehoist` oder automatisch über die entsprechende Einstellung erfolgen.

Wenn die [Einstellung für automatisches Dehoisten](./settings#setting-auto-dehoist) aktiviert ist, führt der Bot den Befehl automatisch einmal täglich aus.

### Rolle zu vielen Nutzern hinzufügen {#cmd-role-massadd}

<Command slash="role massadd role:Rolle [filter:Filter]" message="role massadd <Rolle> [<Filter>]"></Command>

### Rolle von vielen Nutzern entfernen {#cmd-role-massremove}

<Command slash="role massremove role:Rolle [filter:Filter]" message="role massremove <Rolle> [<Filter>]"></Command>

## Mögliche Filter für Rollenmassenaktionen {#role-filters}

- `bot`: Wählt nur Bots aus
- `nobot`: Wählt alle Mitglieder außer Bots aus

Wird kein Filter angegeben sind alle Servermitglieder betroffen.
