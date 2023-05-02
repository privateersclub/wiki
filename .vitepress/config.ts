import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Wiki",
  description: "TBD",
  base: process.env.BASE_URL || "/",
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
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
    editLink: {
      pattern:
        "https://github.com/r-piratedgames/megathread/edit/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/r-piratedgames/megathread" },
    ],
  },
});
