import { resolve } from 'node:path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

const __dirname = import.meta.dirname;

export default defineConfig({
  build: {
    lib: {
      entry: {
        // 核心管理器（不包含revoke）
        index: resolve(__dirname, 'src/index.ts'),
        pageManager: resolve(__dirname, 'src/pageManager.ts'),
        pluginManager: resolve(__dirname, 'src/pluginManager.ts'),
        // 可选的revoke功能
        revoke: resolve(__dirname, 'src/revoke.ts'),
      },
      fileName: (format, entryName) => `${entryName}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
});
