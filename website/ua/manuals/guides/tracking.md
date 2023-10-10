---
title: Tracking
description: Tracking helps track your library with different online services.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Tracking
Tracking helps you automatically send read chapters to supported trackers, so you can keep track of what and when you read it online.

## Services

Kotatsu (version {{ release.stable.tag_name }}) supports the following services: [MyAnimeList](https://myanimelist.net/), [AniList](https://anilist.co/), and [Shikimori](https://shikimori.one/).

- Tracking is manual for each entry.
- Reading the last page of a chapter marks it as read.
- Offline progress syncs when online.
- Completion status auto-updates.
- Tracking is one-way: **Kotatsu -> Tracker**.

## General questions

### How do I log in to trackers?
1. Go to <nav to="services">.
1. Tap the desired tracker to begin login.

### How do I set up tracking for each series?
1. Open the series.
1. Tap <nav to="details_tracking">.
1. Find a series and click **Done**.

::: tip
You can also change the search query if there is no match.
:::