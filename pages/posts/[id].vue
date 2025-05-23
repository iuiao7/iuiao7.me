<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">{{ data.title }}</h1>
    <article
      class="prose prose-truegray dark:prose-invert mx-auto text-base xl:text-xl"
      v-html="data.content"
    />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const data = await $fetch(`/api/posts/${route.params.id}`)
</script>
