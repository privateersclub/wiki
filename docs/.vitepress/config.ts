import { defineConfig } from "vitepress";
import { sidebar } from "../sidebar";

export default defineConfig({
  title: "privateersclub/wiki",
  description: "Welcome to the most comprehensive game piracy wiki on the internet.",
  base: process.env.BASE_URL || "/",
  lang: "en-US",
  lastUpdated: true,
  cleanUrls: true,

  titleTemplate: ":title • Wiki",
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    // pt: {
    //   label: "Brazilian Portuguese",
    //   lang: "pt-br",
    // },
  },
  themeConfig: {
    nav: [
      { text: "Get started", link: "/start" },
      { text: "Contribute", link: "/contribute" },
    ],
    sidebar: sidebar,
    search: {
      provider: "local",
      // options: {
      //   locales: {
      //     pt: {}, // TODO: complete translation
      //   },
      // },
    },
    editLink: {
      pattern:
        "https://github.com/privateersclub/wiki/edit/master/README.md",
      text: "Edit this page on GitHub",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/privateersclub/wiki" },
    ],
  },
});
