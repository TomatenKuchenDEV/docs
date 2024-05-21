---
title: Thread time action
description: Execute actions on a thread or forum/media channel post after the configured time.
---

The [thread time action setting](https://tomatenkuchen.com/dashboard/settings#threadTimeAction) allows setting a thread-compatible channel to execute the configured action on its thread.

Multiple actions can be defined for a single channel, however only one per action type.

## Action types {#action-types}

- `close`: Closes/Archives the thread. This is *not* the same as the Discord in-built setting which only hides the thread, but doesn't close it.
- `lock`: Locks the thread, making non-moderators unable to e.g. send messages or add reactions.
- `closelock`: Close and locks the thread.
- `delete`: Deletes the thread after the configured time.
- `addLabel:<List of labels separated by ",">`: Adds the given label(s). Only works if the channel is a forum/media channel. Note that you have to specify the [tag ID](/id), not the name.
- `removeLabel:<List of labels separated by ",">`: Removes the given label(s). See above.
