<template>
  <div>
    <p>{{ data }}</p>
    <p>API Base: {{ runtimeConfig.public.apiBase }}</p>
  </div>
</template>

<script lang="ts" setup>
const data = await $fetch('/api/hello')
const runtimeConfig = useRuntimeConfig()
console.log('🚀 ~ hello.vue:8 ~ runtimeConfig:', runtimeConfig)
// The only available runtime config keys on the client side are `public` and `app`.
console.log('[ runtimeConfig.apiSecret ] >', runtimeConfig.apiSecret)
</script>

<style scoped></style>
