import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/option/",
  root: resolve(__dirname, "..", "option"),
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, "..", "extension", "option"),
    cssCodeSplit: true,
    watch: {},
    emptyOutDir: false
  },
});
