import { defineConfig, normalizePath } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import viteEslint from "vite-plugin-eslint";

const variablePath = normalizePath(path.resolve("./src/variables.scss"));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteEslint()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`
      }
    }
  }
});
