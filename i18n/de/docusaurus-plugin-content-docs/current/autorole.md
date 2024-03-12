---
title: Auto- & Rejoinrollen sowie Autonickname
description: Erklärt, wie man Auto- und Rejoinrollen verwendet
---

## Autorollen {#autorole}

Autorollen sind Rollen, die Nutzern und Bots beim Beitreten automatisch gegeben werden.
Du kannst verschiedene Rollen für Nutzer und Bots auswählen.

### Verzögerte Autorollen {#delayed-autoroles}

Mit der [Verzögerte-Nutzer-Autorollen-Einstellung](https://tomatenkuchen.com/dashboard/settings#autoroleUserDelay) kannst du eine Verzögerung von bis zu einem halben Jahr festlegen, um das Verteilen der Autorollen an den neu beigetretenen Nutzer zu verzögern.

## Rejoinrollen {#rejoinrole}

[Rejoinroles](https://tomatenkuchen.com/dashboard/settings#rejoinRoles) erlauben dir, die konfigurierten Rollen Nutzers zurückzugeben, wenn diese deinen Server verlassen haben, während diese Einstellung aktiv war, und sie dem Server erneut beitreten.

:::note Berechtigungen

Der Bot benötigt die Berechtigung "Rollen verwalten", um die Rollen zuzuweisen.

Zusätzlich muss die höchste Rolle des Bots über der höchsten Rolle sein, die du erneut verteilen willst.

:::

## Nicknamen beim Beitreten {#join-nick}

Es kann ein Nickname festgelegt werden, den Mitglieder beim Beitreten erhalten sollen. Das folgende Argument kann verwendet werden:
- `{username}`: Der Benutzername des Nutzers
- `{globalName}`: Der globale Anzeigename des Nutzers
