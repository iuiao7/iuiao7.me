import { theme as defaultTheme } from '@unocss/preset-wind'
import { defineConfig, presetIcons, presetUno, transformerDirectives } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetIcons(), presetAnimations(), presetShadcn()],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-between': 'flex justify-between items-center',
    },
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      mono: `'Source Code Pro', ${defaultTheme.fontFamily!.mono}`,
      sans: `'Source Sans 3', ${defaultTheme.fontFamily!.sans}`,
      serif: `'Source Serif 4', ${defaultTheme.fontFamily!.serif}`,
    },
  },
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'components/**/*.{js,ts}',
        'app.config.ts',
      ],
    },
  },
  transformers: [
    transformerDirectives(),
  ],
})
