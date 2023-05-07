import { defineConfig } from "vitepress";
import sidebar from "../sidebar";

export default defineConfig({
  title: "Wiki",
  description: "Welcome to the coolest game piracy wiki on the internet.",
  base: process.env.BASE_URL || "/",
  lang: "en-US",
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    pt: {
      label: "Brazilian Portuguese",
      lang: "pt-br",
    },
  },
  themeConfig: {
    nav: [{ text: "Get started", link: "/start" }],
    sidebar: sidebar,
    search: {
      provider: "local",
      options: {
        locales: {
          pt: {}, // TODO: complete translation
        },
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
