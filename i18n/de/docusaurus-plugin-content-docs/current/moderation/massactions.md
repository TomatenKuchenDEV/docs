---
title: Massenaktionen
description: Erklärt die Verwendung von Massenaktionen, z. B. das Kicken oder Bannen von mehreren Nutzern oder Hinzufügen/Entfernen von Rollen dieser.
---

## Befehle {#commands}

### Nutzer bannen {#cmd-mass-ban}

<Command name="mass ban" slash="reason:Grund users:Liste von Nutzern, getrennt mit &quot; &quot;, &quot;,&quot; oder &quot;;&quot;" message="<Grund> <Liste von Nutzern, getrennt mit &quot; &quot;, &quot;,&quot; oder &quot;;&quot;>"></Command>

### Nutzer kicken {#cmd-mass-kick}

<Command name="mass kick" slash="reason:Grund users:Liste von Nutzern, getrennt mit &quot; &quot;, &quot;,&quot; oder &quot;;&quot;" message="<Grund> <Liste von Nutzern, getrennt mit &quot; &quot;, &quot;,&quot; oder &quot;;&quot;>"></Command>

### Dehoist {#cmd-dehoist}

Das Dehoisten, also das Entfernen von unnormalen Zeichen am Anfang von Nutzernamen, kann entweder mit dem Befehl `dehoist` oder automatisch über die entsprechende Einstellung erfolgen.

Wenn die [Einstellung für automatisches Dehoisten](./settings#auto-dehoist) aktiviert ist, führt der Bot den Befehl automatisch einmal täglich aus.

### Rolle zu vielen Nutzern hinzufügen {#cmd-role-massadd}

<Command name="role massadd" slash="role:Rolle [filter:Filter]" message="<Rolle> [<Filter>]"></Command>

### Rolle von vielen Nutzern entfernen {#cmd-role-massremove}

<Command name="role massremove" slash="role:Rolle [filter:Filter]" message="<Rolle> [<Filter>]"></Command>

## Mögliche Filter für Rollenmassenaktionen {#role-filters}

- `bot`: Wählt nur Bots aus
- `nobot`: Wählt alle Mitglieder außer Bots aus

Wird kein Filter angegeben sind alle Servermitglieder betroffen.
