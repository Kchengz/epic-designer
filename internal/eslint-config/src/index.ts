import type { Linter } from 'eslint';

import {
  command,
  comments,
  disableds,
  ignores,
  importPluginConfig,
  javascript,
  jsdoc,
  jsonc,
  node,
  perfectionist,
  prettier,
  regexp,
  test,
  turbo,
  typescript,
  unicorn,
  vue,
} from './configs';

type FlatConfig = Linter.Config;

type FlatConfigPromise =
  | FlatConfig
  | FlatConfig[]
  | Promise<FlatConfig>
  | Promise<FlatConfig[]>;

async function defineConfig(config: FlatConfig[] = []) {
  const configs: FlatConfigPromise[] = [
    vue(),
    javascript(),
    ignores(),
    prettier(),
    typescript(),
    jsonc(),
    disableds(),
    importPluginConfig(),
    node(),
    perfectionist(),
    comments(),
    jsdoc(),
    unicorn(),
    test(),
    regexp(),
    command(),
    turbo(),
    ...config,
    {
      rules: {
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-unsafe-function-type': 'off',
        'no-console': 'off',
        'unicorn/explicit-length-check': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-await-expression-member': 'off',
        'unicorn/no-nested-ternary': 'off',
        'unicorn/prefer-blob-reading-methods': 'off',
        'vue/no-mutating-props': 'off',
        'vue/no-reserved-props': 'off',
      },
    },
  ];

  const resolved = await Promise.all(configs);

  return resolved.flat();
}

export { defineConfig };
