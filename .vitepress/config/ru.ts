import type { DefaultTheme, LocaleConfig } from 'vitepress'
import type { Theme } from '../theme/types'
import { components } from '../theme/plugins/component'
import 'dotenv/config'

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
        
      },

      outline: {
        label: 'На этой странице',
        level: 'deep',
      },

      returnToTopLabel: 'Наверх',
      sidebarMenuLabel: 'Меню',
      darkModeSwitchLabel: 'Тема',
      langMenuLabel: 'Изменить язык',
      teamSectionTitle: 'Команда',

      lastUpdated: {
        text: 'Последнее обновление',
      },

      docFooter: {
        prev: 'Предыдущая страница',
        next: 'Следующая страница',
      },
      editLink: {
        pattern: 'https://github.com/KotatsuApp/kotatsuapp.github.io/edit/master/website/:path',
        text: 'Предложить изменения на этой странице',
      },
      footer: {
        message: "<a href=\"https://www.gnu.org/licenses/gpl-3.0.en.html\" target=\"_blank\">Лицензия GPL-3.0</a> <span class=\"divider\">|</span> <a href=\"/privacy/\">Политика конфиденциальности</a>",
        copyright: `Copyright © 2020 - ${new Date().getFullYear()} Kotatsu Developers`,
      },

      components: components.filter(component => component.path.startsWith('ru/components/')),
    },
  }
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
				text: "Изменения в версиях",
				link: "/ru/changelogs/",
			},
		],
    },
    {
		text: "Инструкции",
		link: "/ru/manuals/guides/getting-started",
		activeMatch: "/ru/manuals/",
	},
	{
		text: "Новости",
		link: "/ru/news/",
		activeMatch: "/ru/news/",
	},
  ]
}