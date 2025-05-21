<template>
  <div>{{ data }}</div>
</template>

<script lang="ts" setup>
const data = await $fetch('/api/hello')
</script>

<style scoped></style>
