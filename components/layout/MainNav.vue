<template>
  <nav class="flex items-center space-x-4 lg:space-x-6">
    <NuxtLink
      v-for="(link, i) in navigation"
      :key="i"
      :to="link._path"
      class="text-sm text-muted-foreground font-medium transition-colors hover:text-primary"
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
