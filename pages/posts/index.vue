<template>
  <div class="flex flex-col gap-4">
    <div v-if="pending">Loading...</div>
    <div v-else-if="error" class="text-red-400">{{ error.message }}</div>
    <div v-for="post of posts" v-else :key="post.id">
      <NuxtLink :to="`/posts/${post.id}`" class="text-blue-600">{{ post.title }}</NuxtLink>
      <div>{{ post.date }}</div>
    </div>
    <UiPagination v-if="total > pageSize" :items-per-page="pageSize" :total="total">
      <UiPaginationPrevious @click="prev" />
      <UiPaginationNext @click="next" />
    </UiPagination>
  </div>
</template>

<script lang="ts" setup>
const currentPage = ref(1)
const pageSize = ref(10)
const { data, pending, error, refresh } = await useFetch(
  () => `/api/posts?page=${currentPage.value}&size=${pageSize.value}`
)

const total = computed(() => data.value?.total ?? 0)
const posts = computed(() => data.value?.records ?? [])

const prev = () => {
  currentPage.value--
  refresh()
}

const next = () => {
  currentPage.value++
  refresh()
}
</script>
