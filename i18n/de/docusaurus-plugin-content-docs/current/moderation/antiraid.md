---
title: Antiraid
description: Das Antiraid-System kann die meisten Join-Raids ganz einfach erkennen und verhindern.
---

Mit dem Antiraid-System von TomatenKuchen kannst du problemlos die meisten Server-Join-Raids dem Bot überlassen.

Das System merkt sich, sofern aktiviert, alle neu gejointen Nutzer.
Wenn zu viele Mitglieder im festgelegten Zeitraum beitreten, werden die kürzlich gejointen Nutzer sowie alle neuen gekickt, bis das Limit nicht mehr überschritten wird.

## Einstellungen {#settings}

### Antiraid-Modus {#mode}

Diese [Einstellung](https://tomatenkuchen.com/dashboard/settings#antiraidMode) legt fest, ob das Antiraid aktiviert ist und wenn ja, was bei einem Raid passieren soll.

Die Option "Disabled" deaktiviert das Antiraid vollständig.

Die Option "Kick members" kickt bei einem Raid dauerhaft alle neu beigetretenen Nutzer.

#### "Disable invites" {#disable-invites}

:::warning Nur Communityserver

Nur auf Discord-Communityservern verfügbar, da Discord "Einladungen pausieren" auf anderen Servern nicht für Bots zugänglich macht.

:::

Die Option "Disable invites" hingegen pausiert die Servereinladungen auf einem Server, sobald ein Raid erkannt wird, für eine bestimmte Zeit.
Ebenfalls werden alle kürzlich beigetretenen Nutzer gekickt.

Nach Ablauf dieser Zeit können Nutzer wieder beitreten - sollte der Raid weiterhin bestehen, werden die Servereinladungen erneut pausiert.

Wenn du denkst, dass ein Raid bereits vorbei ist, aktiviere die Einladungen einfach wieder über die Discord-Servereinstellungen -> Einladungen.

## Nutzerlimit {#limit}

Diese Einstellung legt fest, wie viele Nutzer maximal in der festgelegten Zeit in Sekunden dem Server beitreten dürfen.

Wird diese Anzahl an Beitritten im unten festgelegten Zeitfenster überschritten, erkennt der Bot einen Raid und aktiviert das Antiraid.

## Zeitfenster {#seconds}

Das Zeitfenster in Sekunden bietet, neben der Anpassung des Nutzerlimits, eine weitere Möglichkeit, die Sensitivität des Antiraids zu konfigurieren.

Je höher diese Zahl ist, desto weniger kurze Raids werden erkannt.

## Erhöhung des Verifikationslevels {#verification-level}

Wenn diese Einstellung auf etwas anderes als "None" gestellt ist wird bei einem erkannten Raid das Discord-Server-Verifikationslevel auf das festgelegte Level erhöht.

Nachdem der Raid beendet ist wird automatisch wieder der vorherige Wert eingestellt.
Dies gilt nur, wenn das Verifikationslevel in der Zwischenzeit nicht bearbeitet wurde, um nicht in manuelle Moderationsaktionen einzugreifen.

Ebenfalls wird das Verifikationslevel durch die Erhöhung bei einem Raid nie auf eine niedrigere Stufe eingestellt, sondern nur auf eine höhere.
