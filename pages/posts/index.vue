<template>
  <div class="flex flex-col gap-2">
    <div v-if="pending">Loading...</div>
    <div v-else-if="error" class="text-red-400">{{ error.message }}</div>
    <div v-for="post in posts" v-else :key="post.id">
      <NuxtLink :to="`/posts/${post.id}`" class="text-blue-600">{{ post.title }}</NuxtLink>
      <div>{{ post.date }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: posts, pending, error } = await useFetch('/api/posts')
</script>
