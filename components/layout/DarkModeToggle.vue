<template>
  <UiButton
    variant="ghost"
    size="icon"
    @click="isDark = !isDark"
  >
    <Icon aria-hidden="true" :name="isDark ? 'radix-icons:sun' : 'radix-icons:moon'" class="h-5 w-5" />
    <span class="sr-only">Toggle theme</span>
  </UiButton>
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
