import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssTarget: ['chrome123', 'edge123', 'firefox120', 'safari17.5'],
  },
})
