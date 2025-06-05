export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:error', (error) => {
    console.log('app:error', error)
  })

  nuxtApp.hook('vue:error', (error) => {
    console.log('vue:error', error)
  })

  nuxtApp.vueApp.config.errorHandler = (error) => {
    console.log('vue:errorHandler', error)
  }
})
