import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'
export default defineConfig({
  plugins: [
    UnoCSS(),
    monacoEditorPlugin({
      languageWorkers:['editorWorkerService', 'css', 'html', 'json', 'typescript']
    })
  ],
})
