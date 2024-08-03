import { describe, it, expect } from 'vitest';
import { deepClone } from '../../';

describe('deepClone', () => {
  it('应正确拷贝基本数据类型', () => {
    const num = 42;
    const str = 'hello';
    const bool = true;

    expect(deepClone(num)).toBe(num);
    expect(deepClone(str)).toBe(str);
    expect(deepClone(bool)).toBe(bool);
  });

  it('应正确拷贝对象和数组', () => {
    const obj = { a: 1, b: [2, 3], c: { d: 4 } };
    const clonedObj = deepClone(obj);

    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj); // 确保是深拷贝
    expect(clonedObj.b).not.toBe(obj.b);
    expect(clonedObj.c).not.toBe(obj.c);
  });

  it('应处理循环引用', () => {
    const obj: any = { a: 1 };
    obj.b = obj; // 循环引用

    const clonedObj = deepClone(obj);

    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj); // 确保是深拷贝
    expect(clonedObj.b).toBe(clonedObj); // 确保循环引用被正确处理
  });


  it('应处理空对象和空数组', () => {
    expect(deepClone({})).toEqual({});
    expect(deepClone([])).toEqual([]);
  });

});
