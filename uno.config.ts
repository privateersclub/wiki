import coloradix, {
  gray,
  mint,
  blue,
  yellow,
  red,
  grass
} from '@coloradix/unocss'
import {
  presetWind,
  presetUno,
  presetIcons,
  transformerDirectives,
  defineConfig,
  presetWebFonts
} from 'unocss'

const radix = coloradix({
  gray,
  mint,
  blue,
  yellow,
  red,
  grass
})
  .alias({
    neutral: 'gray',
    primary: 'grass',
    warning: 'yellow',
    danger: 'red',
    info: 'blue'
  })
  .build({
    selector: 'class'
  })

export default defineConfig({
  presets: [
    presetUno(),
    presetWind(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: radix.colors
  },
  preflights: [radix.preflight]
})
