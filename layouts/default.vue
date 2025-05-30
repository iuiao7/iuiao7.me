<template>
  <div class="flex min-h-dvh flex-col">
    <LayoutHeader />
    <div class="container flex-1 border-b">
      <slot></slot>
    </div>
    <LayoutFooter />
  </div>
</template>
