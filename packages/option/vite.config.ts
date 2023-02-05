import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/option/',
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, '..', 'extension', 'option'),
    watch: process.env.VITE_WATCH ? {} : undefined,
    emptyOutDir: true,
  },
});
