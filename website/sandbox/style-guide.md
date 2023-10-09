---
title: Style guide
description: Style guide to aid website content contributors.
lang: en-US
sitemap:
  exclude: true
---

# Style guide
Style guide to aid website content contributors. For the code used for certain segments, please view the code for this page.
Note that I am not experienced in making these and thus it was created on a whim, if you know any way to improve this page then please submit an edit for it or create an issue.

## FAQ Style
Some **DO**s and **DO NOT**s for [FAQ](/manuals/faq/general).

- **DO NOT** be afraid to ask for help, this includes clarifying what some parts on this page mean.

- **DO** write each segment as a question:
> #### How can I see how many chapters I've downloaded?

- **DO** write your instructions as clear as possible, preferably check with other people first and see if they can help you improve your language used.

- **DO NOT** write noticably sloppily, this makes it harder for both us and the user to understand.

- **DO NOT** forget to at least check for basic grammar issues, this includes not having a capital letter in your first word and forgetting commas/periods.

- **DO PREFERABLY**, in relation to the above, use resources that can aid with grammar and general structure:
> - [Grammarly](https://app.grammarly.com/) - Grammarly's writing app makes sure everything you type is not only correct, but also clear and easy to read.
> - [Hemmingway App](http://www.hemingwayapp.com/) - Hemingway App makes your writing bold and clear.

- **DO** preferably try to build the enviroment and test it locally first before submitting your PR, ask for help with this if you need it.

- **DO** use guide containers for quickly showing how to achieve something:
> ::: tip Instructions
> Enable it by going to <NavigationText item="library"/> → <NavigationText item="filter"/> → **Display** section and then checking the **Download badges** option at the bottom.
> :::

- **DO** try to be consistent with video recording by following these guidelines:
> ::: tip Video recording guidelines
> When making videos, it's highly preferable that you use [Android Studio's](https://developer.android.com/studio) emulator for a consistent result each time. The emulator settings > for the front-page images is a **Pixel 3 XL** running **Android 10**.
> - Record your videos as **MP4** or **WEBM**, whichever works the best for you.
> - Use Androids built-in **Demo Mode**, it can be found in the Developer settings.
> - Record with a clean workspace and don't be too hasty or too slow with actions.
> :::

- **DO** use arrow symbols in instructions, instead of using greater-than symbols:
> Start → Goal

- **DO** bold important words in your text:
> ...checking the **Download badges** option...

- **DO** use **[Shortcodes](https://github.com/KotatsuApp/kotatsuapp.github.io/.vitepress/config/shortcodes.ts)** items when applicable:
> <nav to="data"/>

- **DO** use unordered lists when writing a list of stuff that's not an instruction:
> - This thing.
> - And that thing.

- **DO NOT** use unordered lists for instructions.
- **DO** use ordered lists when writing a longer instruction:
> 1. Step one.
> 1. Step two.

- **DO** use tabs for instructions when necessary for a good experience:
> ::: tabs
> == Android 8+
> **Lorem ipsum** dolor sit amet, _consectetur_ adipiscing **elit**.
> == Android 7 and under
> **Pellentesque** _habitant_ morbi tristique **senectus** et netus.
> :::

- **DO** include related info as an aside object:
> **Lorem ipsum** dolor sit amet, _consectetur_ adipiscing **elit**.
> ::: tip Note
> Related GitHub issue: [#1](https://github.com/KotatsuApp/Kotatsu/issues/1)
> :::

- **DO** use code tags for error codes and file names:
> Storage related error: `Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException...`