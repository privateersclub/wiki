import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

const navbar: DefaultTheme.NavItem[] = [
  { text: 'Comenzar', link: '/start' },
  { text: 'Contribuir', link: '/contribute' }
]

const sidebar: DefaultTheme.Sidebar = [
  { text: 'Glosario', link: 'es/glossary' },
  { text: 'Software', link: 'es/software' },
  { text: 'Descargas', link: 'es/download' },
  { text: 'Emulación', link: 'es/emulation' },
  { text: 'Linux', link: 'es/linux' },
  { text: 'De utilidad', link: 'es/useful' },
  { text: 'A evitar', link: 'es/unsafe' }
]

export const esLocale: LocaleSpecificConfig<DefaultTheme.Config> = {
    ...navbar,
    themeConfig: {
        sidebar,
        editLink: {
            pattern: 'https://github.com/privateersclub/wiki/edit/master/docs/:path',
            text: 'Sugerir Cambios'
        }
    }
}
