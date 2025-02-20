import type { PluginOption } from 'vite'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import dts from "vite-plugin-dts";
import UnoCSS from "unocss/vite";
import rollupCopy from 'rollup-plugin-copy'
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import nodeExternals from 'rollup-plugin-node-externals'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS() as PluginOption,
    dts({
      entryRoot: "../",
      outDir: "dist",
    }),
    nodeExternals()
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: {
        index: path.resolve(__dirname, "./index.ts"),
        antd: path.resolve(__dirname, "../ui/antd/index.ts"),
        elementPlus: path.resolve(__dirname, "../ui/elementPlus/index.ts"),
        naiveUi: path.resolve(__dirname, "../ui/naiveUi/index.ts"),
      },
      // 指定组件编译入口文件
      name: "epic-designer",
      formats: ["es", "cjs"],
      fileName: (ModuleFormat, entryName) => {
        const extension = ModuleFormat === 'es' ? 'js' : ModuleFormat
        const uiLibraryNames = ['antd', 'elementPlus', 'naiveUi']
        if (uiLibraryNames.includes(entryName)) {
          return `ui/${entryName}/index.${extension}`
        }
        return `${entryName}.${extension}`
      }
    },
    // 库编译模式配置
    rollupOptions: {
      output: {
        // 保留模块的原始目录结构
        preserveModules: true, 
        preserveModulesRoot: "../",
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
      plugins: [
        rollupCopy({
          targets: [
            // 路径
            { src: '../core/theme', dest: './dist/' },
          ], 
          // 钩子，插件运行在rollup完成打包并将文件写入磁盘之前
          hook: 'writeBundle', 
          verbose: true // 在终端进行console.log
        }) as PluginOption
      ]
    },
    commonjsOptions: {
      esmExternals: true,
    },
  },
});
