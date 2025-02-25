import { describe, expect, it, vi } from 'vitest';

import { debounce } from '../../';

describe('debounce', () => {
  it('应在指定延迟时间后调用处理函数', () => {
    const handler = vi.fn(); // 创建一个模拟函数
    const delay = 100;
    const debouncedFunction = debounce(handler, delay);

    // 立即调用防抖函数
    debouncedFunction();

    // 验证处理函数尚未被调用
    expect(handler).not.toHaveBeenCalled();

    // 等待一段时间稍长于延迟
    return new Promise((resolve) => setTimeout(resolve, delay + 10)).then(
      () => {
        // 验证处理函数在延迟后被调用
        expect(handler).toHaveBeenCalled();
      },
    );
  });

  it('如果在延迟时间内多次调用，处理函数应仅调用一次', () => {
    const handler = vi.fn();
    const delay = 100;
    const debouncedFunction = debounce(handler, delay);

    // 快速多次调用防抖函数
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();

    // 验证处理函数尚未被调用
    expect(handler).not.toHaveBeenCalled();

    // 等待延迟时间
    return new Promise((resolve) => setTimeout(resolve, delay + 10)).then(
      () => {
        // 验证处理函数仅被调用一次
        expect(handler).toHaveBeenCalledTimes(1);
      },
    );
  });
});
