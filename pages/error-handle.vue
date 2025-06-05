<template>
  <div>
    <NuxtErrorBoundary>
      Error handle test page
      <ThrowError />
      <template #error="{ error, clearError }">
        <p>{{ error }}</p>
        <UiButton @click="clearError">点击清除错误</UiButton>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script lang="ts" setup></script>
