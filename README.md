# Docusaurus docs for [TomatenKuchen](https://tomatenkuchen.com) & Manage Bot

Deployed using Cloudflare Pages on https://docs.tomatenkuchen.com.

# Todo
- custom bots übersetzen

```
command: "Message and/or slash command used<br><small>Argument: Slash command description, if empty disables slash cmd</small>",
button: "Button pressed<br><small>Argument: Button custom ID</small>",
select: "Select menu selected<br><small>Argument: Select menu custom ID</small>",
modal: "Modal sent<br><small>Argument: Modal custom ID</small>",
autoModTrigger: "Discord Automod triggered",
msgContains: "Message content contains<br><small>Argument: Text content</small>",
msgRegEx: "Message content matches RegExp<br><small>Argument: RegEx to check<br>Name: RegEx flags to use</small>",
slashOtherBot: "Non-ephemeral slash command executed on other bot<br><small>Argument: Slash command name</small>",
systemMsg: "Discord system message<br><small>Argument: <a href='https://discord.com/developers/docs/resources/channel#message-object-message-types' target='_blank' rel='noopener'>Internal system message ID</a></small>",
cron: "Cronjob<br><small>Argument: The cronjob, e.g. from <a href='https://crontab.guru' target='_blank' rel='noopener'>crontab.guru</a>, min 5 mins</small>",
interval: "Interval<br><small>Argument: Interval time like <code>45m</code>, can have random offsets after bot restarts, min 5 mins, max 2 days</small>",
joinLeave: "Member joined/left server<br><small>Argument: <code>join</code>, <code>leave</code> or <code>all</code>/empty</small>",
reaction: "Reaction added/removed<br><small>Argument: <code>add</code>, <code>remove</code> or <code>all</code>/empty</small>",
userRole: "Role added or removed from user<br><small>Argument: <code>add</code>, <code>remove</code> or <code>all</code>/empty</small>",
nickname: "Nickname updated",
channel: "Channel created/deleted<br><small>Argument: <code>create</code>, <code>delete</code> or <code>all</code>/empty</small>",
role: "Role created/deleted<br><small>Argument: <code>create</code>, <code>delete</code> or <code>all</code>/empty</small>",
boost: "Server (un)boosted<br><small>Argument: <code>boost</code>, <code>boostend</code> or <code>all</code>/empty</small>",
timeout: "Member (un)timeouted<br><small>Argument: <code>timeout</code>, <code>timeoutend</code> or <code>all</code>/empty</small>",
voice: "User joined/left voice channel<br><small>Argument: <code>join</code>, <code>leave</code> or <code>all</code>/empty</small>",
webhook: "Webhook created/deleted<br><small>Argument: <code>create</code>, <code>delete</code> or <code>all</code>/empty</small>",
thread: "Thread or post created/deleted<br><small>Argument: <code>create</code>, <code>delete</code> or <code>all</code>/empty</small>"
```

# Integration RegEx trigger

| RegEx Pattern | Function |
| :------------ | :--------------------------------------- |
| .             | matches any character |
| [abc]         | matches a, b, or c |
| [^abc]        | matches any character except a, b, and c |
| a\|b          | a or b |
| x*            | zero or more x |
| x+            | one or more x |
| x?            | zero or one x |
| x{n,m}        | n or any number in between or m x |
| x{n,}         | n or more x |
| x{n}          | exactly n x |
| (re)          | numbered capturing group (submatch) |
| \d            | digits (= [0-9]) |
| \D            | non-digits (≠ [0-9]) |
| \s            | whitespace (= [\t\n\f\r ]) |
| \S            | non-whitespace (≠ [\t\n\f\r ]) |
| \w            | word characters (= [0-9A-Za-z_]) |
| \w            | non-word characters (≠ [0-9A-Za-z_]) |

<sub>Inspired by <https://docs.archit.us/features/auto-responses#expressions></sub>
