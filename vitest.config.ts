import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // 确保设置了 jsdom 作为测试环境
  },
});
