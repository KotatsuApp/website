import { type Router, inBrowser, useData } from 'vitepress'
import { type App, watchEffect } from 'vue'
import { createZoom } from './composables/zoom'
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client"
import initializeAnalytics from "./plugins/analytics"
import DefaultTheme from 'vitepress/theme-without-fonts'
import Layout from './components/Layout.vue'
import './styles/global.css'
import './styles/glightbox.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: Layout,
  setup() {
    const { lang } = useData()
    watchEffect(() => {
      if (inBrowser) {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
      }
    })
  },
  enhanceApp({ app, router }: { app: App, router: Router }) {
    enhanceAppWithTabs(app)
    createZoom(app, router)
    initializeAnalytics("G-X37JGMJE4R")
  },
}
