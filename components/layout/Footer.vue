<template>
  <footer class="py-6 text-muted-foreground md:px-8 md:py-0">
    <div class="flex-between gap-2 container md:h-24">
      <span class="text-sm">
        {{ appConfig.footer.credits }}
      </span>
      <div class="flex">
        <UiButton variant="ghost" size="icon" class="flex gap-2">
          <SmartIcon v-for="(link, i) in appConfig.footer.links" :key="i" :name="link.icon" :size="18" />
        </UiButton>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
