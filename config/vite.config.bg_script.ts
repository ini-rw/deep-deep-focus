import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "chrome58",
    outDir: resolve(__dirname, "..", "extension"),
    lib: {
      entry: resolve(__dirname, "..", "background", "index.ts"),
      name: "background_script",
      fileName: "background",
    },
    watch: {},
    emptyOutDir: false,
  },
});
