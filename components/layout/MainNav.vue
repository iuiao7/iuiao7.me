<template>
  <nav class="flex items-center space-x-4 lg:space-x-6">
    <NuxtLink
      v-for="(link, i) in navigation"
      :key="i"
      :to="link._path"
      class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
    >
      {{ link.title }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>
