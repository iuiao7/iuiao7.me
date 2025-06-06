import { toast } from 'vue-sonner'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', (vueApp) => {
    vueApp.config.globalProperties.$alert = (message: string) => {
      toast(message)
    }
  })
})
