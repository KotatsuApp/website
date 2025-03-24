import 'glightbox/dist/css/glightbox.css'

import {
  watch,
  type App,
} from 'vue'
import type { Router } from 'vitepress'

export const glightboxSymbol = Symbol('glightbox')

export async function createZoom(app: App, router: Router) {
  if (import.meta.env.SSR) {
    return
  }

  const GLightbox = await import('glightbox')

  const lightbox = GLightbox.default({
    openEffect: 'fade',
    closeEffect: 'fade',
    zoomable: true,
    skin: 'white',
    svg: {
      close: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17,17.8c-0.2,0-0.4-0.1-0.6-0.2L12,13.1l-4.4,4.4c-0.3,0.3-0.8,0.3-1.1,0c-0.3-0.3-0.3-0.8,0-1.1l4.4-4.4L6.4,7.6 c-0.3-0.3-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0l4.4,4.4l4.4-4.4c0.3-0.3,0.8-0.3,1.1,0c0.2,0.2,0.2,0.4,0.2,0.6s-0.1,0.4-0.2,0.6 L13.1,12l4.4,4.4c0.3,0.3,0.3,0.8,0,1.1C17.4,17.7,17.2,17.8,17,17.8z"/></svg>',
      next: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9,18.8c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.3-0.3-0.8,0-1.1l5.5-5.5L8.5,6.5c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l6,6 c0.3,0.3,0.3,0.8,0,1.1l-6,6C9.4,18.7,9.2,18.8,9,18.8z"/></svg>',
      prev: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15,18.8c-0.2,0-0.4-0.1-0.5-0.2l-6-6c-0.3-0.3-0.3-0.8,0-1.1l6-6c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1L10.1,12l5.5,5.5 c0.3,0.3,0.3,0.8,0,1.1C15.4,18.7,15.2,18.8,15,18.8z"/></svg>',
    },
  })

  lightbox.reload = () => {
    const elements = Array.from(document.querySelectorAll('.vp-doc img'))
      .map((element, index) => {
        const target = element.parentElement instanceof HTMLAnchorElement ? element.parentElement : element
        target.addEventListener('click', (e) => {
          e.preventDefault()
          lightbox.openAt(index)
        })

        const href = target.getAttribute(target instanceof HTMLAnchorElement ? 'href' : 'src')
        const title = element.getAttribute('alt')

        return {
          href,
          title,
          type: 'image',
        }
      })

    lightbox.setElements(elements)
  }

  const scrollWidth = window.innerWidth - document.documentElement.clientWidth

  lightbox.on('open', () => updateFixedElements(scrollWidth))
  lightbox.on('close', () => updateFixedElements())

  app.provide(glightboxSymbol, lightbox)

  watch(
    () => router.route.data.relativePath,
    () => setTimeout(() => {
      lightbox.reload()
    }),
    { immediate: true }
  )
}

function updateFixedElements(scrollWidth?: number) {
  document.documentElement.style.setProperty('--scrollbar-width', scrollWidth ? `${scrollWidth}px` : '')
}
