import type { DefaultTheme, LocaleConfig } from 'vitepress'
import type { Theme } from '../theme/types'
import { sections } from '../theme/plugins/section'
import 'dotenv/config'

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
      footer: {
        message: "<a href=\"https://www.gnu.org/licenses/gpl-3.0.en.html\" target=\"_blank\">GPL-3.0 Licensed</a> <span class=\"divider\">|</span> <a href=\"/privacy/\">Privacy policy</a>",
        copyright: `Copyright © 2020 - ${new Date().getFullYear()} Kotatsu Developers`,
      },

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
				{
					text: "Contribute",
					link: "/contribute/",
				},
			],
		},
		{
			text: "Frequently Asked Questions",
			items: [
				{ text: "General", link: "/manuals/faq/general" },
				{
					text: "Feed",
					link: "/manuals/faq/feed",
				},
				{
					text: "Explore",
					link: "/manuals/faq/explore/",
					collapsed: true,
					items: [
						{ 
							text: "Sources", 
							link: "/manuals/faq/explore/sources" 
						},
						{
							text: "Local storage",
							link: "/manuals/faq/explore/local-storage",
						},
						{
							text: "Bookmarks",
							link: "/manuals/faq/explore/bookmarks",
						},
						{
							text: "Random",
							link: "/manuals/faq/explore/random",
						},
						{
							text: "Downloads",
							link: "/manuals/faq/explore/downloads",
						},
						{
							text: "Suggestions",
							link: "/manuals/faq/explore/suggestions",
						},
					],
				},
				{
					text: "Reader",
					link: "/manuals/faq/reader",
				},
				{
					text: "Settings",
					link: "/manuals/faq/settings",
				},
			],
		},
		{
			text: "Guides",
			items: [
				{
					text: "Getting started",
					link: "/manuals/guides/getting-started",
				},
				{
					text: "Troubleshooting",
					link: "/manuals/guides/troubleshooting/",
					collapsed: true,
					items: [
						{
							text: "Common issues",
							link: "/manuals/guides/troubleshooting/common-issues",
						},
						{
							text: "Diagnosis",
							link: "/manuals/guides/troubleshooting/diagnosis",
						},
					],
				},
				{ text: "Backups", link: "/manuals/guides/backups" },
				{ text: "Tracking", link: "/manuals/guides/tracking" },
				{ text: "Categories", link: "/manuals/guides/categories" },
				{
					text: "Local storage",
					link: "/manuals/guides/local-storage/",
					collapsed: true,
					items: [
						{
							text: "Advanced editing",
							link: "/manuals/guides/local-source/advanced",
						},
					],
				},
				{
					text: "Reader settings",
					link: "/manuals/guides/reader-settings",
				},
			],
		},
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
		text: "Manual",
		link: "/manuals/guides/getting-started",
		activeMatch: "/manuals/",
	},
	/* {
		text: "News",
		link: "/news/",
		activeMatch: "/news/",
	},
	{
		text: "Account",
		link: "/account/",
		activeMatch: "/account/"
	} */
  ]
}