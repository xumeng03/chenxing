import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsxPlugin()],
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "localhost",
    port: 5274,
  },
});
