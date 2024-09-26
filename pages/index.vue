<template>
  <div>
    <pre class="font-mono">{{ JSON.stringify(routes, null, 2) }}</pre>
    <pre class="font-mono">{{ navigation }}</pre>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const routes = router.options.routes
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>
