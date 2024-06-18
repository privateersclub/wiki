import {DefaultTheme, LocaleSpecificConfig} from "vitepress";

const navbar: DefaultTheme.NavItem[] = [
    {text: "Começar", link: "/start"},
    {text: "Contribuir", link: "/contribute"},
];

const sidebar: DefaultTheme.Sidebar = [
    {text: "Glossário", link: "/br/glossary"},
    {text: "Programas", link: "/br/software"},
    {text: "Downloads", link: "/br/download"},
    {text: "Emulação", link: "/br/emulation"},
    {text: "Linux", link: "/br/linux"},
    {text: "Útil", link: "/br/useful"},
    {text: "Não Seguro", link: "/br/unsafe"},
];

export const brLocale: LocaleSpecificConfig<DefaultTheme.Config> = {
    ...navbar,
    themeConfig: {
        sidebar: sidebar,
        editLink: {
            pattern: "https://github.com/privateersclub/wiki/edit/master/docs/:path",
            text: "Sugerir Mudanças",
        },
    },
};
