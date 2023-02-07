import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, '..', 'content_script'),
  assetsInclude: ['manifest.json'],
  build: {
    target: 'chrome58',
    lib: {
      entry: resolve(__dirname, '..', '..', 'content_script', 'index.ts'),
      name: 'content_script',
      fileName: 'content_script',
    },
    outDir: resolve(__dirname, '..', 'extension'),
    emptyOutDir: false,
    watch: {},
  },
});
