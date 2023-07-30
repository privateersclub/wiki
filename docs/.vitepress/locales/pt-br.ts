// TODO:  complete this translation, change only stringss!!

import { DefaultTheme, LocaleSpecificConfig } from "vitepress";

const sidebar: DefaultTheme.NavItem[] = [
  { text: "Get started", link: "/start" },
  { text: "Contribute", link: "/contribute" },
]

export const brLocale: LocaleSpecificConfig<DefaultTheme.Config> = {
  ...sidebar,
  themeConfig: {
    editLink: {
      pattern:
        "https://github.com/privateersclub/wiki/edit/master/docs/wiki/:path",
      text: "Suggest changes",
    }
  }
}
