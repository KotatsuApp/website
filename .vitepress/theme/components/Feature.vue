<script setup lang="ts">
defineProps<{
  title: string
  details?: string
}>()
</script>

<template>
  <div class="Feature">
    <article class="box">
      <h2 class="title" v-html="title"></h2>
      <p v-if="details" class="details" v-html="details"></p>
    </article>
  </div>
</template>

<style scoped>
.Feature {
  color: inherit;
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: var(--vp-border-radius);
  height: 100%;
  overflow-x: hidden;
  box-shadow: var(--vp-shadow-6);
  transition: box-shadow .3s cubic-bezier(.22,.61,.36,1);
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

.details:deep(a) {
  color: var(--vp-c-brand-1);
}

.details:deep(a:hover) {
  text-decoration: underline;
}
</style>