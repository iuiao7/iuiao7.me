<template>
  <div class="p-4">
    <div>Count: {{ count }}</div>
    <div>Counter: {{ counter }}</div>
    <div>CounterRef: {{ counterRef }}</div>
    <div class="mt-2">
      <UiButton variant="outline" class="mr-2" @click="(counter++, counterRef++)">+</UiButton>
      <UiButton variant="outline" @click="(counter--, counterRef--)">-</UiButton>
    </div>

    <Counter />
    <Counter />
  </div>
</template>

<script lang="ts" setup>
const counter = useState('counter', () => Math.round(Math.random() * 10000))
const counterRef = ref(Math.round(Math.random() * 10000))
const count = useCounter()
</script>
