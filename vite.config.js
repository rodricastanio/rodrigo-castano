import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Rodrigo Castaño | Full Stack Developer',
        short_name: 'RC Portfolio',
        description: 'Portfolio de Rodrigo Castaño — Full Stack Developer',
        theme_color: '#0a0a1a',
        background_color: '#0a0a1a',
        display: 'standalone',
        icons: [
          { src: '/logo-portfolio.png', sizes: '192x192', type: 'image/png' },
          { src: '/logo-portfolio.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
  },
  resolve: {
    alias:{
      '@': path.resolve(__dirname, './src'),
    },
  },
})
