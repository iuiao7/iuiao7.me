<template>
  <div>
    <pre class="font-inter">{{ JSON.stringify(routes, null, 2) }}</pre>
    <pre class="font-jetbrains">{{ navigation }}</pre>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const routes = router.options.routes
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>
