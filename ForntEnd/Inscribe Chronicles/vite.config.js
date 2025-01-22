import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { // Note: The path `/api` must match your frontend API calls
        target: 'http://localhost:8080', // Backend server address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Strips `/api` before forwarding to the backend
      },
    },
  },
});
