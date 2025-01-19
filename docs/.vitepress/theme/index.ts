import { h } from 'vue'
import { type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import { NolebasePagePropertiesPlugin } from '@nolebase/vitepress-plugin-page-properties/client'
import { loadProgress } from './composables/nprogress'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-page-properties/client/style.css'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import './style.scss'
import 'uno.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // An enhanced readabilities menu for wider screens
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      // An enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
      'nav-screen-content-after': () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu)
    })
  },
  enhanceApp({ router, app }) {
    loadProgress(router)
    app.use(NolebaseGitChangelogPlugin, {
      commitsRelativeTime: true,
      hideChangelogHeader: true
    })
    app.use(
      NolebasePagePropertiesPlugin<{ tags: string[]; progress: number }>(),
      [
        {
          locales: {
            en: [
              {
                key: 'tags',
                type: 'tags',
                title: 'Tags'
              },
              {
                key: 'createdAt',
                type: 'datetime',
                title: 'Created at',
                formatAsFrom: true,
                dateFnsLocaleName: 'enUS'
              },
              {
                key: 'updatedAt',
                type: 'datetime',
                title: 'Updated at',
                formatAsFrom: true,
                dateFnsLocaleName: 'enUS'
              },
              {
                key: 'wordsCount',
                type: 'dynamic',
                title: 'Word count',
                options: {
                  type: 'wordsCount'
                }
              },
              {
                key: 'readingTime',
                type: 'dynamic',
                title: 'Reading time',
                options: {
                  type: 'readingTime',
                  dateFnsLocaleName: 'enUS'
                }
              }
            ]
          }
        }
      ]
    )
  }
} satisfies Theme
