<template>
  <div>
    <ul>
      <li v-for="post in writings" :key="post._id">
        <NuxtLink :to="post._path">
          {{ post.title }} - {{ post.published }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: writings } = await useAsyncData('all-writings', () =>
  queryContent('/writings').sort({ published: -1 }).find())
</script>
