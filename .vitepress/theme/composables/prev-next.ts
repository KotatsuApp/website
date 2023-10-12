import { computed } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type { DocsPageData } from '../plugins/section'
import { useData } from 'vitepress'
import { isActive } from 'vitepress/dist/client/shared'
import { getFlatSideBarLinks } from 'vitepress/dist/client/theme-default/support/sidebar'

export function usePrevNext(): ComputedRef {
  interface Data {
    theme: Ref<any>
    page: Ref<DocsPageData>
    frontmatter: Ref<DocsPageData['frontmatter']>
  }

  const { page, theme, frontmatter }: Data = useData()

  return computed(() => {
    const section = page.value.section

    if (!section) {
      return ''
    }

    const candidates = getFlatSideBarLinks([section])
    const index = candidates.findIndex((link) => isActive(page.value.relativePath, link.link))

    const hidePrev =
      (theme.value.docFooter?.prev === false && !frontmatter.value.prev) ||
      frontmatter.value.prev === false

    const hideNext =
      (theme.value.docFooter?.next === false && !frontmatter.value.next) ||
      frontmatter.value.next === false

    return {
      prev: hidePrev
        ? undefined
        : {
            text: (typeof frontmatter.value.prev === 'string'
              ? frontmatter.value.prev
              : typeof frontmatter.value.prev === 'object'
                  ? frontmatter.value.prev.text
                  : undefined) ??
                candidates[index - 1]?.docFooterText ??
                candidates[index - 1]?.text,
            link: (typeof frontmatter.value.prev === 'object'
              ? frontmatter.value.prev.link
              : undefined) ?? candidates[index - 1]?.link
          },
      next: hideNext
        ? undefined
        : {
            text: (typeof frontmatter.value.next === 'string'
              ? frontmatter.value.next
              : typeof frontmatter.value.next === 'object'
                  ? frontmatter.value.next.text
                  : undefined) ??
                candidates[index + 1]?.docFooterText ??
                candidates[index + 1]?.text,
            link: (typeof frontmatter.value.next === 'object'
              ? frontmatter.value.next.link
              : undefined) ?? candidates[index + 1]?.link
          },
    }
  })
}