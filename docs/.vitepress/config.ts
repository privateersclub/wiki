import {defineConfig} from "vitepress";
import {sharedConfig} from "./shared";
import {enLocale} from "./locales/en-us";
import {brLocale} from "./locales/pt-br";

export default defineConfig({
    ...sharedConfig,
    locales: {
        root: {
            label: "English",
            lang: "en",
            ...enLocale,
        },
        br: {
            label: "Brazilian Portuguese",
            lang: "br",
            ...brLocale,
        },
    },
});
