<script setup lang="ts">
import { useData } from 'vitepress'

import HomeHero from './HomeHero.vue'

const { frontmatter: fm } = useData()
</script>

<template>
  <template v-if="fm.main">
    <div class="container">
      <HomeHero :data="fm.main" />
    </div>
  </template>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1340px;
}
</style>