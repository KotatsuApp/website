const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;

export function normalizePath(path: string) {
  return decodeURI(path).replace(HASH_RE, '').replace(EXT_RE, '');
}

export function ensureStartingSlash(path: string): string {
  return /^\//.test(path) ? path : `/${path}`
}

import { isExternalUrl, isPlainObject, isRelativeUrl } from '../utils'

/**
 * Resolve base url for sidebar items
 */
export function resolveBaseUrl(obj: Record<string, unknown>, base: string) {
  function modifyLink(obj: unknown) {
    if (Array.isArray(obj)) {
      return obj.map((item) => modifyLink(item))
    }
    if (isPlainObject(obj)) {
      const newObj: Record<string,unknown> = {}
      for (const key in obj) {
        if (Array.isArray(obj[key]) || typeof obj[key] === 'object') {
          newObj[key] = modifyLink(obj[key])
        } else if (key === 'link' && isRelativeUrl(obj[key] as string)) {
          newObj[key] = base + obj[key]
          if (isExternalUrl(obj[key])) newObj.target = '_blank'
        } else {
          newObj[key] = obj[key]
        }
      }
      return newObj
    }

    return obj
  }

  function modifyKeys(obj: Record<string, unknown>) {
    const newObj: Record<string,unknown> = {}
    for (const key in obj) {
      if (key.startsWith('/') && base !== '') {
        newObj[base + key] = obj[key]
      } else {
        newObj[key] = obj[key]
      }
    }
    return newObj
  }

  return modifyKeys(modifyLink(obj))
}
