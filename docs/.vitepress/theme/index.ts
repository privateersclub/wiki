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
import './style.css'
import 'uno.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // A enhanced readabilities menu for wider screens
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
      'nav-screen-content-after': () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu)
    })
  },
  enhanceApp({ router, app }) {
    loadProgress(router)
    app.use(NolebaseGitChangelogPlugin, {
      mapAuthors: [
        {
          name: 'taskylizard',
          username: 'taskylizard',
          avatar: 'https://github.com/taskylizard.png'
        },
        {
          name: 'Kazevic',
          username: 'Kazevic',
          avatar: 'https://github.com/kazevic.png'
        }
      ]
    })
    app.use(
      NolebasePagePropertiesPlugin<{ tags: string[]; progress: number }>(),
      {
        locales: {
          en: [
            {
              key: 'tags',
              type: 'tags',
              title: 'Tags'
            },
            {
              key: 'progress',
              type: 'progress',
              title: 'Progress'
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
              key: 'url1',
              type: 'link',
              title: 'URL 1'
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
    )
  }
} satisfies Theme
