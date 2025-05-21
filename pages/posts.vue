<template>
  <div class="flex flex-col gap-2">
    <div v-for="post in data" :key="post.id">
      <NuxtLink :to="`/posts/${post.id}`" class="text-blue-600">{{ post.title }}</NuxtLink>
      <div>{{ post.date }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const data = await $fetch('/api/posts')
</script>
