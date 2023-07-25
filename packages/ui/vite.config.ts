import { defineConfig, type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";
import dts from "vite-plugin-dts";
export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: "dist",
    }) as PluginOption,
  ],
  resolve: {
    dedupe: ["vue"],
  },
  // rollup打包配置
  build: {
    outDir: "dist", // 输出文件名称
    lib: {
      entry: {
        index: path.resolve(__dirname, "./index.ts"),
      },
      name: "index",
    },
    // 库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    commonjsOptions: {
      esmExternals: true,
    },
  },
});
