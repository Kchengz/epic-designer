import presetRemToPx from '@unocss/preset-rem-to-px';
// uno.config.ts
import { defineConfig, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
  content: {
    pipeline: {
      exclude: [
        'node_modules',
        'dist',
        '.git',
        '.husky',
        '.vscode',
        'public',
        'build',
        'mock',
        './stats.html',
      ],
    },
  },
  presets: [presetUno({ dark: 'class' }), presetRemToPx()],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'wh-full': 'w-full h-full',
  },
  theme: {
    colors: {},
  },
  transformers: [transformerDirectives()],
  variants: [
    (matcher) => ({
      matcher,
      selector: (s) => `.epic-scoped ${s}`,
    }),
  ],
});
