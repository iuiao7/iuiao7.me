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
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
// 全局状态
const { value: count } = storeToRefs(counterStore)
// 局部状态
const count2 = ref(1)
</script>
