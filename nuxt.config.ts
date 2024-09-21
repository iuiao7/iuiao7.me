// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: ['@unocss/reset/tailwind.css', 'assets/css/base.css'],

  experimental: {
    viewTransition: true,
    typedPages: true,
  },

  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
  ],

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
