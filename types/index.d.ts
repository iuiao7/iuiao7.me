declare module '#app' {
  interface NuxtApp {
    $formatDate: (date?: Date, format?: string) => string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $formatDate: (date?: Date, format?: string) => string
    $alert: (msg: string) => void
  }
}

export {}
