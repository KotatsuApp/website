import type { DefaultTheme } from 'vitepress'

import { readFileSync } from 'node:fs'
import { join, basename } from 'node:path'
import fg from 'fast-glob'
import matter from 'gray-matter'

const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;

function normalize(path: string) {
  return decodeURI(path).replace(HASH_RE, '').replace(EXT_RE, '');
}

declare interface Options {
  root: string | Array<string>
  ignore?: Array<string>
  collapsed?: boolean
}

export default class Sidebar {
  static generateSidebar(
    options: Options
  ): DefaultTheme.SidebarItem[] {
    const entries = fg.sync(options.root, options)

    return entries
      .map(path => Sidebar.getData(path, options))
      .sort((a, b) => (a.text && b.text) ? a.text.localeCompare(b.text) : 0)
  }

  static generateSidebarItem(
    items: DefaultTheme.SidebarItem[],
    path: string,
  ): DefaultTheme.SidebarItem[] {
    items = items.map(({ text, link, items }) => {
      const item: DefaultTheme.SidebarItem = { text }

      if (link) {
        item.link = join(path, link).replace(/\\/g, '/')
      }

      if (items) {
        item.collapsed = true
        item.items = Sidebar.generateSidebarItem(items, path)
      }

      return item
    })

    return items
  }

  static getData(
    path: string,
    options?: Partial<Options>
  ): DefaultTheme.SidebarItem {
    const src = readFileSync(path, 'utf-8')
    const { data } = matter(src)
    const {
      title = Sidebar.getTitleFromContent(src) || basename(path),
      items,
    } = data

    const link = normalize(path.replace(/^website/, ''))

    const output: DefaultTheme.SidebarItem = {
      text: title,
      link,
    }

    if (items) {
      output.collapsed = options.collapsed === null || options.collapsed === undefined || options.collapsed
      output.items = Sidebar.generateSidebarItem(items, link)
    }

    return output
  }

  static getTitleFromContent(
    content: string,
  ): string | undefined {
    const lines = content.split('\n')
    for (let i = 0, len = lines.length; i < len; i += 1) {
      let str = lines[i].toString().replace('\r', '')
      if (str.indexOf('# ') !== -1) {
        str = str.replace('# ', '')
        return str
      }
    }

    return
  }
}

export { Sidebar }

export const {
  generateSidebar,
  generateSidebarItem,
  getTitleFromContent
} = Sidebar
