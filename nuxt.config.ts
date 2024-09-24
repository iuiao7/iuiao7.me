// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: ['assets/css/base.css'],

  experimental: {
    viewTransition: true,
    typedPages: true,
  },

  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/content', '@nuxt/ui'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'h-full',
      },
      bodyAttrs: {
        class: 'antialiased bg-gray-50 dark:bg-black min-h-screen',
      },
    },
  },

  devServer: {
    port: 7777,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  content: {

  },
})
