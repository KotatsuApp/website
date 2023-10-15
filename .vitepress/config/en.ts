import type { DefaultTheme, LocaleConfig } from 'vitepress'
import type { CustomConfig, Theme } from '../theme/types'
import { sections } from '../theme/plugins/section'
import 'dotenv/config'
import { baseHelper } from '../theme/utils'

export const SITE_NAME = 'Kotatsu Website'
export const META_DESCRIPTION = 'A simple and convenient open source manga reader from and for the community, where you can find and read your favorite manga easier than ever.'

export const searchLocale: Record<string, Partial<Omit<DefaultTheme.LocalSearchOptions, 'locales'>>> = {
  root: {
    translations: {
      button: {
        buttonText: 'Search',
        buttonAriaLabel: 'Search'
      },
      modal: {
        resetButtonTitle: 'Reset search',
        backButtonTitle: 'Close search',
        noResultsText: 'No results for',
        footer: {
          selectText: 'to select',
          selectKeyAriaLabel: 'enter',
          navigateText: 'to navigate',
          navigateUpKeyAriaLabel: 'up arrow',
          navigateDownKeyAriaLabel: 'down arrow',
          closeText: 'to close',
          closeKeyAriaLabel: 'escape'
        }
      }
    }
  },
}

export const config: LocaleConfig<Theme.Config> = {
  root: {
    label: 'English',
    lang: 'en',
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
        label: 'On this page',
        level: 'deep',
      },

      docFooter: {
        prev: 'Previous page',
        next: 'Next page',
      },
      editLink: {
        pattern: 'https://github.com/KotatsuApp/website/edit/main/website/:path',
        text: 'Suggest changes to this page',
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
      text: 'Get v{app_version}',
      activeMatch: "^/*?(download|changelogs)/*?$",
		items: [
			{
				text: "Download",
				link: "/download/",
			},
			{
				text: "Changelogs",
				link: "/changelogs/",
			},
		],
    },
    {
		text: "User manual",
		link: "/manuals/guides/getting-started/",
		activeMatch: "/manuals/",
	},
	{
		text: "Desktop app",
		link: "/desktop/",
		activeMatch: "/desktop/",
	},
	{
		text: "News",
		link: "/news/",
		activeMatch: "/news/"
	}
  ]
}

function getFooter(): CustomConfig['footer'] {
  return {
	qrcodeTitle: 'Telegram Group',
	qrcodeMessage: 'Contact us on Telegram',
	qrcodeLink: 'https://t.me/kotatsuapp',
	navigation: [
	  {
		title: 'Legal',
		items: [
		  {
		    text: 'Privacy',
			link: '/privacy/',
		  },
		  {
			text: 'DMCA disclaimer',
			link: '/dmca/',
		  },
		],
	  },
	],
  }
}