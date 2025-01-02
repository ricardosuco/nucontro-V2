import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const r = (path: string) => resolve(__dirname, path)

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    testTimeout: 60_000,
    hookTimeout: 60_000,
    isolate: false,
    fileParallelism: false,
  },

  resolve: {
    alias: {
      src: '/src',
      '~~': r('.'),
      '~~/': r('./'),
      '@@': r('.'),
      '@@/': r('./'),
    },
  },
})
