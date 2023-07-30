import { defineConfig } from "vitepress";
import { sharedConfig } from "./shared";
import { enLocale } from "./locales/en-us";
import { brLocale } from "./locales/pt-br";

export default defineConfig({
  ...sharedConfig,
  locales: {
    root: {
      label: "English",
      lang: "en",
      ...enLocale,
    },
    pt: {
      label: "Brazilian Portuguese",
      lang: "pt-br",
      ...brLocale,
    },
  },
});
