import type { PluginOption } from 'vite';

import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import vue from '@vitejs/plugin-vue';
import rollupCopy from 'rollup-plugin-copy';
import nodeExternals from 'rollup-plugin-node-externals';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default defineConfig({
  build: {
    commonjsOptions: {
      esmExternals: true,
    },
    lib: {
      entry: {
        antd: path.resolve(__dirname, '../ui/antd/index.ts'),
        elementPlus: path.resolve(__dirname, '../ui/elementPlus/index.ts'),
        index: path.resolve(__dirname, './index.ts'),
        naiveUi: path.resolve(__dirname, '../ui/naiveUi/index.ts'),
      },
      fileName: (ModuleFormat, entryName) => {
        const extension = ModuleFormat === 'es' ? 'js' : ModuleFormat;
        const uiLibraryNames = ['antd', 'elementPlus', 'naiveUi'];
        if (uiLibraryNames.includes(entryName)) {
          return `ui/${entryName}/index.${extension}`;
        }
        return `${entryName}.${extension}`;
      },
      formats: ['es', 'cjs'],
      // 指定组件编译入口文件
      name: 'epic-designer',
    },
    outDir: 'dist',
    // 库编译模式配置
    rollupOptions: {
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        // 保留模块的原始目录结构
        preserveModules: true,
        preserveModulesRoot: '../',
      },
      plugins: [
        rollupCopy({
          // 钩子，插件运行在rollup完成打包并将文件写入磁盘之前
          hook: 'writeBundle',
          targets: [
            // 路径
            { dest: './dist/', src: '../core/theme' },
            {
              dest: './dist/',
              rename: 'style.css',
              src: './dist/epic-designer.css',
            },
          ],
          verbose: true, // 在终端进行console.log
        }) as PluginOption,
      ],
    },
  },
  plugins: [
    vue(),
    UnoCSS() as PluginOption,
    dts({
      entryRoot: '../',
      exclude: ['../**/__test__/**'],
      outDir: 'dist',
    }),
    nodeExternals(),
  ],
  resolve: {
    alias: {
      '@epic-designer/base-ui': path.resolve(
        __dirname,
        '../ui-kit/base-ui/src/index.ts',
      ),
      '@epic-designer/core': path.resolve(__dirname, '../core/src/index.ts'),
      '@epic-designer/hooks': path.resolve(__dirname, '../hooks/src/index.ts'),
      '@epic-designer/panel-ui': path.resolve(
        __dirname,
        '../ui-kit/panel-ui/src/index.ts',
      ),
      '@epic-designer/types': path.resolve(__dirname, '../types/src/index.ts'),
      '@epic-designer/ui': path.resolve(__dirname, '../ui/'),
      '@epic-designer/utils': path.resolve(__dirname, '../utils/src/index.ts'),
    },
  },
});
