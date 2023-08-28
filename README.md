# Docusaurus docs for [TomatenKuchen](https://tomatenkuchen.com) & Manage Bot

Deployed using Cloudflare Pages on https://docs.tomatenkuchen.com.

# Todo
- custom bots übersetzen
- twitch streamer beispiel + msg variablen

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
