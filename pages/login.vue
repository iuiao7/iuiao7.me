<template>
  <div>
    <UiButton @click="handleLogin">Login</UiButton>
  </div>
</template>

<script lang="ts" setup>
const isLogin = useLogin()
const router = useRouter()
const route = useRoute()

const handleLogin = () => {
  isLogin.value = true
  const redirect = route.query?.redirect?.toString() ?? '/'
  router.push(redirect)
}
</script>
