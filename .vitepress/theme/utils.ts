import type { DefaultTheme, UserConfig } from 'vitepress'
import type { SectionData, DocsPageData } from './plugins/section'


import { type Translator, translators } from '../../website/translators'
import { Theme } from './types'

const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;

function normalize(path: string) {
  return decodeURI(path).replace(HASH_RE, '').replace(EXT_RE, '');
}

const markdownLinkRegexp = /.md((\?|#).*)?$/

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

export function isObject(value) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

export const isRelativeLink = (link: string) =>
  /^(?!www\.|http[s]?:\/\/|[A-Za-z]:\\|\/\/).*/.test(link)

/**
 * Determine a link is http link or not
 *
 * - http://github.com
 * - https://github.com
 * - //github.com
 */
export const isLinkHttp = (link: string): boolean =>
  /^(https?:)?\/\//.test(link)

/**
 * Determine a link is ftp link or not
 */
export const isLinkFtp = (link: string): boolean => link.startsWith('ftp://')

export const isLinkExternal = (link: string, base = '/'): boolean => {
  // http link or ftp link
  if (isLinkHttp(link) || isLinkFtp(link)) {
    return true
  }

  // absolute link that does not start with `base` and does not end with `.md`
  if (
    link.startsWith('/') &&
    !link.startsWith(base) &&
    !markdownLinkRegexp.test(link)
  ) {
    return true
  }
  return false
}

export function baseHelper(obj, base): any {
  function modifyLink(obj) {
    if (Array.isArray(obj)) {
      return obj.map((item) => modifyLink(item))
    } else if (isObject(obj)) {
      const newObj = {}
      for (let key in obj) {
        if (Array.isArray(obj[key]) || typeof obj[key] === 'object') {
          newObj[key] = modifyLink(obj[key])
        } else if (key === 'link' && isRelativeLink(obj[key])) {
          newObj[key] = base + obj[key]
          if (isLinkExternal(obj[key])) newObj['target'] = '_blank'
        } else {
          newObj[key] = obj[key]
        }
      }
      return newObj
    } else {
      return obj
    }
  }

  function modifyKey(obj) {
    let newObj = {}
    for (let key in obj) {
      if (key.startsWith('/') && base !== '') {
        newObj[base + key] = obj[key]
      } else {
        newObj[key] = obj[key]
      }
    }
    return newObj
  }

  return modifyKey(modifyLink(obj))
}
