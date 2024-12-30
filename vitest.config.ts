import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const r = (path: string) => resolve(__dirname, path)

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
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
