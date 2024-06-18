import {DefaultTheme, LocaleSpecificConfig} from "vitepress";

const navbar: DefaultTheme.NavItem[] = [
    {text: "Get Started", link: "/start"},
    {text: "Contribute", link: "/contribute"},
];

const sidebar: DefaultTheme.Sidebar = [
    {text: "Glossary", link: "/glossary"},
    {text: "Software", link: "/software"},
    {text: "Download", link: "/download"},
    {text: "Emulation", link: "/emulation"},
    {text: "Linux", link: "/linux"},
    {text: "Useful", link: "/useful"},
    {text: "Unsafe", link: "/unsafe"},
];

export const enLocale: LocaleSpecificConfig<DefaultTheme.Config> = {
    ...navbar,
    themeConfig: {
        sidebar,
        editLink: {
            pattern: "https://github.com/privateersclub/wiki/edit/master/docs/:path",
            text: "Suggest Changes",
        },
    },
};
