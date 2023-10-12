import type { DefaultTheme, UserConfig } from 'vitepress'
import type { SectionData, DocsPageData } from './plugins/section'
import { normalize } from 'vitepress/dist/client/shared'

import { type Translator, translators } from '../../website/translators'
import { Theme } from './types'

export function findPath(
  pageData: DocsPageData,
  config: UserConfig,
): DefaultTheme.SidebarItem[] {
  let searchable = normalize(pageData.relativePath)

  const localeLinks = Object.entries(config.locales).flatMap(([key]) => ({ key, link: key === 'root' ? '/' : `${key}/` }))
  if (localeLinks.some(({ link }) => link === searchable)) return []

  const locale = localeLinks.find(locale => locale.link.startsWith(searchable.replace(/(^.*?\/).*$/, '$1'))) || localeLinks[0]
  searchable = ensureStartingSlash(searchable)
  const localeConfig: Theme.Config = config.locales[locale.key].themeConfig
  const root = localeConfig.nav.find(item => {
    if (!('link' in item)) {
      return false
    }
    const tmp = locale.link === '/' ? item.link.replace(/(^\/.*?\/).*$/, '$1') : item.link.replace(/(^\/.*?\/)(.*?\/).*$/, '$1$2')
    return searchable.startsWith(tmp)
  })
  const path: DefaultTheme.SidebarItem[] = []
  if (root && ('link' in root)) {
    path.push({ text: root.text, link: root.link })
  }

  let tree: DefaultTheme.SidebarItem | SectionData

  if (pageData.section) {
    const { title, link, items } = pageData.section
    tree = pageData.section
    path.push({ text: title, link, items })
  } else {
    const sidebar = Object.entries(localeConfig.sidebar).find(([link]) => searchable.startsWith(link))
    if (sidebar) tree = sidebar[1]
  }

  if (!tree) return path

  const keyExists = (tree) => {
    if (!tree || (typeof tree !== 'object' && !Array.isArray(tree.items) && !Array.isArray(tree))) {
      return false
    }
    else if (tree.hasOwnProperty('link') && ensureStartingSlash(tree.link) === searchable) {
      return true
    }
    else if (Array.isArray(tree)) {
      for (let i = 0; i < tree.length; i++) {
        const item = tree[i]
        path.push(item)
        const result = keyExists(item)
        if (result) {
          return result
        }

        path.pop()
      }
    }
    else if (Array.isArray(tree.items)) {
      for (let i = 0; i < tree.items.length; i++) {
        const item = tree.items[i]
        path.push(item)
        const result = keyExists(item)
        if (result) {
          return result
        }

        path.pop()
      }
    }

    return false
  }

  keyExists(tree)

  return path
}

export function ellipsis(
  string: string = '',
  length: number = 0,
  etc: string = '...'
): string {
  if (string.length <= length) {
    return string
  }

  return string.substring(0, length) + (string.length > length ? etc : '')
}

export function ensureStartingSlash(path: string): string {
  return /^\//.test(path) ? path : `/${path}`
}

export function getTranslator(translator: string): Translator | undefined {
  if (!translator) {
    return
  }

  if (!Object.prototype.hasOwnProperty.call(translators, translator)) {
    return
  }

  return translators[translator]
}