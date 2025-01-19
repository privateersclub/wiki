# Contributing

You can contribute to the project in various ways:

- Submissions (software, sites, useful content)
- Translations

## Generation

For site generation, we use [Vitepress](https://vitepress.dev), so you will need a working Node.js
environment installed. Refer to its documentation for making changes to Vitepress itself.

You can also make changes in your browser using:
[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https://pr.new/privateersclub/wiki)

Please look into [StackBlitz's browsers support](https://developer.stackblitz.com/platform/webcontainers/browser-support) for this, as notably Safari and Firefox can be less supported and unusable for this.

You will also need some hands-on experience with TypeScript if you're going to contribute to
improving internals.

The root website directory is `docs/`.

## Content

All content resides in the `docs/` folder of the repository. Edit them as you would with normal
Markdown files.

## Translations

See https://vitepress.dev/guide/i18n and [our tracker](https://megathread.pages.dev/_translations).

There are two things to translate: content and strings used in Vitepress (sidebar, nav, etc.).

Start by creating a folder in `docs/<locale>` and write your content in the same format.

Then, edit Vitepress strings. This may seem daunting, especially if you haven't used TypeScript or
dealt with configurations like these before, but it shouldn't be overly difficult, and you don't
have to do it too, I (tasky) can take care of it!

Create your locale file in `docs/.vitepress/locales/<locale>.ts`, copying over the format from the
root English file, and start editing.

Once you're done, add it to Vitepress' config in `docs/.vitepress/config.ts`. If you've come this
far, adding the language shouldn't be too challenging.
