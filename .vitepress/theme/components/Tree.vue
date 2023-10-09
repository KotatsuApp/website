<script setup lang="ts">
import type { DefaultTheme } from 'vitepress'

import TreeItem from './TreeItem.vue'

defineProps<{
  items: DefaultTheme.SidebarItem[]
}>()
</script>

<template>
  <ul v-if="items" class="list">
    <TreeItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    />
  </ul>
</template>

<style scoped>
.list {
  padding-left: 0;
  list-style: none;
}
</style>