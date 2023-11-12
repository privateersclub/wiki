import { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { generateSidebar } from "../../sidebar";

const navbar: DefaultTheme.NavItem[] = [
  { text: "Get Started", link: "/start" },
  { text: "Contribute", link: "/contribute" },
];

export const enLocale: LocaleSpecificConfig<DefaultTheme.Config> = {
  ...navbar,
  themeConfig: {
    sidebar: generateSidebar("en-us"),
    editLink: {
      pattern:
        "https://github.com/privateersclub/wiki/edit/master/docs/:path",
      text: "Suggest Changes",
    },
  },
};
