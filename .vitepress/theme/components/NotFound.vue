<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import { useLangs } from 'vitepress/dist/client/theme-default/composables/langs'

import Button from './Button.vue'

const { site, theme } = useData()
const { localeLinks } = useLangs({ removeCurrent: false })

const root = ref('/')
onMounted(() => {
  const path = window.location.pathname
    .replace(site.value.base, '')
    .replace(/(^.*?\/).*$/, '/$1')

  if (localeLinks.value.length) {
    root.value =
      localeLinks.value.find(({ link }) => link.startsWith(path))?.link ||
      localeLinks.value[0].link
  }
})
</script>

<template>
  <div class="NotFound">
    <p class="code">{{ theme.notFound?.code ?? 'Four-Oh-Four' }}</p>
    <h1 class="title">{{ theme.notFound?.title ?? 'Page not found' }}</h1>
    <div class="divider" />
    <blockquote class="quote">
      <template v-if="theme.notFound?.quote">
        {{ theme.notFound?.quote }}
      </template>
      <template v-else>
        <p>It looks like you followed an incorrect or outdated link.</p>
        <p>The information you were looking for is in here somewhere. You can use the search.</p>
        <br>
        <p>This site is automatically generated from files hosted on GitHub, so addresses may sometimes change.</p>
      </template>
    </blockquote>
    <div class="action">
      <Button
        class="link"
        :href="root"
        theme="alt"
        :text="theme.notFound?.linkText ?? 'Back to main page'"
      />
    </div>
  </div>
</template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}
@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}
.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}
.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
}
.quote {
  margin: 0 auto;
  max-width: 512px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
.action {
  padding-top: 20px;
}
</style>
