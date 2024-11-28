<script setup lang="ts">
import { type DefaultTheme, useRoute, withBase } from 'vitepress'

import List from './List.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

const route = useRoute()
defineProps<{
  items: DefaultTheme.SidebarItem[]
}>()
</script>

<template>
  <ul>
    <li
      v-for="(item, key) in items"
      :key="key"
      class="item"
      :class="{ 'has-link': item.link }"
    >
      <VPLink
        v-if="item.link"
        :href="item.link"
        :class="{ active: withBase(item.link) === route.path }"
      >
        {{ item.text }}
      </VPLink>
      <span v-else>
        {{ item.text }}
      </span>
      <List v-if="item.items" :items="item.items" />
    </li>
  </ul>
</template>

<style scoped>
.link {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.active {
  color: var(--vp-c-brand-1);
}
</style>
