import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import VueDevTools from "vite-plugin-vue-devtools";
import monacoEditorPlugin from "vite-plugin-monaco-editor";
import { resolve } from "path";
export default defineConfig({
  base: "/",
  plugins: [
    VueDevTools(),
    vue(),
    UnoCSS(),
    (monacoEditorPlugin as any).default({
      languageWorkers: [
        "editorWorkerService",
        "css",
        "html",
        "json",
        "typescript",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
