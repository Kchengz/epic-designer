// uno.config.ts
import { defineConfig, presetUno, presetAttributify, transformerDirectives } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  exclude: [
    'node_modules',
    'dist',
    '.git',
    '.husky',
    '.vscode',
    'public',
    'build',
    'mock',
    './stats.html'
  ],
  presets: [
    presetUno({ dark: 'class' }),
    presetRemToPx(),
  ],
  variants: [
    (matcher) => ({
      matcher,
      selector: (s) => `.epic-scoped ${s}`,
    }),
  ],
  transformers: [transformerDirectives()],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
  },
  theme: {
    colors: {
    }
  },
})
