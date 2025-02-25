import { resolve } from 'node:path';

import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';
import VueDevTools from 'vite-plugin-vue-devtools';

const __dirname = import.meta.dirname;
export default defineConfig({
  base: '/',
  plugins: [
    VueDevTools(),
    vue(),
    UnoCSS(),
    (monacoEditorPlugin as any).default({
      languageWorkers: ['editorWorkerService', 'json', 'typescript'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 9980,
  },
});
