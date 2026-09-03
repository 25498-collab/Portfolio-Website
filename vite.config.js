import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: './',
  resolve: {
    alias: [
      { find: /^@\/api(\/.*)?$/, replacement: fileURLToPath(new URL('./src/API', import.meta.url)) },
      { find: /^@\/lib(\/.*)?$/, replacement: fileURLToPath(new URL('./src/LIB', import.meta.url)) },
      { find: /^@\/components(\/.*)?$/, replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: /^@\/pages(\/.*)?$/, replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
    ]
  },
  plugins: [
    react(),
  ]
});
