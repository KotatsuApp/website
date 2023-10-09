<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  details?: string
}>()
</script>

<template>
  <div class="Feature">
    <article class="box">
      <article class="iconBox">
        <h3 class="icon" v-html="icon"></h3>
      </article>
      <h2 class="title" v-html="title"></h2>
      <p v-if="details" class="details" v-html="details"></p>
    </article>
  </div>
</template>

<style scoped>
.Feature {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
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

.details:deep(a) {
  color: var(--vp-c-brand-1);
}

.details:deep(a:hover) {
  text-decoration: underline;
}
</style>