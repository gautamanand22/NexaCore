import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Base path for GitHub Pages
  base: '/',

  // CSS Configuration
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true,
  },

  // Build Configuration
  build: {
    target: 'es2015',
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['gsap', '@gsap/react'],
          ui: ['lucide-react', 'react-scroll-parallax'],
          utils: ['react-countup']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: false, // Keep console logs for debugging
        drop_debugger: true
      }
    },
    copyPublicDir: true,
    assetsDir: 'assets'
  },

  // Public directory configuration
  publicDir: 'public',

  // Development Server
  server: {
    port: 5174,
    host: true,
    open: true
  },

  // Preview Server
  preview: {
    port: 4173,
    host: true,
    open: true
  },

  // Path Resolution
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@sections': path.resolve(__dirname, './src/sections'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@public': path.resolve(__dirname, './public')
    }
  },

  // Asset Optimization
  assetsInclude: ['**/*.webp', '**/*.avif'],

  // Performance Optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'gsap', 'lucide-react']
  },

  // Environment Variables
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  }
})
