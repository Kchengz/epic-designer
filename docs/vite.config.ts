import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
// import monacoEditorPlugin from "vite-plugin-monaco-editor";

export default defineConfig({
  plugins: [
    UnoCSS(),
    // (monacoEditorPlugin as any).default({
    //   languageWorkers: [
    //     "editorWorkerService",
    //     "css",
    //     "html",
    //     "json",
    //     "typescript",
    //   ],
    // }),
  ],
});
