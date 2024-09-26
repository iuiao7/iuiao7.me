<template>
  <UiTooltipProvider :delay-duration="100" :skip-delay-duration="0">
    <UiTooltip>
      <UiTooltipTrigger as-child>
        <UiButton variant="ghost" size="icon" @click="isDark = !isDark">
          <Icon aria-hidden="true" :name="isDark ? 'radix-icons:sun' : 'radix-icons:moon'" class="h-5 w-5" />
          <span class="sr-only">Switch dark mode</span>
        </UiButton>
      </UiTooltipTrigger>
      <UiTooltipContent>
        <p>Switch to {{ isDark ? 'light' : 'dark' }} mode</p>
      </UiTooltipContent>
    </UiTooltip>
  </UiTooltipProvider>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>
