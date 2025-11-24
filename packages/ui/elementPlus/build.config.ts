import alias from '@rollup/plugin-alias';
import vue from '@vitejs/plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  // 让 unbuild 处理类型生成
  declaration: true,
  entries: ['./src/index'],
  externals: ['vue', 'element-plus', 'epic-designer'],
  // 确保 .vue 文件被正确处理
  failOnWarn: false,
  hooks: {
    'rollup:options': function (ctx, options) {
      if (!options.plugins) options.plugins = [];

      options.plugins.push(
        vue({
          include: [/\.vue$/],
          script: {
            // 脚本处理选项
            defineModel: true, // 支持 defineModel
          },
          // Vue 插件配置
          template: {
            compilerOptions: {
              // 模板编译选项
            },
          },
        }),
        postcss({
          extensions: ['.css', '.less'],
          inject: true,
          use: ['less'],
        }),
        alias({
          entries: [
            {
              find: '@epic-designer/manager',
              replacement: 'epic-designer',
            },
            {
              find: '@epic-designer/types',
              replacement: 'epic-designer',
            },
            {
              find: '@epic-designer/utils',
              replacement: 'epic-designer',
            },
          ],
        }),
      );
    },
  },
  rollup: {
    emitCJS: true,
    esbuild: {
      loaders: {
        '.ts': 'ts',
        '.vue': 'ts',
      },
      target: 'es2018',
    },
  },
});
