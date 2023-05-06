import { defineConfig } from "vitepress";
import sidebar from "../sidebar";
export default defineConfig({
  title: "Wiki",
  description: "Welcome to the coolest game piracy wiki on the internet.",
  base: process.env.BASE_URL || "/",
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: navbar(),
    sidebar: sidebar,
    search: {
      provider: "local",
      options: {
        // TODO: configure for /translations directory
        locales: {},
      },
    },
    editLink: {
      pattern:
        "https://github.com/r-piratedgames/megathread/edit/master/README.md",
      text: "Edit this page on GitHub",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/r-piratedgames/megathread" },
    ],
  },
});

function navbar() {
  return [
    {
      text: "Home",
      link: "/",
    },
    { text: "Wiki", link: "/wiki/start" },
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
