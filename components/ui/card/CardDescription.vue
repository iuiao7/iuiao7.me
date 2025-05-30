<template>
  <p data-slot="card-description" :class="cn('text-muted-foreground text-sm', props.class)">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
