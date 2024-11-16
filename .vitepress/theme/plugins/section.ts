import type { DefaultTheme, PageData, SiteConfig } from 'vitepress'
import { ensureStartingSlash, getTranslator,normalizePath, findSidebarPath } from '../utils/index'
import { readFileSync } from 'node:fs'
import { basename } from 'node:path'
import fg from 'fast-glob'
import matter from 'gray-matter'
import { generateSidebarItem, getTitleFromContent } from './sidebar'
import type { Translator } from '../../../website/translators'

export interface SectionData {
  path: string
  link: string
  title: string
  titleLower: string
  description?: string
  text?: string
  translator?: Translator
  logo?: string
  dependencies?: string[]
  categories?: string[]
  repository?: string
  items?: DefaultTheme.SidebarItem[]
}

export interface DocsPageData extends PageData {
  section?: SectionData
  breadcrumbs?: DefaultTheme.SidebarItem[]
}

const paths = [
  'website/manuals/*.md',
  '!website/manuals/index.md',
  '!website/manuals/faq/*/index.md',
  '!website/manuals/guides/*/index.md',
]

export const sections: SectionData[] = fg
  .sync(paths)
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
    const section: SectionData = {
      path: filePath,
      link: ensureStartingSlash(normalizePath(filePath)),
      repository,
      title,
      titleLower: title.toLowerCase(),
      text: title,
      description,
      logo,
      dependencies: Array.isArray(dependencies) ? dependencies : Array(dependencies),
      categories: Array.isArray(categories) ? categories : Array(categories),
      translator: getTranslator(translator),
    }

    if (items) {
      section.items = generateSidebarItem(items, section.link)
    }

    return section
  })
  .sort((a, b) => (a.text && b.text) ? a.text.localeCompare(b.text) : 0)

export function prepareData (pageData: DocsPageData, siteConfig: SiteConfig): DocsPageData  {
  const section = sections.find(section => pageData.relativePath.startsWith(section.path.replace(/index\.md$/, '')))

  pageData.section = section
  pageData.breadcrumbs = findSidebarPath(pageData, siteConfig.userConfig)

  pageData.title = !pageData.frontmatter.title && pageData.breadcrumbs.length
    ? pageData.breadcrumbs.map(item => item.text).reverse().join(siteConfig.userConfig.themeConfig.titleSeparator)
    : pageData.title

  if (
    section
    && !pageData.description
    && pageData.section.description
  ) {
    pageData.description = pageData.section.description
  }

  return pageData
}
