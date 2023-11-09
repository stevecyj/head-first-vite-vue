import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { normalizePath } from "vite";
import path from "path";

const variablePath = normalizePath(path.resolve("./src/variables.scss"));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`,
      },
    },
  },
});
