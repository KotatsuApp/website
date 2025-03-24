<script setup lang="ts">
import { computed, ref } from 'vue'
import type { DefaultTheme } from 'vitepress'

import Tree from './Tree.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

const {item} = defineProps<{
  item: DefaultTheme.SidebarItem
}>()
const isOpen = ref(false)
const isFolder = computed(() => {
  return !!item.items?.length
})

function toggle() {
  if (isFolder.value) isOpen.value = !isOpen.value
}
</script>

<template>
  <li
    class="item"
    :class="{
      folder: isFolder,
      opened: isOpen,
      'is-link': !!item.link
    }"
  >
    <span
      class="title"
      @click="toggle"
    >
      <div
        v-if="isFolder"
        class="icon"
      >
        <svg
          viewBox="0 -0.5 17 17"
          version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path d="M6.113,15.495 C5.531,16.076 4.01,16.395 4.01,14.494 L4.01,1.506 C4.01,-0.333 5.531,-0.076 6.113,0.506 L12.557,6.948 C13.137,7.529 13.137,8.47 12.557,9.052 L6.113,15.495 L6.113,15.495 Z"></path>
        </svg>
      </div>
      <VPLink :href="item.link">
        {{ item.text }}
      </VPLink>
    </span>
    <Tree
      v-show="isOpen"
      v-if="isFolder"
      :items="item.items"
      class="list"
    />
  </li>
</template>

<style scoped>
.item {
  position: relative;
  margin-left: 5px;
}

.item:not(.folder) {
  border-left: 1px dashed var(--vp-c-text-3);
}

.item:not(.folder)::before {
  content: '';
  position: absolute;
  top: calc(50% - .5px);
  left: 3px;
  width: 12px;
  height: 0;
  border-top: 1px dashed var(--vp-c-text-3);
}

.title {
  position: relative;
  padding-left: 20px;
}

.folder .title {
  cursor: pointer;
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 100%;
  display: flex;
  align-items: center;
}

.icon svg {
  position: relative;
  margin-left: -3px;
  width: 10px;
  height: 10px;
  fill: var(--vp-c-text-3);
  transition: fill .25s;
}

.item:not(.is-link) > .title:hover > .icon svg,
.icon:hover svg {
  fill: var(--vp-c-brand-1);
}

.opened > .title > .icon svg {
  transform: rotate(90deg);
}

:deep(.link) {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

:deep(.link:hover) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.item :deep(.list) {
  padding-left: 20px;
}
</style>
