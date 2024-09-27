<template>
  <main>
    <ContentDoc>
      <template #default="{ doc }">
        <article class="mx-auto text-base prose prose-truegray xl:text-xl dark:prose-invert">
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>

<!-- <script lang="ts" setup>
const route = useRoute()
const { data: post } = await useAsyncData(`writing:${route.params.slug}`, () => queryContent(`/writings/${route.params.slug}`).findOne())
const {
  data: postDB,
  refresh,
} = await useAsyncData(`writing:${route.params.slug}:db`, () => $fetch(`/api/posts/${route.params.slug}`, { method: 'POST' }))

function getDetails() {
  const likes = postDB.value?.likes ?? 0
  const views = postDB.value?.views ?? 0

  const like = likes > 1 ? t('likes.many') : t('likes.one')
  const view = views > 1 ? t('views.many') : t('views.one')

  return `${likes} ${like} · ${views} ${view}`
}
</script> -->
