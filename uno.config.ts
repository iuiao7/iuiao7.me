// uno.config.ts
import { defineConfig, presetIcons, presetUno } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetIcons(), presetAnimations(), presetShadcn()],
  theme: {
    container: {
      center: true,
    },
  },
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'components/**/*.{js,ts}',
      ],
    },
  },
})
