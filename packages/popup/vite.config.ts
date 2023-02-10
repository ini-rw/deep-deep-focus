import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/popup/',
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, '..', '..', 'extension', 'popup'),
    watch: process.env.VITE_WATCH ? {} : undefined,
    emptyOutDir: true,
  },
});
