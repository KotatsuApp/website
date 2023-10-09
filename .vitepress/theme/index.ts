import { type Router, inBrowser } from 'vitepress'
import { type App, watch, defineComponent } from 'vue'
import { createZoom } from './composables/zoom'
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client"
import analytics from "./plugins/analytics"
import DefaultTheme from 'vitepress/theme-without-fonts'
import Layout from './components/Layout.vue'
import './styles/global.css'
import './styles/glightbox.css'

export default {
  extends: DefaultTheme,
  Layout: Layout,

  enhanceApp({ app, router }: { app: App, router: Router }) {
    enhanceAppWithTabs(app)
    createZoom(app, router)
    analytics({ id: "G-X37JGMJE4R" })
    if (
      import.meta.env.PROD &&
      inBrowser
    ) {
      watch(
        () => router.route.data.relativePath,
        (_path, oldPath) => {
          if (!oldPath) { // Skip initial change
            return
          }
        }
      )
    }
  },
}