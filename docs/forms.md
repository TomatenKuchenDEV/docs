---
title: Forms
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Using the online forms you can create for example ban appeals or staff applications.
---

Using TomatenKuchen you can create online forms for all kind of purposes fast and easy.

![Forms example](/img/forms_example.png)

## Setup

Forms are created and managed using the command `form`.

## Settings per form

Each form can have these settings individually configured:
- Title which is shown above the form
- Slug which is used in the URL. The slug is easier to remember than the randomly generated ID.
- Whether only users of the server can submit the form or everyone with the URL
- Whether responses are sent anonymously. Note that the user has to login regardless of this setting, if enabled it just won't display the user info on Discord.
- Whether the bot creates a thread on the submission message for discussion
- Whether a user can send one or multiple responses
- How long a user has to wait between responses (Default: five minutes)

## Field types

There are multiple field types which can be changed when editing a field. Depending on the type there are additional settings.

- Single line text field
- Multi line text field
- Password field
- Number field
- Range selection for a number
- Selection out of a list of options
- One or multiple checkboxes
- Date picker
- Time picker
- Color picker
