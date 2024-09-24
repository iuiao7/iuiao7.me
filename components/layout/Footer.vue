<template>
  <footer class="text-muted-foreground py-6 md:px-8 md:py-0">
    <div class="flex-center container gap-2 md:h-24">
      <span class="text-sm">
        {{ appConfig.footer.credits }}
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
