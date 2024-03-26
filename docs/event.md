---
title: Events and Calendar
description: Using the bot you can import events and display them in a message as a calendar.
---

## Commands {#commands}

<Command name="eventimport" slash="file:.ics file" message="<.ics file as attachment or URL>"></Command>

The eventimport command allows you to import one or more events from an `.ics` file.
You can either upload the file as an attachment or insert a URL.

## Settings {#settings}

### Event reminder {#reminder}

You can select a channel here, in which the bot sends a message shortly before an event starts.
The time, how long before an event is announced, is set by the "time" setting as relative time.

You can also completely customize the sent message with the specified variables.

### Online calendar {#calendar}

Using this setting you can toggle whether the events of the server are available as link online to be imported.
By default, this setting is disabled.

If enabled, users can add the in the settings description used link to e.g. Google Calendar or any other calendar program.

The advantage to exporting the `.ics` file in Discord is that events can be accessed fast and easy, and that changes on the original events don't require another import of the file:
Calendar apps update imported calendars usually every few minutes up to a few hours.
