<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UiToaster />
    <!-- <ClientOnly>
      <template v-if="isDevelopment">
        <StagewiseToolbar :config="stagewiseConfig" />
      </template>
    </ClientOnly> -->
  </div>
</template>

<script setup lang="ts">
import 'vue-sonner/style.css'

useHead({
  titleTemplate(title) {
    return title ? `${title} - Shawn's blog` : `Shawn's blog`
  },
})
// import { defineAsyncComponent } from 'vue'

// const StagewiseToolbar = defineAsyncComponent(() =>
//   import('@stagewise/toolbar-vue').then((m) => m.StagewiseToolbar)
// )

// const stagewiseConfig = {
//   plugins: [],
// }

// const isDevelopment = import.meta.dev
</script>
