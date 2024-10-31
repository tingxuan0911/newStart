import { fileURLToPath, URL } from "node:url";
import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",

      /**
       * 自定义插入位置
       * @default: body-last
       */
      // inject?: 'body-last' | 'body-first'

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      // customDomId: '__svg__icons__dom__',
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
        additionalData: `@use "@/assets/scss/variable.scss" as *;`,
      },
    },
  },
  build: {
    outDir: "./dist/spa",
  },
});
