import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    lessOpinionated: true,
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
    typescript: true,
    vue: true,
  }, {
    rules: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
    },
  }),
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
)
