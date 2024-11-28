<script setup lang="ts">
import type { Ref } from 'vue'
import { useData, withBase, useRoute } from 'vitepress'
import type { DocsPageData } from '../plugins/section'

import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

const { page }: { page: Ref<DocsPageData> } = useData()
const route = useRoute()
</script>

<template>
  <ol
    v-if="page.breadcrumbs.length"
    class="Breadcrumbs"
    itemscope itemtype="https://schema.org/BreadcrumbList"
  >
    <li
      v-for="(item, idx) in page.breadcrumbs"
      :key="idx"
      itemscope itemprop="itemListElement" itemtype="https://schema.org/ListItem"
      class="item"
      :class="{
        active: item.link && withBase(item.link) === route.path,
      }"
    >
      <VPLink
        v-if="item.link && idx < page.breadcrumbs.length - 1"
        :href="item.link"
        :title="item.text"
        itemprop="item"
        class="link"
      >
        <span
          itemprop="name"
          class="name"
          v-text="item.text"
        />
      </VPLink>
      <template v-else>
        <span
          :title="item.text"
          itemprop="name"
          class="name"
          v-text="item.text"
        />
        <link
          v-if="item.link"
          :href="item.link"
          itemprop="item"
        >
      </template>
      <meta
        itemprop="position"
        :content="idx.toString()"
      >
    </li>
  </ol>
</template>

<style scoped>
.Breadcrumbs {
  display: flex;
  white-space: nowrap;
  column-gap: 10px;

  color: var(--vp-c-text-2);
  margin-bottom: 10px;
  font-size: .9rem;
}

.item {
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:last-child {
    display: none;
  }

  & + .item::before {
    content: '/';
    font-weight: normal;
    margin-right: 8px;
  }
}

.link {
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;

  &:hover {
    color: var(--vp-c-brand-1);
  }
}

.name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@media (min-width: 768px) {
  .item:last-child {
    display: unset;
  }
}
</style>
