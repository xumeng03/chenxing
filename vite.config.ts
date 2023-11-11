import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import dtsPlugin from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [vue(), vueJsxPlugin(), dtsPlugin()],
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          entryFileNames: "[name].mjs",
          preserveModules: true,
        },
      ],
    },
    minify: false,
    lib: {
      entry: "./index.ts",
      name: "chenxing",
      fileName: "chenxing",
    },
  },
  server: {
    host: "localhost",
    port: 5274,
  },
});
