<template>
  <div>
    {{ data }}
  </div>
</template>

<script lang="ts" setup>
const data = await $fetch('/api/posts')
</script>

<style scoped></style>
