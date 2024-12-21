import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";
import UnoCSS from "unocss/vite";
import rollupCopy from 'rollup-plugin-copy'
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    dts({
      entryRoot: "../",
      outDir: "dist",
    }),
  ],
  resolve: {
    alias: {
      "@epic-designer/core": path.resolve(__dirname, "../core"),
      "@epic-designer/ui": path.resolve(__dirname, "../ui"),
      "@epic-designer/utils": path.resolve(__dirname, "../utils"),
      "@epic-designer/hooks": path.resolve(__dirname, "../hooks"),
    },
    // dedupe: ["vue"],
  },
  // rollup打包配置
  build: {
    outDir: "dist", // 输出文件名称
    lib: {
      entry: {
        index: path.resolve(__dirname, "./index.ts"),
        antd: path.resolve(__dirname, "../ui/antd/index.ts"),
        elementPlus: path.resolve(__dirname, "../ui/elementPlus/index.ts"),
        naiveUi: path.resolve(__dirname, "../ui/naiveUi/index.ts"),
      },
      // 指定组件编译入口文件
      name: "epic-designer",
      // formats: ["es"],
      fileName: (ModuleFormat, entryName) => {
        // console.log(ModuleFormat,entryName)
        // const extension = ModuleFormat === 'es' ? 'js' : ModuleFormat
        // 区分默认入口文件和UI注册文件
        const isIndexEntry = entryName === 'index'
        const path = isIndexEntry
          ? `index.${ModuleFormat}`
          : `ui/${entryName}/index.${ModuleFormat}`
        return path
      }
    },

    // 库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些不需要打包进库的依赖
      external: [
        "vue",
        "monaco-editor",
        "element-plus",
        "ant-design-vue",
        "naive-ui",
        "epic-designer",
        "dayjs"
      ],
      output: {
        chunkFileNames: ({ moduleIds }) => {
          // 将 moduleIds 转为一个字符串，以加速关键词匹配
          const moduleIdString = moduleIds.join("|");

          // 定义关键词和对应路径的映射
          const modulePathMap = {
            antd: "ui/antd/chunks/[name].js",
            elementPlus: "ui/elementPlus/chunks/[name].js",
            naiveUi: "ui/naiveUi/chunks/[name].js",
          };

          // 遍历映射表，找到匹配的路径
          for (const [key, path] of Object.entries(modulePathMap)) {
            if (moduleIdString.includes(key)) {
              return path;
            }
          }
          return `chunks/[name].js`;
        },
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
      plugins: [
        rollupCopy({
          targets: [{ src: '../core/theme', dest: './dist/' }], // 路径
          hook: 'writeBundle', // 钩子，插件运行在rollup完成打包并将文件写入磁盘之前
          verbose: true // 在终端进行console.log
        })
      ]
    },
    commonjsOptions: {
      esmExternals: true,
    },
  },
});
