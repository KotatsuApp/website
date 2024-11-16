import type { DefaultTheme, UserConfig } from 'vitepress'
import { ensureStartingSlash, normalizePath } from '../utils/index'
import type { DocsPageData, SectionData } from '../plugins/section'
import type { Theme } from '../types'

function findRoot(localeConfig: Theme.Config, searchable: string, localeLink: string) {
  return localeConfig.nav.find(item => {
    if (!('link' in item)) return false
    const tmp = localeLink === '/'
      ? item.link.replace(/(^\/.*?\/).*$/, '$1')
      : item.link.replace(/(^\/.*?\/)(.*?\/).*$/, '$1$2')
    return searchable.startsWith(tmp)
  })
}

export function findSidebarPath(
  pageData: DocsPageData,
  config: UserConfig,
): DefaultTheme.SidebarItem[] {
  let searchable = normalizePath(pageData.relativePath)

  const localeLinks = Object.entries(config.locales).flatMap(([key]) => ({ key, link: key === 'root' ? '/' : `${key}/` }))
  if (localeLinks.some(({ link }) => link === searchable)) return []

  const locale = localeLinks.find(locale => locale.link.startsWith(searchable.replace(/(^.*?\/).*$/, '$1'))) || localeLinks[0]

  searchable = ensureStartingSlash(searchable)
  const localeConfig: Theme.Config = config.locales[locale.key].themeConfig
  const root = findRoot(localeConfig, searchable, locale.link)

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

    if (tree.hasOwnProperty('link') && ensureStartingSlash(tree.link) === searchable) {
      return true
    }

    const items = Array.isArray(tree.items) ? tree.items : Array.isArray(tree) ? tree : []
    for (const item of items) {
      path.push(item)
      if (keyExists(item)) return true
      path.pop()
    }

    return false
  }

  keyExists(tree)

  return path
}
