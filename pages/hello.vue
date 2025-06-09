<template>
  <div>
    <p>{{ data }}</p>
    <p>API Base: {{ runtimeConfig.public.apiBase }}</p>
    <p>Date1: {{ date1 }}</p>
    <p>Date2: {{ date2 }}</p>
  </div>
</template>

<script lang="ts" setup>
const ins = getCurrentInstance()
const nuxtApp = useNuxtApp()
const data = await $fetch('/api/hello')
const runtimeConfig = useRuntimeConfig()
// console.log('🚀 ~ hello.vue:8 ~ runtimeConfig:', runtimeConfig)
// The only available runtime config keys on the client side are `public` and `app`.
// console.log('[ runtimeConfig.apiSecret ] >', runtimeConfig.apiSecret)

const date1 = nuxtApp.$formatDate(new Date(), 'YYYY/MM/DD')
const date2 = nuxtApp.$formatDate()

onMounted(() => {
  ins?.proxy?.$alert('Hello world')
  console.log(ins?.proxy?.$formatDate(new Date(), 'YYYY-MM-DD'))
})
</script>

<style scoped></style>
