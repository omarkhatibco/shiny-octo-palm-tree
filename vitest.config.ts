import { loadEnvConfig } from '@next/env'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults, defineConfig } from 'vitest/config'

loadEnvConfig(process.cwd())

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, '**/e2e/**/*'],
    setupFiles: ['vitest.setup.ts'],
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/'],
    },
  },
})
