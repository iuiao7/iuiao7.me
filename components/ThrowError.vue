<template>
  <div>
    <UiButton @click="handleTriggerError">点击触发错误</UiButton>
  </div>
</template>

<script lang="ts" setup>
const handleTriggerError = () => {
  throw new Error('This is a test error from ThrowError.vue')
}
</script>

<style scoped></style>
