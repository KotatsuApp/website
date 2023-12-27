import type { DefaultTheme, LocaleConfig } from 'vitepress'
import type { CustomConfig, Theme } from '../theme/types'
import { sections } from '../theme/plugins/section'
import 'dotenv/config'
import { baseHelper } from '../theme/utils'

export const SITE_NAME = 'Kotatsu Website'
export const META_DESCRIPTION = 'Простая и удобная читалка манги с открытым исходным кодом от сообщества и для сообщества, где вы можете найти и читать вашу любимую мангу проще как никогда.'

export const searchLocale: Record<string, Partial<Omit<DefaultTheme.LocalSearchOptions, 'locales'>>> = {
  ru: {
    translations: {
      button: {
        buttonText: 'Поиск',
        buttonAriaLabel: 'Поиск'
      },
      modal: {
        resetButtonTitle: 'Сбросить',
        backButtonTitle: 'Закрыть',
        noResultsText: 'Нет результатов по запросу',
        footer: {
          selectText: 'для выбора',
          selectKeyAriaLabel: 'enter',
          navigateText: 'для навигации',
          navigateUpKeyAriaLabel: 'стрелка вверх',
          navigateDownKeyAriaLabel: 'стрелка вниз',
          closeText: 'закрыть',
          closeKeyAriaLabel: 'escape'
        }
      }
    }
  },
}

export const config: LocaleConfig<Theme.Config> = {
  ru: {
    label: 'Русский',
    lang: 'ru',
    description: META_DESCRIPTION,

    head: [
      ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ],

    themeConfig: {
      nav: getNav(),

      sidebar: {
        "/": defaultSidebar(),
      },

      outline: {
        label: 'На этой странице',
        level: 'deep',
      },

      returnToTopLabel: 'Наверх',
      sidebarMenuLabel: 'Меню',
      darkModeSwitchLabel: 'Тема',
      langMenuLabel: 'Изменить язык',

      lastUpdated: {
        text: 'Последнее обновление',
      },

      docFooter: {
        prev: 'Предыдущая страница',
        next: 'Следующая страница',
      },
      editLink: {
        pattern: 'https://github.com/KotatsuApp/website/edit/main/website/:path',
        text: 'Предложить изменения на этой странице',
      },
      footer: baseHelper(getFooter(), ''),

      sections: sections
    },
  }
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
	return [
		{
            text: "General sections",
			items: [
				{
					text: "Download",
					link: "/download/",
				},
				/* {
					text: "Parsers",
					link: "/parsers/",
				}, */
				{
					text: "Changelogs",
					link: "/changelogs/",
				},
			],
		},
		/* {
			text: "Other projects",
			items: [
				{
					text: "Kotatsu SSIV"
				},
				{
					text: "kotatsu-dl"
				}
			]
		}, */
		{
			text: "Frequently Asked Questions",
			items: [
				{ text: "General", link: "/manuals/faq/general/" },
				{
					text: "Feed",
					link: "/manuals/faq/feed/",
				},
				{
					text: "Explore",
					link: "/manuals/faq/explore/",
					collapsed: true,
					items: [
						{ 
							text: "Sources", 
							link: "/manuals/faq/explore/sources/" 
						},
						/* {
							text: "Local storage",
							link: "/manuals/faq/explore/local-storage",
						}, */
						/* {
							text: "Bookmarks",
							link: "/manuals/faq/explore/bookmarks",
						},
						{
							text: "Random",
							link: "/manuals/faq/explore/random",
						}, */
						{
							text: "Downloads",
							link: "/manuals/faq/explore/downloads/",
						},
						/* {
							text: "Suggestions",
							link: "/manuals/faq/explore/suggestions",
						}, */
					],
				},
				{
					text: "Reader",
					link: "/manuals/faq/reader/",
				},
				{
					text: "Settings",
					link: "/manuals/faq/settings/",
				},
				{
					text: "Miscellaneous",
					link: "/manuals/faq/miscellaneous/"
				}
			],
		},
		{
			text: "Guides",
			items: [
				{
					text: "Getting started",
					link: "/manuals/guides/getting-started/",
				},
				{
					text: "Troubleshooting",
					link: "/manuals/guides/troubleshooting/",
					collapsed: true,
					items: [
						{
							text: "Common issues",
							link: "/manuals/guides/troubleshooting/common-issues/",
						},
						{
							text: "Diagnosis",
							link: "/manuals/guides/troubleshooting/diagnosis/",
						},
					],
				},
				{ text: "Backups", link: "/manuals/guides/backups/" },
				{ text: "Tracking", link: "/manuals/guides/tracking/" },
				{ text: "Categories", link: "/manuals/guides/categories/" },
				{
					text: "Synchronization",
					link: "/manuals/guides/synchronization/"
				}
			],
		},
		{
			text: "For developers",
			items: [
				{
					text: "Contribute",
					link: "/dev/contribute/",
				},
				{
					text: "Parsers library",
					link: "/dev/parsers-library/",
				},
				{
					text: "Synchronization server",
					link: "/dev/sync-server/",
				},
			]
		}
	]
}

function getNav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'v{app_version}',
      activeMatch: "^/*?(download|changelogs)/*?$",
		items: [
			{
				text: "Скачать",
				link: "/ru/download/",
			},
			{
				text: "Чейнджлоги",
				link: "/ru/changelogs/",
			},
		],
    },
    {
		text: "Руководства",
		link: "/ru/manuals/guides/getting-started/",
		activeMatch: "/ru/manuals/",
	},
/* 	{
		text: "Desktop app",
		link: "/desktop/",
		activeMatch: "/desktop/",
	}, */
/* 	{
		text: "News",
		link: "/news/",
		activeMatch: "/news/"
	} */
  ]
}

function getFooter(): CustomConfig['footer'] {
  return {
	qrcodeTitle: 'Чат в Telegram',
	qrcodeMessage: 'Присоеднияйтесь!',
	qrcodeLink: 'https://t.me/kotatsuapp',
	navigation: [
	  {
		title: 'Legal',
		items: [
		  {
		    text: 'Конфиденциальность',
			link: '/ru/privacy/',
		  },
		  {
			text: 'DMCA дисклеймер',
			link: '/ru/dmca/',
		  },
		],
	  },
	],
  }
}