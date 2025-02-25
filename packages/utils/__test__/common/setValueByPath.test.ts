import { describe, expect, it } from 'vitest';

import { setValueByPath } from '../../';

describe('setValueByPath 函数测试', () => {
  it('应该在对象中设置值', () => {
    const obj = {
      user: {
        profile: {
          name: 'John Doe',
        },
      },
    };

    const updatedObj = setValueByPath(obj, 'user.profile.name', 'Jane Doe');
    expect(updatedObj.user.profile.name).toBe('Jane Doe');
  });

  it('应该在不存在的路径中创建新对象', () => {
    const obj = {};

    const updatedObj = setValueByPath(
      obj,
      'user.profile.address.city',
      'New York',
    );
    expect(updatedObj.user.profile.address.city).toBe('New York');
  });

  it('应该在数组路径中设置值', () => {
    const obj = {
      user: {
        profiles: [],
      },
    };

    const updatedObj = setValueByPath(obj, 'user.profiles[0].name', 'John Doe');
    expect(updatedObj.user.profiles[0].name).toBe('John Doe');
  });

  it('应该处理路径中包含数组索引的情况', () => {
    const obj = {
      users: [{ name: 'User1' }, { name: 'User2' }],
    };

    const updatedObj = setValueByPath(obj, 'users[1].name', 'Updated User2');
    expect(updatedObj.users[1].name).toBe('Updated User2');
  });

  it('应该在深层嵌套路径中设置值', () => {
    const obj = {
      a: {
        b: {
          c: {},
        },
      },
    };

    const updatedObj = setValueByPath(obj, 'a.b.c.d.e', 'value');
    expect(updatedObj.a.b.c.d.e).toBe('value');
  });

  it('应该处理路径中包含数字的情况', () => {
    const obj = {
      items: [],
    };

    const updatedObj = setValueByPath(obj, 'items[2].name', 'Item3');
    expect(updatedObj.items[2].name).toBe('Item3');
  });
});
