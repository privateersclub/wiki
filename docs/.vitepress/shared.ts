import { defineConfig } from "vitepress";
import { sidebar } from "../sidebar";

export const sharedConfig = defineConfig({
  title: "privateersclub/wiki",
  description: "Welcome to the most comprehensive game piracy wiki on the internet.",
  base: process.env.BASE_URL || "/",
  lang: "en-US",
  lastUpdated: true,
  cleanUrls: true,
  appearance: "dark",
  titleTemplate: ":title • Wiki",

  themeConfig: {
    search: {
      provider: "local",
    },
    sidebar: sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/privateersclub/wiki" },
    ],
  },
})
