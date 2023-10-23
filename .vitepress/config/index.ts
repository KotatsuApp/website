import type { Theme } from '../theme/types'
import { defineConfigWithTheme } from 'vitepress'
import { config as ru, searchLocale as searchLocaleRu } from './ru'
import { config as root, searchLocale as searchLocaleEn } from './en'
import { config as ua, searchLocale as searchLocaleUa } from './ua'
import { addPlugins } from '../theme/plugins/markdown'
import { sections, prepareData } from '../theme/plugins/section'
import { slugify } from 'transliteration'
import { fileURLToPath, URL } from 'node:url'
import { telegram } from '../../website/icons'
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs"
import pluginRewriteAll from 'vite-plugin-rewrite-all';

import shortcode_plugin from "markdown-it-shortcode-tag"
import shortcodes from "./shortcodes"

import generateOgImages from "./hooks/generateOgImages"
import generateMeta from "./hooks/generateMeta"
import Unocss from 'unocss/vite'

const SITE_HOST = 'https://kotatsu.app'
const SITE_TITLE = 'kotatsu.app'
const SITE_TITLE_SEPARATOR = ' / '

export default defineConfigWithTheme<Theme.Config>({
  lastUpdated: true,
  cleanUrls: true,

  title: SITE_TITLE,
  titleTemplate: ':title' + SITE_TITLE_SEPARATOR + SITE_TITLE,
  srcDir: './website',

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },

    anchor: {
      slugify(str) {
        str = str.trim()
            .replace(/^\d*/g, '') // Удаление чисел из начала строки
            .replace(/[^a-zA-Zа-яА-ЯЁё0-9\-\s]/g, '') // Удаление ненужных символов
            .replace(/\s\-\s/, '-').replace(/\-+/g, '-') // Избавление от повторяющихся символов
            .replace(/^(.{25}[^\s]*).*/, '$1') // Ограничение количества символов

        return encodeURIComponent(slugify(str, { lowercase: true }))
      }
    },

    config (md) {
      addPlugins(md)
      md.use(tabsMarkdownPlugin)
      md.use(pluginRewriteAll)
      md.use(shortcode_plugin, shortcodes)
    },
  },

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap' }],

    ['link', { rel: 'icon', href: '/favicon.ico?v=2', sizes: 'any' }],
    ['link', { rel: 'icon', href: '/logo-compact.svg?v=2', type: 'image/svg+xml' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png?v=2' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],

    ["meta", { name: "al:android:url", content: "kotatsu://manga" }],
	  ["meta", { name: "al:android:app_name", content: "Kotatsu" }],
	  ["meta", { name: "al:android:package", content: "org.koitharu.kotatsu" }]
  ],

  themeConfig: {
    titleSeparator: SITE_TITLE_SEPARATOR,
    i18nRouting: true,

    logo: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
    },

    socialLinks: [
      {
        icon: { svg: telegram },
        link: 'https://t.me/kotatsuapp',
      },
      { icon: 'github', link: 'https://github.com/KotatsuApp/Kotatsu' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          ...searchLocaleEn,
          ...searchLocaleRu,
          ...searchLocaleUa,
        },
      },
    },

    sections
  },

  locales: {
    ...root,
    ...ru,
    ...ua,
  },

  transformPageData(pageData, { siteConfig }) {
    return prepareData(pageData, siteConfig)
  },

  transformHead: async (context) => generateMeta(context, SITE_HOST),

  vite: {
    resolve: {
      alias: [
        'VPSidebar',
        'VPNavBarTranslations',
        'VPNavScreenTranslations',
        'VPNavBar',
        'VPNavBarMenu',
        'VPNavScreenMenu',
        'VPFooter',
      ].map(componentName => ({
        find: new RegExp(`^.*\/${componentName}\.vue$`),
        replacement: fileURLToPath(
          new URL(`../theme/components/${componentName.replace(/^VP/, '')}.vue`, import.meta.url)
        )
      })),
    },
    plugins: [
      Unocss(),
    ]
  },

  sitemap: {
    hostname: SITE_HOST,
  },

  buildEnd: async (context) => {
    generateOgImages(context)
  }
})