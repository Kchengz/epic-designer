import path from 'node:path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = import.meta.dirname;

export default defineConfig({
  build: {
    commonjsOptions: {
      esmExternals: true,
    },
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      fileName: (format) => `index.${format === 'es' ? 'js' : format}`,
      formats: ['es'],
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
        preserveModulesRoot: './',
      },
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: '../',
      exclude: ['../**/__test__/**'],
      insertTypesEntry: true,
      outDir: 'dist',
    }),
  ],
  resolve: {
    alias: {
      '@epic-designer/base-ui': path.resolve(
        __dirname,
        '../ui-kit/base-ui/src/index',
      ),
      '@epic-designer/hooks': path.resolve(__dirname, '../hooks/src/index'),
      '@epic-designer/types': path.resolve(__dirname, '../types/src/index'),
    },
  },
});
