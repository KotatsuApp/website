<script lang="ts" setup>
import { computed } from 'vue'

const {href} = defineProps<{
  href?: string
  noIcon?: boolean
  title?: string
}>()

const isExternal = computed(() => href && /^[a-z]+:/i.test(href))
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    :class="{ link: href }"
    :href
    :target="isExternal ? '_blank' : 'self'"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :title="title || href"
  >
    <slot />
    <label
      v-if="isExternal && !noIcon"
      i-ic-round-arrow-outward
      class="icon"
    />
  </component>
</template>

<style scoped>
.icon {
  cursor: pointer;
  display: inline-block;
  margin-top: -2px;
  margin-left: 4px;
  width: 12px;
  height: 21px;
  transition: fill 0.25s;
}
</style>
