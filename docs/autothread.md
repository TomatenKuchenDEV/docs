---
title: Automatic threads
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Mit der automatischen Erstellung von Threads können z. B. Diskussionskanäle oder Bugreport-Kanäle übersichtlicher gestaltet werden.
---

Mithilfe dieser Funktion lassen sich automatisch Threads in ausgewählten Kanälen erstellen, wenn eine neue Nachricht in diesen gesendet wird.

## Adding channels

In der dazugehörigen Einstellung im [Dashboard](https://tomatenkuchen.com/dashboard/settings) können Kanäle hinzugefügt werden, in welchen ein neuer Thread erstellt werden soll, wenn eine neue Nachricht gesendet wird.

You have multiple variables when choosing the name of the thread.

## Variables for the thread name

- `{username}`: The username of the user
- `{globalName}`: The global display name
- `{nickname}`: The nickname of the user on the server
- `{content}`: The content of the message

Note that the name must not be longer than 100 characters.

## Permissions

Der Bot benötigt für diese Funktion mindestens die folgenden Berechtigungen in den Kanälen:
- View Channel
- Send Messages
- Read Message History
- Create Public Threads
