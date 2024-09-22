import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    lessOpinionated: true,
    unocss: true,
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
)
