<script lang="ts" setup>
import { useScrollLock } from '@vueuse/core'
import { ref, watch, computed } from 'vue'
import { type DefaultTheme, useRoute, useData, inBrowser } from 'vitepress'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar'
import VPSidebarItem from 'vitepress/dist/client/theme-default/components/VPSidebarItem.vue'

const { sidebar: flatSidebar, sidebarGroups, hasSidebar } = useSidebar()
const route = useRoute()

const sidebar = computed<DefaultTheme.SidebarItem[]>(() => {
  return route.path.includes('/components/') ? flatSidebar.value : sidebarGroups.value
})

const props = defineProps<{
  open: boolean
}>()

// a11y: focus Nav element when menu has opened
const navEl = ref<HTMLElement | null>(null)
const isLocked = useScrollLock(inBrowser ? document.body : null)

watch(
  [props, navEl],
  () => {
    if (props.open) {
      isLocked.value = true
      navEl.value?.focus()
    } else isLocked.value = false
  },
  { immediate: true, flush: 'post' }
)

const { lang } = useData()
const activeLinkEl = ref<HTMLElement | null>(null)
const activeGroupEl = ref<HTMLElement | null>(null)

watch(() => route.path, () => {
  if (!route.path.includes('/components/')) {
    return
  }

  if (!navEl.value) {
    return
  }

  activeLinkEl.value = navEl.value.querySelector<HTMLElement>(`a[href="${route.path}"]`)
  activeGroupEl.value = activeLinkEl.value.closest<HTMLElement>('.VPSidebarItem.level-0')

  const offset = Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height')) * 2

  if (!isInViewport(activeGroupEl.value, offset)) {
    navEl.value.scrollTo({
      top: activeGroupEl.value.offsetTop - offset
    })
  }
}, { flush: 'post' })

// tmp fix vitepress bug
watch(lang, () => activeGroupEl.value && activeGroupEl.value.classList.remove('collapsed'), { flush: 'post' })

function isInViewport(el: HTMLElement, offset: number) {
  const { top, bottom } = el.getBoundingClientRect()
  const { innerHeight } = window
  return top >= offset && bottom <= offset + innerHeight
};
</script>

<template>
  <aside
    v-if="hasSidebar"
    class="VPSidebar"
    :class="{ open }"
    ref="navEl"
    @click.stop
  >
    <div class="curtain" />

    <nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1">
      <span class="visually-hidden" id="sidebar-aria-label">
        Sidebar Navigation
      </span>

      <slot name="sidebar-nav-before" />

      <div
        v-for="item in sidebar"
        :key="item.text"
        class="group"
      >
        <VPSidebarItem :item="item" :depth="0" :class="{ landing: !item.items }" />
      </div>

      <slot name="sidebar-nav-after" />
    </nav>
  </aside>
</template>

<style scoped>
.VPSidebar {
  position: fixed;
  top: var(--vp-layout-top-height, 0px);
  bottom: 0;
  left: 0;
  z-index: var(--vp-z-index-sidebar);
  padding: 32px 32px 96px;
  width: calc(100vw - 64px);
  max-width: 320px;
  background-color: var(--vp-sidebar-bg-color);
  opacity: 0;
  box-shadow: var(--vp-shadow-3);
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: opacity 0.5s, transform 0.25s ease;
  overscroll-behavior: contain;
}

.VPSidebar.open {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
  transition: opacity 0.25s,
  transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.dark .VPSidebar {
  box-shadow: var(--vp-shadow-1);
}

@media (min-width: 960px) {
  .VPSidebar {
    z-index: 1;
    padding-top: var(--vp-nav-height);
    padding-bottom: 128px;
    width: var(--vp-sidebar-width);
    max-width: 100%;
    background-color: var(--vp-sidebar-bg-color);
    opacity: 1;
    visibility: visible;
    box-shadow: none;
    transform: translateX(0);
  }
}

@media (min-width: 1440px) {
  .VPSidebar {
    padding-left: max(32px, calc((100% - (var(--vp-layout-max-width) - 64px)) / 2));
    width: calc((100% - (var(--vp-layout-max-width) - 64px)) / 2 + var(--vp-sidebar-width) - 32px);
  }
}

@media (min-width: 960px) {
  .curtain {
    position: sticky;
    top: -64px;
    left: 0;
    z-index: 1;
    margin-top: calc(var(--vp-nav-height) * -1);
    margin-right: -32px;
    margin-left: -32px;
    height: var(--vp-nav-height);
    background-color: var(--vp-sidebar-bg-color);
  }
}

.nav {
  outline: 0;
}

.group + .group {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 10px;
}

@media (min-width: 960px) {
  .group {
    padding-top: 10px;
    width: calc(var(--vp-sidebar-width) - 64px);
  }
}

.landing :deep(.VPLink .text) {
  font-weight: normal;
}
</style>
