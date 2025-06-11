/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'virtual:pwa-register' {
  interface RegisterSWOptions {
    immediate?: boolean
  }
  interface SWUpdate {
    update: () => void
    unregister: () => Promise<void>
  }
  export function registerSW(opts?: RegisterSWOptions): SWUpdate
}
