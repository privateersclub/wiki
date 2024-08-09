import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

const navbar: DefaultTheme.NavItem[] = [
  { text: 'Get Started', link: '/ro/start' },
  { text: 'Contribute', link: '/ro/contribute' }
]

const sidebar: DefaultTheme.Sidebar = [
  { text: 'Dicționar', link: '/ro/glossary' },
  { text: 'Programe', link: '/ro/software' },
  { text: 'Download', link: '/ro/download' },
  { text: 'Emulare', link: '/ro/emulation' },
  { text: 'Linux', link: '/ro/linux' },
  { text: 'Folositor', link: '/ro/useful' },
  { text: 'Evită', link: '/ro/unsafe' }
]

export const roLocale: LocaleSpecificConfig<DefaultTheme.Config> = {
  ...navbar,
  themeConfig: {
    sidebar,
    editLink: {
      pattern: 'https://github.com/privateersclub/wiki/edit/master/docs/:path',
      text: 'Suggest Changes'
    }
  }
}
