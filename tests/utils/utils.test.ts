import { describe, it, expect } from "vitest";
import { deepCompareAndModify } from "../../packages/utils";

describe("utils.ts", () => {
  it("深度赋值对象 -> deepCompareAndModify", () => {
    const obj1:Record<string, any> = { name: "小王", age: 12, home: {} };
    const obj2 = { name: "小黎", gender: "男", home: { lo: "23" } };
    deepCompareAndModify(obj1, obj2);
    expect(obj1.name === "小黎").toEqual(true);
    expect(obj1.age === 12).toEqual(false);
    expect(obj1.home.lo === "23").toEqual(true);
  });
});
