import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 4173,  // ใช้ PORT จาก Render หรือ default 4173
    host: '0.0.0.0',                        // เปิดให้เข้าจากทุกเครื่อง
    strictPort: true,
  },
  preview: {
    port: Number(process.env.PORT) || 4173,
    host: '0.0.0.0',
    allowedHosts: ['financedashboardx.onrender.com'],  // อนุญาต host ของ Render
  },
})
