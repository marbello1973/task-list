///<reference types="vitest"/>
///<reference types="Vite/client"/>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    environment: "happy-dom",
    globals: true,
    setupFiles: ['src/setupTest.ts']
  }  
})
