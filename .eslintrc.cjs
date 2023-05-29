module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'no-prototype-builtins': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        'brace-style': 'off',
        '@typescript-eslint/brace-style': 'off',
        'no-new-func': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-floating-promises': 'off'
      }
    },
    {
      files: ['vite.config.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off'
      }
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@babel/eslint-parser',
        plugins: [
          'vue'
        ]
      },
      rules: {
        'no-unused-vars': 'off',
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'no-prototype-builtins': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        'brace-style': 'off',
        '@typescript-eslint/brace-style': 'off',
        'no-new-func': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        'no-undef': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue', '.json']
  },
  plugins: [
    'vue'
  ],
  ignorePatterns: ['node_modules/**', 'dist/**', 'docs/**', '**/static/**', '*.json'],
  rules: {
    'vue/no-dupe-keys': 'error'
  }
}
