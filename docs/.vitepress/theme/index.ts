import {type Theme} from "vitepress";
import DefaultTheme from "vitepress/theme";
import {loadProgress} from "./composables/nprogress";
import "./style.css";
import "uno.css";

export default {
    extends: DefaultTheme,
    enhanceApp({router}) {
        loadProgress(router);
    },
} satisfies Theme;
