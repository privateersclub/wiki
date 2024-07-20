import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { presetUno, presetIcons } from 'unocss'
import { generateMeta } from './hooks/meta'
import { generateImages } from './hooks/opengraph'
import {
  PageProperties,
  PagePropertiesMarkdownSection
} from '@nolebase/vitepress-plugin-page-properties/vite'
import {
  GitChangelog,
  GitChangelogMarkdownSection
} from '@nolebase/vitepress-plugin-git-changelog/vite'

export const sharedConfig = defineConfig({
  title: 'privateersclub/wiki',
  description: 'The most comprehensive game piracy wiki on the internet.',
  base: process.env.BASE_URL || '/',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  appearance: 'dark',
  titleTemplate: ':title • Wiki',
  head: [
    ['meta', { name: 'theme-color', content: '#ADF0DD' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  vite: {
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        '@nolebase/vitepress-plugin-git-changelog/client',
        '@nolebase/vitepress-plugin-page-properties/client'
      ]
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-page-properties',
        '@nolebase/vitepress-plugin-git-changelog'
      ]
    },
    plugins: [
      UnoCSS({
        presets: [
          presetUno(),
          presetIcons({
            extraProperties: {
              display: 'inline-block',
              'vertical-align': 'middle'
            }
          })
        ]
      }),
      GitChangelog({
        maxGitLogCount: 2000,
        repoURL: () => 'https://github.com/privateersclub/wiki'
      }),
      GitChangelogMarkdownSection(),
      PageProperties(),
      PagePropertiesMarkdownSection()
    ]
  },
  transformHead: async (context) =>
    generateMeta(context, 'https://megathread.pages.dev'),
  buildEnd(siteConfig) {
    generateImages(siteConfig)
  },
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
      options: {
        // Add title ang tags field in frontmatter to search
        // You can exclude a page from search by adding search: false to the page's frontmatter.
        _render(src, env, md) {
          // without `md.render(src, env)`, the some information will be missing from the env.
          let html = md.render(src, env)
          let tagsPart = ''
          let headingPart = ''
          let contentPart = ''
          let fullContent = ''
          const sortContent = () =>
            [headingPart, tagsPart, contentPart] as const
          let { frontmatter, content } = env

          if (!frontmatter) return html

          if (frontmatter.search === false) return ''

          contentPart = content ||= src

          const headingMatch = content.match(/^#{1} .*/m)
          const hasHeading = !!(
            headingMatch &&
            headingMatch[0] &&
            headingMatch.index !== undefined
          )

          if (hasHeading) {
            const headingEnd = headingMatch.index! + headingMatch[0].length
            headingPart = content.slice(0, headingEnd)
            contentPart = content.slice(headingEnd)
          } else if (frontmatter.title) {
            headingPart = `# ${frontmatter.title}`
          }

          const tags = frontmatter.tags
          if (tags && Array.isArray(tags) && tags.length)
            tagsPart = `Tags: #${tags.join(', #')}`

          fullContent = sortContent().filter(Boolean).join('\n\n')

          html = md.render(fullContent, env)

          return html
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/privateersclub/wiki' },
      { icon: 'discord', link: 'https://discord.gg/jz8dUnnD6Q' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16"><path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/></svg>'
        },
        link: 'https://privateer.divolt.xyz'
      }
    ]
  }
})
