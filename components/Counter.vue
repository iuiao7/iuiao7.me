<template>
  <div class="py-4">
    <div>Counter: {{ count }}</div>
    <div>Counter2: {{ count2 }}</div>
    <div class="mt-2">
      <UiButton variant="outline" class="mr-2" @click="(count++, count2++)">+</UiButton>
      <UiButton variant="outline" @click="(count--, count2--)">-</UiButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 全局状态
const count = useCounter()
// 局部状态
const count2 = ref(1)
</script>
