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
          'vue/html-self-closing': [
            'error',
            {
              html: {
                void: 'always',
                normal: 'never',
                component: 'always',
              },
              svg: 'always',
              math: 'always',
            },
          ],
          'no-duplicate-imports': 'off',
          'unused-imports/no-unused-vars': 'warn',
        },
      },
    ]
  )
)
