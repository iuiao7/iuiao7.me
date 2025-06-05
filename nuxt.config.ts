// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/tailwind.css'],

  experimental: {
    viewTransition: true,
    typedPages: true,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        { name: 'description', content: '个人博客' },
        { name: 'keywords', content: 'vue,nuxt,frontend,ts,js,css,html' },
      ],
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    'shadcn-nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs'],
      },
    ],
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

  content: {},

  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api',
    },
  },

  imports: {
    dirs: ['stores'],
  },
})
