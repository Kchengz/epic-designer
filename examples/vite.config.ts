import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
// import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    // VueDevTools(),
    vue(),
    UnoCSS()
  ],
})
