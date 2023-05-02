import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Wiki",
  description: "TBD",
  base: process.env.BASE_URL || "/",
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Translations",
        link: "/translations",
      },
    ],
    search: {
      provider: "local",
      options: {
        // TODO: configure for /translations directory
        locales: {},
      },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/r-piratedgames/wiki" },
    ],
  },
});
