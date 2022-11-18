import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 8080,
    open: '/',
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      },
    }
  },
  plugins: [vue(), vueJsx()],
  publicDir: 'static',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@config': fileURLToPath(new URL('./src/config', import.meta.url)),
      '@com': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
    }
  },
})
