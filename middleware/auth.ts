export default defineNuxtRouteMiddleware((to, from) => {
  console.log('[ auth middleware ]')
  const userStore = useUserStore()

  if (!userStore.isLogin) {
    return navigateTo(`/login?redirect=${to.path}`)
  }
})
