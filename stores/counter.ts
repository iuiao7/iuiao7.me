import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const value = ref(999)

  return {
    value,
  }
})
