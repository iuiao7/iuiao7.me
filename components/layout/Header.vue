<template>
  <header
    class="sticky top-0 z-40 bg-background/80 backdrop-blur-lg"
  >
    <div
      class="h-14 max-w-screen-2xl flex items-center justify-between gap-2 px-4 container md:px-8"
    >
      <div class="flex">
        <span class="ml-3 self-center font-bold">
          Shawn's blog
        </span>
      </div>
      <LayoutMainNav />
      <div class="flex gap-2">
        <LayoutDarkModeToggle />
      </div>
    </div>
  </header>
</template>
