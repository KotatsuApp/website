import translators from './translators.json'
import type { Theme } from '../.vitepress/theme/types'

export interface Translator {
  name: string | Record<string, string>
  github: string
  avatar: string
  website?: string
}

const translatorsList: Record<string, Translator> = {}

for (const [key, value] of Object.entries(translators)) {
  const data: Partial<Translator> = typeof value === 'object' && value !== null ? value : {}

  translatorsList[key] = {
    ...data,
    name: typeof value === 'string' ? value : value.name,
    github: `https://github.com/${key}`,
    avatar: `https://github.com/${key}.png`,
  }
}

export const coreMembers: Theme.TeamMember[] = [
  {
    avatar: 'https://github.com/Koitharu.png',
    name: {
      ru: 'Koitharu',
      en: 'Koitharu',
    },
    org: 'Lead developer',
    orgLink: 'https://github.com/KotatsuApp',
    links: [
      { icon: 'github', link: 'https://github.com/Koitharu' },
    ],
  },
  {
    avatar: 'https://github.com/ztimms73.png',
    name: {
      ru: 'Xtimms',
      en: 'Xtimms',
    },
    org: 'Developer, UI/UX',
    orgLink: 'https://github.com/KotatsuApp',
    links: [
      { icon: 'github', link: 'https://github.com/ztimms73' },
    ],
  },
]

export { translatorsList as translators }