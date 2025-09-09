import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT,
    host: true,
    allowedHosts: ['financedashboardx.onrender.com']
  }
})
