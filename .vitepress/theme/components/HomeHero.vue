<script setup lang="ts">
import Button from './Button.vue'

export interface HeroAction {
  theme?: 'brand' | 'alt'
  text: string
  link: string
}

export interface Data {
  title: string
  text: string
  tagline: string
  actions: HeroAction[]
}

defineProps<{
  data: Data
}>()
</script>

<template>
  <section id="hero">
    <h1 class="title">
      <span class="accent">{{ data.title }}</span>
    </h1>
    <p class="description">
      {{ data.tagline }}
    </p>
    <p class="actions">
      <p v-for="action in data.actions" :key="action.link" class="action">
        <Button
          tag="a"
          :theme="action.theme"
          :text="action.text"
          :href="action.link"
        />
      </p>
    </p>
  </section>
</template>

<style scoped>

section {
  padding: 42px 32px;
}

#hero {
  padding: 96px;
  text-align: left;
}

.title {
  font-size: 48px;
  line-height: 52px;
  font-weight: 500;
  max-width: 1340px;
  margin: 0px auto;
}

html:not(.dark) .accent,
.dark .title {
  background: -webkit-linear-gradient(315deg, var(--vp-c-brand-1) 10%, var(--vp-c-brand-3) 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 576px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 17px;
  margin: 24px 0;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin: -6px;
}

.action {
  flex-shrink: 0;
  padding: 6px;
}

@media (max-width: 1340px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 768px) {
  #hero {
    padding: 48px;
  }
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 56px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>