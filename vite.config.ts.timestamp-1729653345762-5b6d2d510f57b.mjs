// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import path from "path";
import { defineConfig } from "file:///C:/control/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/control/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///C:/control/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/control/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]"
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
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // api: 'modern-compiler',// or "modern"
        additionalData: `@import '@/assets/scss/variable.scss';`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxjb250cm9sXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxjb250cm9sXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9jb250cm9sL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5cblxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG5cblxuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcblxuICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgIC8vIFx1NjMwN1x1NUI5QVx1OTcwMFx1ODk4MVx1N0YxM1x1NUI1OFx1NzY4NFx1NTZGRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOVxuICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgXCJzcmMvYXNzZXRzL3N2Z1wiKV0sXG4gICAgICAvLyBcdTYzMDdcdTVCOUFzeW1ib2xJZFx1NjgzQ1x1NUYwRlxuICAgICAgc3ltYm9sSWQ6IFwiaWNvbi1bZGlyXS1bbmFtZV1cIixcblxuICAgICAgLyoqXG4gICAgICAgKiBcdTgxRUFcdTVCOUFcdTRFNDlcdTYzRDJcdTUxNjVcdTRGNERcdTdGNkVcbiAgICAgICAqIEBkZWZhdWx0OiBib2R5LWxhc3RcbiAgICAgICAqL1xuICAgICAgLy8gaW5qZWN0PzogJ2JvZHktbGFzdCcgfCAnYm9keS1maXJzdCdcblxuICAgICAgLyoqXG4gICAgICAgKiBjdXN0b20gZG9tIGlkXG4gICAgICAgKiBAZGVmYXVsdDogX19zdmdfX2ljb25zX19kb21fX1xuICAgICAgICovXG4gICAgICAvLyBjdXN0b21Eb21JZDogJ19fc3ZnX19pY29uc19fZG9tX18nLFxuICAgIH0pLFxuXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgLy8gYXBpOiAnbW9kZXJuLWNvbXBpbGVyJywvLyBvciBcIm1vZGVyblwiXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCAnQC9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzJztgLFxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb04sU0FBUyxlQUFlLFdBQVc7QUFDdlAsT0FBTyxVQUFVO0FBRWpCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUdoQixTQUFTLDRCQUE0QjtBQVAwRixJQUFNLDJDQUEyQztBQVloTCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFFSixxQkFBcUI7QUFBQTtBQUFBLE1BRW5CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFBQTtBQUFBLE1BRXhELFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYVosQ0FBQztBQUFBLEVBRUg7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUE7QUFBQSxRQUVKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
