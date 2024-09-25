<template>
  <footer class="py-6 text-muted-foreground md:px-8 md:py-0">
    <div class="flex-center gap-2 container md:h-24">
      <span class="text-sm">
        {{ appConfig.footer.credits }}
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
