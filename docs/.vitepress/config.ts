import { defineConfig } from 'vitepress'
import { sharedConfig } from './shared'
import { enLocale } from './locales/en'
import { brLocale } from './locales/br'
import { esLocale } from './locales/es'
import { roLocale } from './locales/ro'

export default defineConfig({
  ...sharedConfig,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      ...enLocale
    },
    br: {
      label: 'Brazilian Portuguese',
      lang: 'br',
      ...brLocale
    },
    es: {
      label: 'Español',
      lang: 'es',
      ...esLocale
    },
    ro: {
      label: 'Română',
      lang: 'ro',
      ...roLocale
    }
  }
})
