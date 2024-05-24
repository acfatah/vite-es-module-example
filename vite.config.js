import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: '@acfatah/vite-es-module',
      fileName: 'vite-es-module',
    },
  },
})
