<script setup lang="ts">
import { type Ref, computed } from 'vue'
import { type PageData, useData } from 'vitepress'
import type { DocsPageData } from '../plugins/component'
import { type Translator, translators } from '../../../website/translators'

import { VPImage } from 'vitepress/theme-without-fonts'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

export interface Data {
  page: Ref<DocsPageData>
  frontmatter: Ref<PageData['frontmatter']>
  lang: Ref<string>
}

const { page, frontmatter, lang }: Data = useData()

const translatorLabel = computed<string>(() => lang.value === 'ru' ? 'Переводчик' : 'Translator')
const translator = computed<Translator>(() => {
  const data = page.value?.component?.translator || translators[frontmatter.value.translator]

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
    class="ScreenAuthorWidget"
  >
    <VPLink
      :href="translator.github"
      :no-icon="true"
      class="body"
    >
      <VPImage
        v-if="translator.avatar"
        class="avatar"
        :image="translator.avatar"
      />
      <div class="info">
        <span class="label">{{ translatorLabel }}:</span>
        <span class="name">{{ translator.name }}</span>
      </div>
    </VPLink>
  </article>
</template>


<style scoped>
.ScreenAuthorWidget {
  margin-bottom: 20px;
}

@media (min-width: 1280px) {
  .ScreenAuthorWidget {
    display: none;
  }
}

.body {
  display: flex;
  align-items: center;
}

.info {
  display: flex;
  font-size: 13px;
  gap: 5px;
}

:deep(.avatar) {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 5px;
}

:deep(.name) {
  font-weight: bold;
  line-height: normal;
}

:deep(.label) {
  line-height: normal;
}

:deep(.link) {
  transition: color 0.25s;
}

:deep(.link):hover {
  color: var(--vp-c-brand-1);
}
</style>