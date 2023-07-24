import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'
// import eslintPlugin from 'vite-plugin-eslint'
import UnoCSS from 'unocss/vite'
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true
      }
    }),
    UnoCSS(),
    dts({
      entryRoot: './',
      outDir: 'dist'
    }) as PluginOption
    // eslintPlugin({
    //   include: [
    //     'packages/**/*.ts',
    //     'packages/**/*.vue',
    //     'packages/*.ts',
    //     'packages/*.vue'
    //   ],
    //   cache: true
    // })
  ],
  resolve: {
    dedupe: ['vue']
  },
  // 单元测试配置
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   transformMode: {
  //     web: [/.[tj]sx$/]
  //   }
  // },
  // rollup打包配置
  build: {
    outDir: 'dist', // 输出文件名称
    lib: {
      entry: {
        index: path.resolve(__dirname, './index.ts')
      },
      // 指定组件编译入口文件
      name: 'epic-designer'
      // formats: ["es"],
      // fileName: (ModuleFormat) => {
      //   const extension = ModuleFormat === 'es' ? 'js' : ModuleFormat
      //   // 区分默认入口文件和UI注册文件
      //   const path = `epic-designer.${extension}`
      //   return path
      // }
    },
    // 库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    commonjsOptions: {
      esmExternals: true
    }
  }
})
