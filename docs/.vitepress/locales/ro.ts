import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

const navbar: DefaultTheme.NavItem[] = [
  { text: 'Get Started', link: '/ro/start' },
  { text: 'Contribute', link: '/ro/contribute' }
]

const sidebar: DefaultTheme.Sidebar = [
  { text: 'Glossary', link: '/ro/glossary' },
  { text: 'Software', link: '/ro/software' },
  { text: 'Download', link: '/ro/download' },
  { text: 'Emulation', link: '/ro/emulation' },
  { text: 'Linux', link: '/ro/linux' },
  { text: 'Useful', link: '/ro/useful' },
  { text: 'Unsafe', link: '/ro/unsafe' }
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
