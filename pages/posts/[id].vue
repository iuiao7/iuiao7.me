<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error" class="text-red-400">{{ error.message }}</div>
    <div v-else>
      <h1 class="mb-4 text-2xl font-bold">{{ data?.title }}</h1>
      <article
        class="prose prose-truegray dark:prose-invert mx-auto text-base xl:text-xl"
        v-html="data?.content"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute('posts-id')
const fetchPost = () => $fetch(`/api/posts/${route.params.id}`)
const { data, pending, error } = await useAsyncData(fetchPost)
</script>
