<script setup lang="ts">
import { computed } from 'vue'
import type { DefaultTheme } from 'vitepress/theme-without-fonts'

import Feature from './Feature.vue'

interface IFeature {
  image?: DefaultTheme.ThemeableImage
  title: string
  details: string
  link?: string
  linkText?: string
}

const {features} = defineProps<{
  features: IFeature[]
}>()

const grid = computed(() => {
  const length = features.length

  if (length === 0) {
    return
  } else if (length === 2) {
    return 'grid-2'
  } else if (length === 3) {
    return 'grid-3'
  } else if (length % 3 === 0) {
    return 'grid-6'
  } else if (length > 3) {
    return 'grid-4'
  }
})
</script>

<template>
  <div v-if="features" class="Features">
    <div class="container">
      <div class="items">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="item"
          :class="[grid]"
        >
          <Feature
            :image="feature.image"
            :title="feature.title"
            :details="feature.details"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Features {
  position: relative;
  padding: 0 24px;
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -12px;
}

.item {
  padding: 12px;
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 2);
  }
}

@media (min-width: 768px) {
  .item.grid-2,
  .item.grid-4 {
    width: calc(100% / 2);
  }

  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}

@media (min-width: 1200px) {
  .Features {
    padding: 0;
  }
}
</style>
