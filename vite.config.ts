import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173, // Vite's development server port
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Your Express backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Forward all /api requests
      }
    }
  }
});
