<template>
  <header
    class="sticky top-0 z-40 bg-background/80 backdrop-blur-lg"
  >
    <div
      class="h-14 max-w-screen-2xl flex items-center justify-between gap-2 px-4 container md:px-8"
    >
      <div class="flex flex-1">
        <span class="ml-3 self-center font-bold">
          Gargen
        </span>
      </div>
      <div class="flex flex-1 justify-end gap-2">
        <div class="flex">
          <NuxtLink
            v-for="(link, i) in appConfig.header.links"
            :key="i"
            :to="link?.to"
            :target="link?.target"
          >
            <UButton variant="ghost" class="flex gap-2">
              <SmartIcon v-if="link?.icon" :name="link.icon" :size="18" />
            </UButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
