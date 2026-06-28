import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const springBootStaticDir = env.VITE_SPRINGBOOT_STATIC_DIR || '../../src/main/resources/static'

  return {
    plugins: [react()],
    base: './',
    build: {
      outDir: springBootStaticDir,
      emptyOutDir: false,
    },
  }
})
