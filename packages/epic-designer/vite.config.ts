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
      formats: ["es", "cjs"],
      fileName: (ModuleFormat, entryName) => {
        const extension = ModuleFormat === 'es' ? 'js' : ModuleFormat
        const uiLibraryNames = ['antd', 'elementPlus', 'naiveUi']
        if (uiLibraryNames.includes(entryName)) {
          return `ui/${entryName}/index.${extension}`
        }

        if (entryName.includes('node_modules')) {
          const newName = entryName.split('node_modules/')[1]
          return `_virtual/${newName}.${extension}`
        }

        return `${entryName}.${extension}`
        // return path
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
        preserveModules: true, // 保留模块的原始目录结构
        preserveModulesRoot: "../",
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
      plugins: [
        rollupCopy({
          targets: [
            { src: '../core/theme', dest: './dist/' },
            // 新增的拷贝规则，将 epic-designer.css 拷贝为 style.css 兼容旧版本
            { src: './dist/epic-designer.css', dest: './dist/', rename: 'style.css' }
          ], // 路径
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
