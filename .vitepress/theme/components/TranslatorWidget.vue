<script setup lang="ts">
import { type Ref, computed } from 'vue'
import { type PageData, useData } from 'vitepress'
import type { DocsPageData } from '../plugins/section'
import { translators } from '../../../website/translators'

import { VPImage } from 'vitepress/theme-without-fonts'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

export interface Data {
  page: Ref<DocsPageData>
  frontmatter: Ref<PageData['frontmatter']>
  lang: Ref<string>
}

const { page, frontmatter, lang }: Data = useData()

const translatorLabel = computed(() => (lang.value === 'ru') ? ('Переводчик') : ((lang.value === 'ua') ? ('Перекладач') : ('Translator')))
const translator = computed(() => {
  const data = page.value?.section?.translator || translators[frontmatter.value.translator]

  if (!data) {
    return
  }

  return {
    ...data,
    name: typeof data.name === 'string' ? data.name : data.name[lang.value]
  }
})
</script>

<template>
  <article
    v-if="translator"
    class="TranslatorWidget"
  >
    <VPLink
      :href="translator.github"
      no-icon
      class="body"
    >
      <VPImage
        v-if="translator.avatar"
        class="avatar"
        :image="translator.avatar"
      />
      <div class="info">
        <div class="name">{{ translator.name }}</div>
        <div class="label">{{ translatorLabel }}</div>
      </div>
    </VPLink>
  </article>
</template>


<style scoped>
.TranslatorWidget {
  background-color: var(--vp-c-bg-soft);
  border-radius: var(--vp-border-radius);
  margin-top: 20px;
  padding: 20px;
}

.body {
  display: flex;
  align-items: center;
}

:deep(.avatar) {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 12px;
}

:deep(.name) {
  font-size: 13px;
  font-weight: bold;
  line-height: normal;
}

:deep(.label) {
  font-size: 14px;
  line-height: normal;
}

:deep(.link) {
  transition: color 0.25s;
}

:deep(.link):hover {
  color: var(--vp-c-brand-1);
}
</style>
