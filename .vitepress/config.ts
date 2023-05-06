import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Wiki",
  description: "TBD",
  base: process.env.BASE_URL || "/",
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: translations(),
    search: {
      provider: "local",
      options: {
        // TODO: configure for /translations directory
        locales: {},
      },
    },
    editLink: {
      pattern: "https://github.com/r-piratedgames/megathread/edit/master/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/r-piratedgames/megathread" },
    ],
  },
});

function translations() {
  return [
    {
      text: "Home",
      link: "/",
    },
    { text: "Wiki", link: "/README" },
    {
      text: "Translations",
      items: [
        // TODO:
        { text: "Index", link: "/config/" },
        { text: "Three", link: "/config/three" },
        { text: "Four", link: "/config/four" },
      ],
    },
  ];
}
