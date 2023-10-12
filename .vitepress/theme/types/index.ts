import { DefaultTheme } from 'vitepress'
import type { SectionData } from '../plugins/section'

export namespace Theme {
  export interface Sponsor {
    message?: string
    linkText?: string
    link?: string
  }

  export interface Config extends DefaultTheme.Config {
    titleSeparator?: string
    sections?: Array<SectionData>
  }

  export interface TeamMember extends Omit<DefaultTheme.TeamMember, 'name'> {
    name: Record<string, string>
  }
}