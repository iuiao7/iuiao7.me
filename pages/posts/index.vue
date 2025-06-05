<template>
  <div class="flex flex-col gap-4">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error" class="text-red-400">{{ error.message }}</div>
    <div v-for="post of posts" v-else :key="post.id">
      <UiCard>
        <UiCardHeader>
          <UiCardTitle>
            <NuxtLink :to="`/posts/${post.id}`" class="hover:underline">{{ post.title }}</NuxtLink>
          </UiCardTitle>
        </UiCardHeader>
        <UiCardContent>
          <p class="text-sm text-gray-500">{{ new Date(post.date).toLocaleDateString('zh-CN') }}</p>
        </UiCardContent>
      </UiCard>
    </div>
    <UiPagination v-if="total > pageSize" :items-per-page="pageSize" :total="total">
      <UiPaginationPrevious @click="prev" />
      <UiPaginationNext @click="next" />
    </UiPagination>
  </div>
</template>

<script lang="ts" setup>
const title = ref('Posts')
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
