---
title: 深入理解Vue 3 Composition API
description: 探索Vue 3 Composition API的强大功能和使用方法
date: '2024-03-18'
tags:
  - Vue
  - JavaScript
  - 前端开发
  - Composition API
---

# 深入理解Vue 3 Composition API

Vue 3的发布带来了许多激动人心的新特性,其中最引人注目的莫过于Composition API。这个新的API为我们提供了一种更灵活、更强大的方式来组织和重用组件逻辑。本文将深入探讨Composition API的核心概念、使用方法以及它如何改变我们的Vue开发体验。

## 什么是Composition API?

Composition API是Vue 3引入的一个新的API集合,旨在解决Vue 2中Options API的一些限制。它允许我们使用导入的API函数来描述组件逻辑,而不是依赖于预定义的组件选项。这种方法提供了更好的代码组织、逻辑重用和类型推断。

## 为什么需要Composition API?

在大型复杂的应用中,Options API可能会导致组件变得难以理解和维护。相关的逻辑可能分散在不同的选项中,使得代码难以追踪和重构。Composition API通过允许我们按照逻辑关系组织代码,解决了这个问题。

## setup函数\:Composition API的入口

`setup`函数是Composition API的核心。它在组件创建之前执行,作为组合逻辑的入口点。在`setup`中,我们可以定义响应式状态、计算属性、方法等,并将它们返回以供模板使用。

### setup函数的基本结构

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">
      Increment
    </button>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
// 响应式状态
const count = ref(0)
// 计算属性
const doubleCount = computed(() => count.value, 2)
// 方法
const increment = () => {
  count.value++
}
// 生命周期钩子
onMounted(() => {
  console.log('组件已挂载')
})
</script>
```

## 响应式系统的核心\:ref和reactive

Composition API引入了两个主要的响应式API:`ref`和`reactive`。

### ref

`ref`用于创建一个响应式的引用,可以包含任何类型的值

```javascript
import { ref } from 'vue'
const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
```

### reactive

`reactive`用于创建一个响应式对象,可以包含多个属性

```javascript
import { reactive } from 'vue'
const state = reactive({ count: 0 })
console.log(state.count) // 0
state.count++
```

## 计算属性和监听器

### 计算属性

计算属性是根据其他响应式状态计算得出的值。它们在模板中使用,但不会在响应式数据流中引入新的响应式状态。

```javascript
import { computed, ref } from 'vue'
const count = ref(0)
const doubleCount = computed(() => count.value, 2)
console.log(doubleCount.value) // 0
count.value++
console.log(doubleCount.value) // 2
```

### 监听器

监听器用于监听响应式状态的变化,并在变化时执行某些操作。
