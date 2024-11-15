import type { DefaultTheme, PageData, SiteConfig } from 'vitepress'
import { ensureStartingSlash, getTranslator } from '../utils'

const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;

function normalize(path: string) {
  return decodeURI(path).replace(HASH_RE, '').replace(EXT_RE, '');
}

import { readFileSync } from 'fs'
import { basename } from 'path'
import fg from 'fast-glob'
import matter from 'gray-matter'

import { generateSidebarItem, getTitleFromContent } from './sidebar'

import type { Translator } from '../../../website/translators'
import { findPath } from '../utils'

export interface SectionData {
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
  section?: SectionData
  breadcrumbs?: DefaultTheme.SidebarItem[]
}

export const sections: SectionData[] = fg
  .sync([
    'website/manuals/*.md',
    '!website/manuals/index.md',
    '!website/manuals/faq/*/index.md',
    '!website/manuals/guides/*/index.md',

    'website/ua/manuals/*.md',
    '!website/ua/manuals/index.md',
    '!website/ua/manuals/faq/*/index.md',
    '!website/ua/manuals/guides/*/index.md',

    'website/ru/manuals/*.md',
    '!website/ru/manuals/index.md',
    '!website/ru/manuals/faq/*/index.md',
    '!website/ru/manuals/guides/*/index.md',
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
    const section: SectionData = {
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

    section.translator = getTranslator(translator)

    if (items) {
      section.items = generateSidebarItem(items, section.link)
    }

    return section
  })
  .sort((a, b) => (a.text && b.text) ? a.text.localeCompare(b.text) : 0)

export default class DocsSection {
  static prepareData(
    pageData: DocsPageData,
    siteConfig: SiteConfig,
  ): DocsPageData {
    const section = sections.find(section => pageData.relativePath.startsWith(section.path.replace(/index\.md$/, '')))

    pageData.section = section
    pageData.breadcrumbs = findPath(pageData, siteConfig.userConfig)

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
}

export { DocsSection }

export const { prepareData } = DocsSection
