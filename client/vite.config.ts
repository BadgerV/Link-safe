import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
   // https://github.com/vitejs/vite/issues/1973
plugins: [react()],
define: {
    _global: {},
  }
})