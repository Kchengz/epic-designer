import { describe, expect, it } from 'vitest';

import { getUUID } from '../../';

describe('getUUID 函数测试', () => {
  it('应该生成指定长度的 UUID', () => {
    const length = 10;
    const uuid = getUUID(length);
    expect(uuid.length).toBe(length);
    expect(uuid).toMatch(/^[a-z0-9]+$/); // 验证 UUID 是由小写字母和数字组成
  });

  it('应该生成长度在 1 到 11 之间的 UUID', () => {
    for (let length = 1; length <= 11; length++) {
      const uuid = getUUID(length);
      expect(uuid.length).toBe(length);
    }
  });

  it('生成的 UUID 应该是唯一的', () => {
    const numTests = 1000; // 测试生成 UUID 的数量
    const uuids = new Set<string>();

    for (let i = 0; i < numTests; i++) {
      const uuid = getUUID();
      uuids.add(uuid);
    }

    expect(uuids.size).toBe(numTests);
  });
});
