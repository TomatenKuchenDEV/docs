---
title: Massenaktionen
description: Erklärt die Verwendung von Massenaktionen, z. B. das Kicken oder Bannen von mehreren Nutzern oder Hinzufügen/Entfernen von Rollen dieser.
---

## Befehle {#commands}

### Nutzer bannen {#cmd-mass-ban}

<Command name="mass ban" slash="reason:Grund users:Liste von Nutzern, getrennt mit &quot; &quot;, &quot;,&quot; oder &quot;;&quot;" message="<Grund> <Liste von Nutzern, getrennt mit &quot; &quot;, &quot;,&quot; oder &quot;;&quot;>"></Command>

Mit diesem Befehl können maximal 200 Nutzer gleichzeitig gebannt werden.

:::warning Modlogs

Wenn Nutzer mit diesem Befehl gebannt werden wird aus Speichergründen standardmäßig kein Modlog-Eintrag erstellt.

Wenn du an diesen Modlogeinträgen interessiert bist, banne die Nutzer einzeln oder wende dich an den [Supportserver](https://tomatenkuchen.com/discord).

:::

### Nutzer kicken {#cmd-mass-kick}

<Command name="mass kick" slash="reason:Grund users:Liste von Nutzern, getrennt mit &quot; &quot;, &quot;,&quot; oder &quot;;&quot;" message="<Grund> <Liste von Nutzern, getrennt mit &quot; &quot;, &quot;,&quot; oder &quot;;&quot;>"></Command>

### Dehoist {#cmd-dehoist}

Das Dehoisten, also das Entfernen von unnormalen Zeichen am Anfang von Nutzernamen, kann entweder mit dem Befehl `dehoist` oder automatisch über die entsprechende Einstellung erfolgen.

Wenn die [Einstellung für automatisches Dehoisten](./settings#auto-dehoist) aktiviert ist, führt der Bot den Befehl automatisch einmal täglich aus.

### Rolle zu mehreren Mitgliedern hinzufügen {#cmd-role-massadd}

<Command name="role massadd" slash="role:Rolle [filter:Filter]" message="<Rolle> [<Filter>]"></Command>

Fügt eine Rolle zu allen Servermitgliedern hinzu.

Mit der `filter`-Option kannst du anpassen, welche Mitglieder eine Rolle erhalten werden:
- Alle (nicht angeben)
- Nur Bots
- Nur Nutzer
- Nur Mitglieder, welche aktuell eine Rolle haben (gibt nur die Rollen-ID als Filter an)

### Rolle von mehreren Mitgliedern entfernen {#cmd-role-massremove}

<Command name="role massremove" slash="role:Rolle [filter:Filter]" message="<Rolle> [<Filter>]"></Command>

Entfernt eine Rolle von allen Servermitgliedern.

Die möglichen Filter sind dieselben wie beim [Role-Massadd-Befehl](#cmd-role-massadd).

## Mögliche Filter für Rollenmassenaktionen {#role-filters}

- `bot`: Wählt nur Bots aus
- `nobot`: Wählt alle Mitglieder außer Bots aus

Wird kein Filter angegeben sind alle Servermitglieder betroffen.
