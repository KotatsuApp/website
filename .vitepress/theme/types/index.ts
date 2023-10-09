import { DefaultTheme } from 'vitepress'
import type { ComponentData } from '../plugins/component'

export namespace Theme {
  export interface Sponsor {
    message?: string
    linkText?: string
    link?: string
  }

  export interface Config extends DefaultTheme.Config {
    titleSeparator?: string
    components?: Array<ComponentData>
    teamSectionTitle?: string

    sponsorLink?: string
    sponsor?: Sponsor
  }

  export interface TeamMember extends Omit<DefaultTheme.TeamMember, 'name'> {
    name: Record<string, string>
  }
}