<template>
  <footer class="py-6 text-muted-foreground md:px-8 md:py-0">
    <div class="flex-between gap-2 container md:h-24">
      <span class="text-sm">
        © 2024 Shawn Liu. All rights reserved.
      </span>
      <div class="flex gap-2">
        <UiButton v-for="(link, i) in appConfig.footer.links" :key="i" variant="ghost" size="icon">
          <NuxtLink :to="link.to" :target="link.target" :class="link.icon" class="h-5 w-5" />
        </UiButton>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
