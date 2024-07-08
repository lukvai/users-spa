import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default defineConfig(({ command, mode }) => {
  // @ts-ignore
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), TanStackRouterVite()],
    base: env.VITE_BASE_PATH
  }
})
