import { defineConfig } from 'vitepress'
import { sharedConfig } from './shared'
import { enLocale } from './locales/en-us'
import { brLocale } from './locales/pt-br'
import { esLocale } from './locales/es-la'
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
