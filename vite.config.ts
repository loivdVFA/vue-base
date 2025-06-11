import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
  VitePWA({
    strategies: 'injectManifest',
    srcDir: 'src',            // thư mục chứa sw.js
    filename: 'sw.js',        // tên file đầu ra
    injectManifest: {
      swSrc: 'src/sw.js',     // entry SW nguồn
      globPatterns: ['**/*.{js,css,html,png,svg}']
    },
    registerType: 'autoUpdate',
    manifest: {
      name: 'Go Chat',
      short_name: 'Go Chat',
      description: 'A chat application built with Go and Vue.js',
      theme_color: '#266699',
      background_color: '#ffffff',
      start_url: '/home',
      display: 'standalone',
      icons: [
        {
          src: '/icons/icon_app192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/icon_app512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
