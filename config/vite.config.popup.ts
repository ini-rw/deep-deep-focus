import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "popup/",
  root: resolve(__dirname, "..", "popup"),
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, "..", "extension", "popup"),
    cssCodeSplit: true,
    watch: {},
    emptyOutDir: false,
  },
});
