---
title: Text translation
description: TomatenKuchen is able to translate text into over 100 languages, even automatically!
---

TomatenKuchen is able to translate text using Google Translate into over 100 languages.

## Command {#commands}

Using the command `translate` you're able to translate a word, a sentence or a whole text into the given target language.

:::tip Translation quality

The longer a sentence is, the better the translation gets.

:::

## Integration: Automatic translation {#autotranslate}

Using the integration [`autotranslate`](https://tomatenkuchen.com/dashboard/integrations?info=autotranslate) messages in a configured channel can be translated automatically.

1. [Add the integration to your server](https://tomatenkuchen.com/dashboard/integrations?use=autotranslate)
	1. Open the above link
	2. Select your server
	3. Click on "Use integration"
2. Scroll down until you can see the field "Channel ID". Enter the channel ID there from which channel messages should be translated automatically. You can get the channel ID e.g. using the command `channelinfo`.
3. Enter the target language.
	- The target language is a unique, two-letter code for a language
	- e.g. `en` for English or `de` for German
	- You can also find the language code when using the `/translate` slashcommand
4. Click on "Create integration" - done!

## Integration: Translation by reacting with a flag {#flag-reaction-translate}

Using the integration [`flag-reaction-translate`](https://tomatenkuchen.com/dashboard/integrations?info=flag-reaction-translate) messages can be translated by reacting to a message with the related flag.

1. [Add the integration to your server](https://tomatenkuchen.com/dashboard/integrations?use=flag-reaction-translate)
2. Ensre the bot has all required permissions in the channel you want to use it in.
3. Click on "Create integration" - done!
