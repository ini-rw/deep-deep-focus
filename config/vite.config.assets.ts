import { defineConfig } from "vite";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, ".."),
  build: {
    outDir: resolve(__dirname, "..", "extension", "assets"),
    watch: {},
  },
});
