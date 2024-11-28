import { type Ref, computed } from 'vue'
import type { DefaultTheme, SiteData } from 'vitepress'
import type { DocsPageData } from '../plugins/section'
import { useData } from 'vitepress'
import { ensureStartingSlash } from '../utils'
import { getFlatSideBarLinks } from 'vitepress/dist/client/theme-default/support/sidebar'

interface Data {
  site: Ref<SiteData>
  localeIndex: Ref<string>
  page: Ref<DocsPageData>
  theme: Ref<DefaultTheme.Config>
}

export function useLangs({
  removeCurrent = true,
  correspondingLink = false
} = {}) {
  const { site, localeIndex, page, theme }: Data = useData()
  const currentLang = computed(() => ({
    label: site.value.locales[localeIndex.value]?.label,
    link:
      site.value.locales[localeIndex.value]?.link ||
      (localeIndex.value === 'root' ? '/' : `/${localeIndex.value}/`)
  }))

  const localeLinks = computed(() =>
    Object.entries(site.value.locales).flatMap(([key, value]) => {
      if (removeCurrent && currentLang.value.label === value.label) {
        return []
      }

      const text = value.label
      const rootLink = value.link || (key === 'root' ? '/' : `/${key}/`)
      const link = normalizeLink(
        rootLink,
        theme.value.i18nRouting !== false && correspondingLink,
        page.value.relativePath.slice(currentLang.value.link.length - 1),
        !site.value.cleanUrls
      )

      if (
        link === '/' ||
        Object.entries(site.value.locales).some(([key]) => link.replace(/^\//, '').replace(/\/$/, '') === key)
      ) {
        return {
          text,
          link
        }
      }

      const { themeConfig } = site.value.locales[key]
      const { nav, sidebar } = themeConfig

      for (const item of nav) {
        if (Object.prototype.hasOwnProperty.call(item, 'link') && item.link === link) {
          return {
            text,
            link
          }
        }
      }

      for (const data of Object.values(sidebar)) {
        const flatSidebar = getFlatSideBarLinks(data)

        for (const item of flatSidebar) {
          if (item.link === link) {
            return {
              text,
              link
            }
          }
        }
      }

      if (!page.value.section) {
        return {
          text: value.label,
          link: rootLink,
        }
      }

      const section = themeConfig.sections.find(section => section.title === page.value.section.title)
      if (!section) {
        return {
          text: value.label,
          link: rootLink,
        }
      }

      return {
        text,
        link: section.link
      }
    }
  ))

  return { localeLinks, currentLang }
}

function normalizeLink(
  link: string,
  addPath: boolean,
  path: string,
  addExt: boolean
): string {
  return addPath
      ? link.replace(/\/$/, '') +
          ensureStartingSlash(path
              .replace(/(^|\/)?index.md$/, '$1')
              .replace(/\.md$/, addExt ? '.html' : ''))
      : link
}
