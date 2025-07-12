import { resolve } from 'node:path';

import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';
import VueDevTools from 'vite-plugin-vue-devtools';
import nlsPlugin, { Languages, esbuildPluginMonacoEditorNls } from './vite-plugins/nls.js'
import zh_hans from './vite-plugins/zh.json'
const __dirname = import.meta.dirname;
export default defineConfig({
  base: '/',
  plugins: [
    VueDevTools(),
    vue(),
    // 生产环境汉化
    nlsPlugin({
      locale: Languages.zh_hans,
      localeData: zh_hans,
    }),
    UnoCSS(),
    (monacoEditorPlugin as any).default({
      languageWorkers: ['editorWorkerService', 'json', 'typescript'],
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        // 开发环境下通过esbuild插件进行汉化
        esbuildPluginMonacoEditorNls({
          locale: Languages.zh_hans,
          localeData: zh_hans,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 9980,
  },
});
