<script setup lang="ts">
import { computed } from 'vue'
import { normalizeLink } from 'vitepress/dist/client/theme-default/support/utils'
import { EXTERNAL_URL_RE } from 'vitepress/dist/client/shared'

const {tag,theme = "brand",href} = defineProps<{
  tag?: string
  theme?: 'brand' | 'alt' | 'sponsor'
  text: string
  href?: string
  target?: string
}>()

const classes = computed(() => [
  theme
])

const isExternal = computed(() => href && EXTERNAL_URL_RE.test(href))

const buttonTag = computed(() => tag ?? (href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="buttonTag"
    class="Button"
    :class="classes"
    :href="href ? normalizeLink(href) : undefined"
    :target="target ?? (isExternal ? '_blank' : undefined)"
    :rel="isExternal ? 'noreferrer' : undefined"
    :aria-label="text"
  >
    {{ text }}
  </component>
</template>

<style scoped>
.Button {
  position: relative;
  display: inline-block;
  border: 4px solid transparent;
  border-radius: 8px;
  padding: 8px 18px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.25s, color 0.25s;
}

.Button.alt {
  border: 4px solid var(--vp-c-gray-1);
}

.Button.alt:hover {
  background-color: var(--vp-c-gray-1);
  color: var(--vp-c-black);
}

.Button.alt:active {
  border-color: var(--vp-c-black);
  background-color: var(--vp-c-black);
  color: var(--vp-c-white);
}

.Button.cta:hover {
  background-color: var(--vp-c-gray-1);
  color: var(--vp-c-black);
}

.Button.cta:before {
  content: '';
  position: absolute;
  display: block;
  width: 25px;
  height: 25px;
  top: calc(50% - 12.5px);
  left: 12px;
}

.Button.cta.question {
  padding-left: 45px;
}

.Button.cta.question::before {
  content: '';
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="dodgerblue" class="w-6 h-6"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>');
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: bottom;
  margin-right: 0.5em;
}

.Button.brand {
  border-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-active-text);
  background-color: var(--vp-button-brand-bg);
}

.Button.brand:hover {
  border-color: var(--vp-button-brand-hover-bg);
  color: var(--vp-button-brand-active-text);
  background-color: var(--vp-button-brand-hover-bg);
}

.Button.brand:active {
  border-color: var(--vp-button-brand-active-bg);
  color: var(--vp-button-brand-active-text);
  background-color: var(--vp-button-brand-active-bg);
}

.Button.sponsor {
  border-color: var(--vp-button-sponsor-border);
  color: var(--vp-button-sponsor-text);
  background-color: var(--vp-button-sponsor-bg);
}

.Button.sponsor:hover {
  border-color: var(--vp-button-sponsor-hover-border);
  color: var(--vp-button-sponsor-hover-text);
  background-color: var(--vp-button-sponsor-hover-bg);
}

.Button.sponsor:active {
  border-color: var(--vp-button-sponsor-active-border);
  color: var(--vp-button-sponsor-active-text);
  background-color: var(--vp-button-sponsor-active-bg);
}
</style>
