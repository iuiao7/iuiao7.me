<template>
  <footer class="text-muted-foreground py-6 md:px-8 md:py-0">
    <div class="container flex items-center justify-between gap-2 md:h-24">
      <span class="text-sm"> © 2024 Shawn Liu. All rights reserved. </span>
      <div class="flex gap-2">
        <UiButton v-for="(link, i) in appConfig.footer.links" :key="i" variant="ghost" size="icon">
          <NuxtLink :to="link.to" :target="link.target">
            <Icon class="h-5 w-5" :name="link.icon" />
          </NuxtLink>
        </UiButton>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
