import { h } from 'vue'
import { type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
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
} satisfies Theme
