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
import { useUserStore } from '@/stores/user'

const route = useRoute('posts-id')
const { data, pending, error } = await useAsyncData(() => $fetch(`/api/posts/${route.params.id}`))
const userStore = useUserStore()

const router = useRouter()
const { isLogin } = storeToRefs(userStore)
const comment = useState(() => '')

const errMessage = computed(() => error.value?.statusMessage)

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
