// TODO:  complete this translation, change only stringss!

import { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { generateSidebar } from "../../sidebar";

const navbar: DefaultTheme.NavItem[] = [
  { text: "Get started", link: "/start" },
  { text: "Contribute", link: "/contribute" },
];

export const brLocale: LocaleSpecificConfig<DefaultTheme.Config> = {
  ...navbar,
  themeConfig: {
    sidebar: generateSidebar('br'),
    editLink: {
      pattern:
        "https://github.com/privateersclub/wiki/edit/master/docs/:path",
      text: "Suggest changes",
    },
  },
};
