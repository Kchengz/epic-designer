import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue() as any],
  test: {
    environment: 'jsdom', // 确保设置了 jsdom 作为测试环境
  },
});
