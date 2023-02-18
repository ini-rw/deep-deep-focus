import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, '.'),
  assetsInclude: ['manifest.json'],
  build: {
    target: 'chrome58',
    outDir: resolve(__dirname, '..', '..', 'extension'),
    emptyOutDir: false,
    watch: process.env.VITE_WATCH ? {} : undefined,
    rollupOptions: {
      input: {
        contentScript: 'content/index.ts',
        background: 'background/index.ts',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
