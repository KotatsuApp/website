<script setup lang="ts">
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';
import type { DefaultTheme } from 'vitepress/theme'

defineProps<{
  image: DefaultTheme.ThemeableImage
  title: string
  details?: string
}>()
</script>

<template>
  <div class="Feature">
    <div class="box">
      <h1 v-if="title" class="title">
        <span v-html="title" class="clip"></span>
      </h1>
      <p v-if="details" class="details">
        <p v-html="details"></p>
      </p>
      <div class="image">
        <VPImage class="image-src" :image="image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.Feature {
  display: block;
  border: 4px solid var(--vp-c-brand-soft);
  border-radius: var(--vp-border-radius);
  height: 100%;
  box-shadow: var(--vp-shadow-6);
  transition: border-color 0.25s, background-color 0.25s;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.details {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.image {
  margin-top: 24px;
  margin-bottom: -24px;
}

.details:deep(a) {
  color: var(--vp-c-brand-1);
}

.details:deep(a:hover) {
  text-decoration: underline;
}
</style>