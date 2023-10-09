import type { DefaultTheme, PageData, SiteConfig } from 'vitepress'
import { normalize } from 'vitepress/dist/client/shared'
import { ensureStartingSlash, getTranslator } from '../utils'

import { readFileSync } from 'fs'
import { basename } from 'path'
import fg from 'fast-glob'
import matter from 'gray-matter'

import { generateSidebarItem, getTitleFromContent } from './sidebar'

import type { Translator } from '../../../website/translators'
import { findPath } from '../utils'

export interface ComponentData {
  path: string
  link: string
  title: string
  titleLower: string
  description?: string

  text?: string
  translator?: Translator
  logo?: string
  dependencies?: Array<string>
  categories?: Array<string>

  repository?: string

  items?: DefaultTheme.SidebarItem[]
}

export interface DocsPageData extends PageData {
  component?: ComponentData
  breadcrumbs?: DefaultTheme.SidebarItem[]
}

export const components: ComponentData[] = fg
  .sync([
    'website/manuals/faq/explore/*.md',
    '!website/manuals/faq/explore/index.md',
  ])
  .map(file => {
    const content = readFileSync(file, 'utf-8')
    const { data } = matter(content)
    const {
      title = getTitleFromContent(content) || basename(file),
      translator,
      logo,
      categories = [],
      dependencies = [],
      items,
      repository,
      description,
    } = data

    const filePath = file.substring(file.indexOf('/') + 1)
    const component: ComponentData = {
      path: filePath,
      link: ensureStartingSlash(normalize(filePath)),
      repository,
      title,
      titleLower: title.toLowerCase(),
      text: title,
      description,
      logo,
      dependencies: Array.isArray(dependencies) ? dependencies : Array(dependencies),
      categories: Array.isArray(categories) ? categories : Array(categories),
    }

    component.translator = getTranslator(translator)

    if (items) {
      component.items = generateSidebarItem(items, component.link)
    }

    return component
  })
  .sort((a, b) => (a.text && b.text) ? a.text.localeCompare(b.text) : 0)

export default class DocsComponent {
  static prepareData(
    pageData: DocsPageData,
    siteConfig: SiteConfig,
  ): DocsPageData {
    const component = components.find(component => pageData.relativePath.startsWith(component.path.replace(/index\.md$/, '')))

    pageData.component = component
    pageData.breadcrumbs = findPath(pageData, siteConfig.userConfig)

    pageData.title = !pageData.frontmatter.title && pageData.breadcrumbs.length
        ? pageData.breadcrumbs.map(item => item.text).reverse().join(siteConfig.userConfig.themeConfig.titleSeparator)
        : pageData.title

    if (
      component
      && !pageData.description
      && pageData.component.description
    ) {
      pageData.description = pageData.component.description
    }

    return pageData
  }
}

export { DocsComponent }

export const { prepareData } = DocsComponent