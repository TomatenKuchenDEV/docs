---
title: Forms
description: TomatenKuchen is a multipurpose Discord bot with a lot of features. Using the online forms you can create for example ban appeals or staff applications.
image: /img/forms_example.png
---

Using TomatenKuchen you can create online forms for all kind of purposes fast and easy.

![Forms example](/img/forms_example.png)

## Creating a form {#create}

<Command slash="form add slug:URL slug title:Form title" message="form add <URL slug> <Form title>"></Command>

## Editing a form {#edit}

<Command slash="form edit id:ID or URL slug" message="form edit <ID or URL slug>"></Command>

## Settings per form {#settings}

Each form can have these settings individually configured:
- Title which is shown above the form
- Slug which is used in the URL. The slug is easier to remember than the randomly generated ID.
- Whether only users of the server can submit the form or everyone with the URL
- Whether responses are sent anonymously. Note that the user has to login regardless of this setting, if enabled it just won't display the user info on Discord.
- Whether the bot creates a thread on the submission message for discussion
- Whether a user can send one or multiple responses
- How long a user has to wait between responses (Default: five minutes)

## Field types {#field-types}

There are multiple field types which can be changed when editing a field.

Depending on the type there are additional settings.
All of them are able to have a default value set.

- Single & multi line text & password field
	- Min length
	- Max length
- Number & range selection for a number
	- Min value
	- Max value
	- Step between values
- Selection & checkboxes
	- Min selections
	- Max selections
	- List of options
- Date picker
- Time picker
- Color picker
