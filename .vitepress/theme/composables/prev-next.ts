import { computed } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type { DocsPageData } from '../plugins/section'
import { useData } from 'vitepress'
import { isActive } from 'vitepress/dist/client/shared'
import { getFlatSideBarLinks } from 'vitepress/dist/client/theme-default/support/sidebar'

interface Data {
  theme: Ref<any>
  page: Ref<DocsPageData>
  frontmatter: Ref<DocsPageData['frontmatter']>
}

export function usePrevNext(): ComputedRef {
  const { page, theme, frontmatter }: Data = useData()

  return computed(() => {
    const section = page.value.section

    if (!section) {
      return ''
    }

    const candidates = getFlatSideBarLinks([section])
    const index = candidates.findIndex((link) => isActive(page.value.relativePath, link.link))

    const { prev: frontPrev, next: frontNext } = frontmatter.value
    const { docFooter } = theme.value

    const hidePrev =
      (docFooter?.prev === false && !frontPrev) ||
      frontPrev === false

    const hideNext =
      (docFooter?.next === false && !frontNext) ||
      frontNext === false

    const getNavLink = (type: "prev" | "next", offset: number) => {
      const frontLink = type === 'prev' ? frontPrev : frontNext
      const candidate = candidates.at(index + offset)

      return {
        text: typeof frontLink === 'string'
          ? frontLink
          : frontLink?.text ?? candidate?.docFooterText ?? candidate?.text,
        link: frontLink?.link ?? candidate?.link
      }
    }

    return {
      prev: hidePrev ? undefined : getNavLink("prev", -1),
      next: hideNext ? undefined: getNavLink("next", 1)
    }
  })
}
