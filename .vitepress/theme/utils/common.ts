const markdownLinkRegexp = /.md((\?|#).*)?$/

export function isPlainObject(value: unknown): value is Record<string, unknown> {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

export const isRelativeUrl = (link: string) =>
  /^(?!www\.|http[s]?:\/\/|[A-Za-z]:\\|\/\/).*/.test(link)

/**
 * Determine a link is http link or not
 *
 * - http://github.com
 * - https://github.com
 * - //github.com
 */
export const isHttpUrl = (link: string) =>
  /^(https?:)?\/\//.test(link)

/**
 * Determine a link is ftp link or not
 */
export const isFtpUrl = (link: string) => link.startsWith('ftp://')

export const isExternalUrl = (link: string, base = '/'): boolean => {
  // http link or ftp link
  if (isHttpUrl(link) || isFtpUrl(link)) {
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

export function truncateWithElipsis(
  string = '',
  length = 0,
  etc = '...'
): string {
  return string.length <= length ? string : string.substring(0, length) + etc;
}
