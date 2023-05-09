import { describe, it, expect } from "vitest";
function sum(a, b) {
  return a + b;
}

describe("test.vue", () => {
  // test('jjjj',()=>{})
  it("测试加法", () => {
    expect(sum(2, 3)).toEqual(5);
  });


});
