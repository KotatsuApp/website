<script setup lang="ts" >
import { defaultAttributes } from './defaultAttributes'

withDefaults(defineProps<{
  height?: string
  width?: string
  fill?: string
}>(), {
  ...defaultAttributes
})
</script>

<template>
  <svg
    :width
    :height
    viewBox="0 0 24 24"
  >
    <path
      :fill
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M19 12H5m7 7l-7-7l7-7"
    />
  </svg>
</template>
