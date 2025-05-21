/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 100,
  semi: false,
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
