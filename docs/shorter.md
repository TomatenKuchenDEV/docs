---
title: Shorter command
description: This page explains sh0rt.zip and the related shorter command.
---

[sh0rt.zip](https://sh0rt.zip) is a simple URL shortener made by the same developer as TomatenKuchen.

## Following URL redirects {#follow-redirects}

The command `shorter follow <URL>` follows redirects of the given URL and lists them.

## Statistics of the domain {#shorter-stats}

Using the command `shorter stats` you can view statistics of the sh0rt.zip domain, e.g. the amount of views and the most used browsers.

These statistics are collected anonmously by [Cloudflare](https://cloudflare.com), sh0rt.zip itself doesn't collect any data.

## Creating a short URL {#create}

`shorter create <Target URI> [<Name>]` creates a short URL with the given name.

If you don't enter a name, it'll generate a few random characters.

If created successfully, the bot responds with the generated short URL, like https://sh0rt.zip/bundbot, and a QR code for easier sharing.

To share the QR code as image link you can add "qr/" to the link, e.g. https://sh0rt.zip/qr/bundbot:

![Bundbot shorter QR code](https://sh0rt.zip/qr/bundbot)
