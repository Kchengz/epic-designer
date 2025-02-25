import { shikiToMonaco } from '@shikijs/monaco';
import * as monaco from 'monaco-editor';
import { createHighlighterCore } from 'shiki/core';
import langVue from 'shiki/langs/vue.mjs';
import themeDark from 'shiki/themes/dark-plus.mjs';
import themeLight from 'shiki/themes/light-plus.mjs';

export async function registerHighlighter() {
  const highlighter = await createHighlighterCore({
    langs: [langVue],
    loadWasm: import('shiki/wasm'),
    themes: [themeDark, themeLight],
  });
  monaco.languages.register({ id: 'vue' });
  shikiToMonaco(highlighter, monaco);
  return {
    dark: themeDark.name,
    light: themeLight.name,
  };
}
