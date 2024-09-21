<template>
  <div>
    <pre>{{ JSON.stringify(routes, null, 2) }}</pre>
    <pre>{{ navigation }}</pre>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const routes = router.options.routes
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>
