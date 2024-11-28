import type { DefaultTheme } from 'vitepress'
import { readFileSync } from 'node:fs'
import { join, basename } from 'node:path'
import fg from 'fast-glob'
import matter from 'gray-matter'
import { normalizePath } from '../utils'

declare interface Options {
  root: string | string[];
  ignore?: string[];
  collapsed?: boolean;
}

export function generateSidebar(
  options: Options
): DefaultTheme.SidebarItem[] {
  return fg.sync(options.root, options)
    .map(path => this.getData(path, options))
    .sort((a, b) => a.text?.localeCompare(b.text) || 0)
}

export function generateSidebarItem(
  sidebarItems: DefaultTheme.SidebarItem[],
  path: string,
): DefaultTheme.SidebarItem[] {
  return sidebarItems.map(({ text, link, items }) => {
    const item: DefaultTheme.SidebarItem = { text }

    if (link) {
      item.link = join(path, link).replace(/\\/g, '/')
    }

    if (items) {
      item.collapsed = true
      item.items = generateSidebarItem(items, path)
    }

    return item
  })
}

export function getData(
  path: string,
  options?: Partial<Options>
): DefaultTheme.SidebarItem {
  const src = readFileSync(path, 'utf-8')
  const { data } = matter(src)
  const {
    title = this.getTitleFromContent(src) || basename(path),
    items,
  } = data

  const link = normalizePath(path.replace(/^website/, ''))

  const output: DefaultTheme.SidebarItem = {
    text: title,
    link,
  }

  if (items) {
    output.collapsed = options.collapsed === null || options.collapsed === undefined || options.collapsed
    output.items = generateSidebarItem(items, link)
  }

  return output
}

export function getTitleFromContent(
  content: string,
): string | undefined {
  return content.split("\n")
    .map(line => line.trim())
    .find(line => line.startsWith('# '))
    ?.slice(2)
}
