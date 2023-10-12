<script setup lang="ts">
import DefaultTheme from 'vitepress/theme-without-fonts'

import Home from './Home.vue'
import TranslatorWidget from './TranslatorWidget.vue'
import ScreenTranslatorWidget from './ScreenTranslatorWidget.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import NotFound from './NotFound.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <Home />
    </template>
    <template #aside-outline-after>
      <TranslatorWidget />
    </template>
    <template #doc-before>
      <Breadcrumbs />
    </template>
    <template #doc-footer-before>
      <ScreenTranslatorWidget />
    </template>
    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>