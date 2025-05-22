<template>
  <div>
    <h1>{{ data.title }}</h1>
    <div v-html="data.content" />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const data = await $fetch(`/api/posts/${route.params.id}`)
</script>
