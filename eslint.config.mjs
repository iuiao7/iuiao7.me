import { sxzz } from '@sxzz/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  sxzz(
    {
      prettier: true,
      markdown: true,
      vue: true,
      unocss: false,
    },
    [
      {
        files: ['**/*.ts', '**/*.vue'],
        rules: {
          'vue/block-order': [
            'error',
            {
              order: ['template', 'script', 'style'],
            },
          ],
          'no-duplicate-imports': 'off',
        },
      },
    ]
  )
)
