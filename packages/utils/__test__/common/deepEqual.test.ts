import { describe, expect, it } from 'vitest';

import { deepEqual } from '../../';

describe('deepEqual', () => {
  it('应当返回 true 当两个简单对象相等时', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, c: 3 };

    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  it('应当返回 false 当两个简单对象不相等时', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, c: 4 };

    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  it('应当返回 true 当两个对象的嵌套结构相等时', () => {
    const obj1 = { a: { b: { c: 1 } } };
    const obj2 = { a: { b: { c: 1 } } };

    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  it('应当返回 false 当两个对象的嵌套结构不相等时', () => {
    const obj1 = { a: { b: { c: 1 } } };
    const obj2 = { a: { b: { c: 2 } } };

    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  it('应当返回 true 当两个数组相等时', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];

    expect(deepEqual(arr1, arr2)).toBe(true);
  });

  it('应当返回 false 当两个数组不相等时', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];

    expect(deepEqual(arr1, arr2)).toBe(false);
  });

  it('应当返回 true 当两个对象相等但属性顺序不同', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, c: 3 };

    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  it('应当返回 true 当两个对象相等且有环形引用时', () => {
    const obj1: any = { a: 1 };
    obj1.b = obj1;
    const obj2: any = { a: 1 };
    obj2.b = obj2;

    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  it('应当返回 false 当两个对象相等但一个有环形引用时', () => {
    const obj1: any = { a: 1 };
    obj1.b = obj1;
    const obj2 = { a: 1, b: obj1 };

    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  it('应当返回 true 当忽略指定属性时对象仍然相等', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2 };

    expect(deepEqual(obj1, obj2, ['c'])).toBe(true);
  });

  it('应当返回 false 当忽略指定属性时对象不相等', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 3 };

    expect(deepEqual(obj1, obj2, ['c'])).toBe(false);
  });

  it('应当返回 true 当忽略指定属性时对象仍然相等，且忽略的属性具有不同的值', () => {
    const obj1 = { a: { b: 1 }, c: 2 };
    const obj2 = { a: { b: 1 }, c: 3 };

    expect(deepEqual(obj1, obj2, ['c'])).toBe(true);
  });

  it('应当返回 true 当两个空对象相等时', () => {
    const obj1 = {};
    const obj2 = {};

    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  it('应当返回 false 当一个对象为空而另一个对象非空时', () => {
    const obj1 = {};
    const obj2 = { a: 1 };

    expect(deepEqual(obj1, obj2)).toBe(false);
  });
});
