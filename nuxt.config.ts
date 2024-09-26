// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
    componentInspector: false,
  },

  css: ['@unocss/reset/tailwind.css', 'assets/css/main.css'],

  experimental: {
    viewTransition: true,
    typedPages: true,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    classSuffix: '',
  },

  devServer: {
    port: 7777,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  shadcn: {
    prefix: 'ui',
  },

  content: {

  },
})
