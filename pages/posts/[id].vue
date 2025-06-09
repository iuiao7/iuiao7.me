<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error" class="text-red-400">{{ errMessage }}</div>
    <div v-else>
      <h1 class="mb-4 text-2xl font-bold">{{ data?.title }}</h1>
      <article
        class="prose prose-truegray dark:prose-invert mx-auto text-base xl:text-xl"
        v-html="data?.content"
      ></article>
      <!-- 评论区 -->
      <div class="mx-auto mt-12 grid w-1/2 gap-2">
        <UiLabel for="message">评论</UiLabel>
        <UiTextarea v-model="comment" />
        <UiButton class="w-fit" @click="handleSubmit">提交</UiButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute('posts-id')

const userStore = useUserStore()
const { isLogin } = storeToRefs(userStore)

const fetchPosts = () =>
  $fetch(`/api/posts/${route.params.id}`, {
    headers: isLogin.value ? { Authorization: 'Bearer 123' } : {},
    onResponseError: (error) => {
      console.log('🚀 ~ [id].vue:32 ~ error:', error)
      if (error.response.status === 401) {
        router.push(`/login?redirect=${route.path}`)
      }
    },
  })
const { data, pending, error } = await useAsyncData(fetchPosts)
const comment = useState(() => '')

useHead({
  title: data.value?.title,
})

const errMessage = computed(() => error.value?.statusMessage)

// definePageMeta({
//   middleware: ['auth', 'amid'],
// })

// 显示自定义错误页面
watchEffect(() => {
  if (error.value) {
    showError(error.value)
  }
})

const handleSubmit = () => {
  if (isLogin.value) {
    // 提交评论
    comment.value = ''
  } else {
    router.push(`/login?redirect=${route.path}`)
  }
}
</script>
