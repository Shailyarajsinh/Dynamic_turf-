import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    allowedHosts: [
    '3de7-2402-a00-152-cd37-182e-1ade-cb85-4eb0.ngrok-free.app'
    ]
  }
})
