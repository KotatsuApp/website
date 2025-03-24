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
  <svg :width :height viewBox="0 0 20 20">
    <path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" :fill fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
</template>
