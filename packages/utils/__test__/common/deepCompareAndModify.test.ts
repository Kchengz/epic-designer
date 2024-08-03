import { describe, it, expect } from 'vitest';
import { deepCompareAndModify } from '../../';

describe('deepCompareAndModify', () => {
    it('应该将 obj2 的属性复制给 obj1', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 10, c: 3 };

        deepCompareAndModify(obj1, obj2);

        expect(obj1).toEqual({ a: 10, c: 3 });
    });

    it('应该递归复制嵌套对象的属性', () => {
        const obj1 = { a: { b: 1 } };
        const obj2 = { a: { b: 2, c: 3 } };

        deepCompareAndModify(obj1, obj2);

        expect(obj1).toEqual({ a: { b: 2, c: 3 } });
    });

    it('应该处理数组属性并递归复制', () => {
        const obj1 = { a: [1, 2] };
        const obj2 = { a: [3, 4, 5] };

        deepCompareAndModify(obj1, obj2);

        expect(obj1).toEqual({ a: [3, 4, 5] });
    });

    it('如果 shouldDelete 为 true，应该删除 obj1 中 obj2 不存在的属性', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        const obj2 = { a: 10, c: 30 };

        deepCompareAndModify(obj1, obj2, true);

        expect(obj1).toEqual({ a: 10, c: 30 });
    });

    it('如果 shouldDelete 为 false，不应删除 obj1 中 obj2 不存在的属性', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        const obj2 = { a: 10, c: 30 };

        deepCompareAndModify(obj1, obj2, false);

        expect(obj1).toEqual({ a: 10, c: 30, b: 2 });
    });

    it('应该正确处理 obj1 是数组的情况', () => {
        const obj1 = [1, 2, 3];
        const obj2 = [3, 4, 5];

        deepCompareAndModify(obj1, obj2);

        expect(obj1).toEqual([3, 4, 5]);
    });

    it('如果 obj1 的属性 a 是数组且 obj2 的属性 a 是对象，应将 obj1.a 变为对象', () => {
        const obj1 = { a: [1, 2, 3], b: 4 };
        const obj2 = { a: { x: 10, y: 20 } };

        deepCompareAndModify(obj1, obj2, false);
        expect(obj1).toEqual({ a: { x: 10, y: 20 }, b: 4 });
    });

    it('如果 obj1 的属性 a 是数组且 obj2 的属性 a 是对象，且 shouldDelete 为 true，应删除 obj1 中不在 obj2 中的属性', () => {
        const obj1 = { a: [1, 2, 3], b: 4, c: 5 };
        const obj2 = { a: { x: 10, y: 20 } };

        deepCompareAndModify(obj1, obj2, true);

        expect(obj1).toEqual({ a: { x: 10, y: 20 } });
    });

    it('如果 obj1 的属性 a 是数组且 obj2 的属性 a 是对象，且 shouldDelete 为 false，应保留 obj1 中不在 obj2 中的属性', () => {
        const obj1 = { a: [1, 2, 3], b: 4, c: 5 };
        const obj2 = { a: { x: 10, y: 20 } };

        deepCompareAndModify(obj1, obj2, false);

        expect(obj1).toEqual({ a: { x: 10, y: 20 }, b: 4, c: 5 });
    });
});
