import dayjs from 'dayjs'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('formatDate', (date?: Date, format?: string) => {
    return dayjs(date).format(format)
  })
})
