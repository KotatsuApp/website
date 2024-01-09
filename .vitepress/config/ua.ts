import type { DefaultTheme, LocaleConfig } from 'vitepress'
import type { CustomConfig, Theme } from '../theme/types'
import { sections } from '../theme/plugins/section'
import 'dotenv/config'
import { baseHelper } from '../theme/utils'

export const SITE_NAME = 'Kotatsu Website'
export const META_DESCRIPTION = 'Простий і зручний додаток для читання манґи з відкритим вихідним кодом від спільноти і для спільноти, за допомогою якого ви можете знайти і прочитати свою улюблену манґу простіше, ніж будь-коли.'

export const searchLocale: Record<string, Partial<Omit<DefaultTheme.LocalSearchOptions, 'locales'>>> = {
  ua: {
    translations: {
      button: {
        buttonText: 'Пошук',
        buttonAriaLabel: 'Пошук'
      },
      modal: {
        resetButtonTitle: 'Очистити пошук',
        backButtonTitle: 'Закрити пошук',
        noResultsText: 'Немає результатів за запитом',
        footer: {
          selectText: 'для вибору',
          selectKeyAriaLabel: 'enter',
          navigateText: 'для навігації',
          navigateUpKeyAriaLabel: 'стрілка вгору',
          navigateDownKeyAriaLabel: 'стрілка вниз',
          closeText: 'закрити',
          closeKeyAriaLabel: 'escape'
        }
      }
    }
  },
}

export const config: LocaleConfig<Theme.Config> = {
  ua: {
    label: 'Українська',
    lang: 'ua',
    description: META_DESCRIPTION,

    head: [
      ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ],

    themeConfig: {
      nav: getNav(),

      sidebar: {
        "/ua/": defaultSidebar(),
      },

      outline: {
        label: 'На цій сторінці',
        level: 'deep',
      },

      docFooter: {
        prev: 'Попередня сторінка',
        next: 'Наступна сторінка',
      },
      editLink: {
        pattern: 'https://github.com/KotatsuApp/website/edit/main/website/:path',
        text: 'Запропонувати зміни на цій сторінці',
      },
      footer: baseHelper(getFooter(), ''),

	  sections: sections
    },
  }
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
	return [
		{
            text: "Загальні розділи",
			items: [
				{
					text: "Завантажити",
					link: "/ua/download/",
				},
				/* {
					text: "Parsers",
					link: "/ua/parsers/",
				}, */
				{
					text: "Список змін",
					link: "/ua/changelogs/",
				},
			],
		},
		/* {
			text: "Інші проекти",
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
			text: "Поширені запитання",
			items: [
				{ text: "Загальне", link: "/ua/manuals/faq/general/" },
				{
					text: "Стрічка",
					link: "/ua/manuals/faq/feed/",
				},
				{
					text: "Огляд",
					collapsed: true,
					items: [
						{
							text: "Джерела",
							link: "/ua/manuals/faq/explore/sources/"
						},
						/* {
							text: "Локальне сховище",
							link: "/ua/manuals/faq/explore/local-storage",
						}, */
						/* {
							text: "Закладки",
							link: "/ua/manuals/faq/explore/bookmarks",
						},
						{
							text: "Рандом",
							link: "/ua/manuals/faq/explore/random",
						}, */
						{
							text: "Завантаження",
							link: "/ua/manuals/faq/explore/downloads/",
						},
						/* {
							text: "Пропозиції",
							link: "/ua/manuals/faq/explore/suggestions",
						}, */
					],
				},
				{
					text: "Читалка",
					link: "/ua/manuals/faq/reader/",
				},
				{
					text: "Налаштування",
					link: "/ua/manuals/faq/settings/",
				},
				{
					text: "Різне",
					link: "/ua/manuals/faq/miscellaneous/"
				}
			],
		},
		{
			text: "Посібники",
			items: [
				{
					text: "Початок",
					link: "/ua/manuals/guides/getting-started/",
				},
				{
					text: "Вирішення проблем",
					link: "/ua/manuals/guides/troubleshooting/",
					collapsed: true,
					items: [
						{
							text: "Загальні проблеми",
							link: "/ua/manuals/guides/troubleshooting/common-issues/",
						},
						{
							text: "Діагностика",
							link: "/ua/manuals/guides/troubleshooting/diagnosis/",
						},
					],
				},
				{ text: "Резервні копії", link: "/ua/manuals/guides/backups/" },
				{ text: "Трекінг", link: "/ua/manuals/guides/tracking/" },
				{ text: "Категорії", link: "/ua/manuals/guides/categories/" },
				{
					text: "Синхронізація",
					link: "/ua/manuals/guides/synchronization/"
				}
			],
		},
		{
			text: "Для розробників",
			items: [
				{
					text: "Зробити внесок",
					link: "/ua/dev/contribute/",
				},
				{
					text: "Бібліотека парсерів",
					link: "/ua/dev/parsers-library/",
				},
				{
					text: "Сервер синхронізації",
					link: "/ua/dev/sync-server/",
				},
			]
		}
	]
}

function getNav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Завантажити v{app_version}',
      activeMatch: "^/*?(download|changelogs)/*?$",
		items: [
			{
				text: "Завантажити",
				link: "/ua/download/",
			},
			{
				text: "Список змін",
				link: "/ua/changelogs/",
			},
		],
    },
    {
		text: "Посібник користувача",
		link: "/ua/manuals/guides/getting-started/",
		activeMatch: "/ua/manuals/",
	},
/* 	{
		text: "Настільний додаток",
		link: "/ua/desktop/",
		activeMatch: "/desktop/",
	}, */
/* 	{
		text: "Новини",
		link: "/ua/news/",
		activeMatch: "/news/"
	} */
  ]
}

function getFooter(): CustomConfig['footer'] {
  return {
	qrcodeTitle: 'Telegram-група',
	qrcodeMessage: 'Зв\'яжіться з нами в Telegram',
	qrcodeLink: 'https://t.me/kotatsuapp',
	navigation: [
	  {
		title: 'Правове',
		items: [
		  {
		    text: 'Конфіденційність',
			link: '/ua/privacy/',
		  },
		  {
			text: 'DMCA Відмова від відповідальності',
			link: '/ua/dmca/',
		  },
		],
	  },
	],
  }
}
