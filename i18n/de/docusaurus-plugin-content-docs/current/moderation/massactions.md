---
title: Massenaktionen
description: Erklärt die Verwendung von Massenaktionen, z. B. das Kicken oder Bannen von mehreren Nutzern oder Hinzufügen/Entfernen von Rollen dieser.
---

## Befehle {#commands}

### Nutzer bannen {#cmd-mass-ban}

`mass ban <Grund> <Liste von Nutzern, getrennt mit " ", "," oder ";">`

### Nutzer kicken {#cmd-mass-kick}

`mass kick <Grund> <Liste von Nutzern, getrennt mit " ", "," oder ";">`

### Dehoist {#cmd-dehoist}

Das Dehoisten, also das Entfernen von unnormalen Zeichen am Anfang von Nutzernamen, kann entweder mit dem Befehl `dehoist`
oder automatisch über die entsprechende Einstellung erfolgen.
Wenn die Einstellung aktiviert ist, führt der Bot den Befehl automatisch einmal täglich aus.

### Rolle zu vielen Nutzern hinzufügen {#cmd-role-massadd}

`role massadd <Rolle> [<Filter>]`

### Rolle von vielen Nutzern entfernen {#cmd-role-massremove}

`role massremove <Rolle> [<Filter>]`

## Mögliche Filter für Rollenmassenaktionen {#role-filters}

- `bot`: Wählt nur Bots aus
- `nobot`: Wählt alle Mitglieder außer Bots aus

Wird kein Filter angegeben sind alle Servermitglieder betroffen.
