<template>
  <div class="flex flex-col gap-2">
    <div v-if="pending">Loading...</div>
    <div v-else-if="error" class="text-red-400">{{ error.message }}</div>
    <div v-for="post of data?.records" v-else :key="post.id">
      <NuxtLink :to="`/posts/${post.id}`" class="text-blue-600">{{ post.title }}</NuxtLink>
      <div>{{ post.date }}</div>
    </div>
    <UiPagination :items-per-page="pageSize" :total="data?.total">
      <UiPaginationPrevious @click="prev" />
      <UiPaginationNext @click="next" />
    </UiPagination>
  </div>
</template>

<script lang="ts" setup>
const currentPage = ref(1)
const pageSize = ref(2)
const { data, pending, error, refresh } = await useFetch(
  () => `/api/posts?page=${currentPage.value}&size=${pageSize.value}`
)

const prev = () => {
  currentPage.value--
  refresh()
}

const next = () => {
  currentPage.value++
  refresh()
}
</script>
