// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
    componentInspector: false,
  },

  css: ['assets/css/main.css'],

  experimental: {
    viewTransition: true,
    typedPages: true,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
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
    componentDir: './components/ui',
  },

  content: {

  },
})
