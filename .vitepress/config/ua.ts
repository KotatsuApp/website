import type { DefaultTheme, LocaleConfig } from 'vitepress'
import type { Theme } from '../theme/types'
import { sections } from '../theme/plugins/section'

export const SITE_NAME = 'Kotatsu Website'
export const META_DESCRIPTION = 'Проста і зручна читалка манги з відкритим вихідним кодом від спільноти і для спільноти, де ви можете знайти і читати вашу улюблену мангу простіше як ніколи.'

export const searchLocale: Record<string, Partial<Omit<DefaultTheme.LocalSearchOptions, 'locales'>>> = {
    ru: {
      translations: {
        button: {
          buttonText: 'Пошук',
          buttonAriaLabel: 'Пошук'
        },
        modal: {
          resetButtonTitle: 'Скинути',
          backButtonTitle: 'Закрити',
          noResultsText: 'Немає результатів за запитом',
          footer: {
            selectText: 'для вибору',
            selectKeyAriaLabel: 'enter',
            navigateText: 'для навігації',
            navigateUpKeyAriaLabel: 'стрілка вгору',
            navigateDownKeyAriaLabel: 'стрілка донизу',
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
        "/": defaultSidebar(),
      },

      outline: {
        label: 'На цій сторінці',
        level: 'deep',
      },

      returnToTopLabel: 'Наверх',
      sidebarMenuLabel: 'Меню',
      darkModeSwitchLabel: 'Тема',
      langMenuLabel: 'Змінити мову',

      lastUpdated: {
        text: 'Останнє оновлення',
      },

      docFooter: {
        prev: 'Попередня сторінка',
        next: 'Наступна сторінка',
      },
      editLink: {
        pattern: 'https://github.com/KotatsuApp/website/edit/master/website/:path',
        text: 'Запропонувати зміни на цій сторінці',
      },
      footer: {
        message: "<a href=\"https://www.gnu.org/licenses/gpl-3.0.en.html\" target=\"_blank\">Ліцензія GPL-3.0</a> <span class=\"divider\">|</span> <a href=\"/privacy/\">Політика конфіденційності</a>",
        copyright: `Copyright © 2020 - ${new Date().getFullYear()} Kotatsu Developers`,
      },

	  sections: sections
    }
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
				{
					text: "Список змін",
					link: "/ua/changelogs/",
				},
				{
					text: "Зробити внесок",
					link: "/ua/contribute/",
				},
			],
		},
		{
			text: "Поширені запитання",
			items: [
				{ text: "Загальне", link: "/ua/manuals/faq/general" },
				{
					text: "Стрічка",
					link: "/ua/manuals/faq/feed",
				},
				{
					text: "Огляд",
					link: "/ua/manuals/faq/explore/",
					collapsed: true,
					items: [
						{ 
							text: "Джерела", 
							link: "/ua/manuals/faq/explore/sources" 
						},
						{
							text: "Локальне сховище",
							link: "/ua/manuals/faq/explore/local-storage",
						},
						{
							text: "Закладки",
							link: "/ua/manuals/faq/explore/bookmarks",
						},
						{
							text: "Випадкові серії",
							link: "/ua/manuals/faq/explore/random",
						},
						{
							text: "Завантаження",
							link: "/ua/manuals/faq/explore/downloads",
						},
						{
							text: "Рекомендації",
							link: "/ua/manuals/faq/explore/suggestions",
						},
					],
				},
				{
					text: "Читання",
					link: "/ua/manuals/faq/reader",
				},
				{
					text: "Налаштування",
					link: "/ua/manuals/faq/settings",
				},
			],
		},
		{
			text: "Гайди",
			items: [
				{
					text: "Початок роботи",
					link: "/ua/manuals/guides/getting-started",
				},
				{
					text: "Вирішення проблем",
					link: "/ua/manuals/guides/troubleshooting/",
					collapsed: true,
					items: [
						{
							text: "Загальні питання",
							link: "/ua/manuals/guides/troubleshooting/common-issues",
						},
						{
							text: "Діагностика",
							link: "/ua/manuals/guides/troubleshooting/diagnosis",
						},
					],
				},
				{ text: "Резервні копії", link: "/ua/manuals/guides/backups" },
				{ text: "Трекінг", link: "/ua/manuals/guides/tracking" },
				{ text: "Категорії", link: "/ua/manuals/guides/categories" },
				{
					text: "Локальне сховище",
					link: "/ua/manuals/guides/local-storage/",
					collapsed: true,
					items: [
						{
							text: "Розширене редагування",
							link: "/ua/manuals/guides/local-source/advanced",
						},
					],
				},
				{
					text: "Налаштування читання",
					link: "/ua/manuals/guides/reader-settings",
				},
			],
		},
	]
}

function getNav(): DefaultTheme.NavItem[] {
    return [
      {
        text: 'v{app_version}',
        activeMatch: "^/*?(download|changelogs)/*?$",
          items: [
              {
                  text: "Завантажити",
                  link: "/ua/download/",
              },
              {
                  text: "Зміни у версіях",
                  link: "/ua/changelogs/",
              },
          ],
      },
      {
          text: "Інструкції",
          link: "/ua/manuals/guides/getting-started",
          activeMatch: "/ua/manuals/",
      },
      {
          text: "Новини",
          link: "/ua/news/",
          activeMatch: "/ua/news/",
      },
    ]
  }