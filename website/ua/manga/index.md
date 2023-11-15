---
title: Привіт
description: Для переходу за цим посиланням вам може знадобитися встановлений застосунок Kotatsu.
search: false
sidebar: true
sitemap: 
    exclude: true
head:
  - - meta
    - name: robots
      content: noindex, nofollow
footer: false
translator: CakesTwix
---

<script setup>
import { onMounted } from "vue"
import DownloadButtons from "@theme/components/DownloadButtons.vue";

onMounted(() => {
  window.location = `kotatsu://manga/manga${window.location.toString().split("manga/").pop()}`
})
</script>

# Привіт.

Для переходу за цим посиланням вам може знадобитися встановлений застосунок Kotatsu.

Kotatsu - це безкоштовний застосунок для читання манґи з відкритим вихідним кодом для платформи Android. Вона підтримує безліч онлайн-каталогів різними мовами з фільтрами та пошуком, офлайн-читання з локального сховища, обране, закладки, сповіщення про нові глави та інші функції.

<DownloadButtons />
