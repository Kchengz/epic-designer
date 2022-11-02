import { describe, it, expect } from "vitest";
import { pluginManager } from '../packages/utils'
function sum(a, b) {
  return a + b;
}

describe("test.vue", () => {
  // test('jjjj',()=>{})
  it("测试加法", () => {
    expect(sum(2, 3)).toEqual(5);
  });

  it("test plugin add and get", () => {
    pluginManager.addComponent('test',111)
    console.log(pluginManager.getComponents())
    expect(pluginManager.getComponents()['test'].component).toEqual(111);
  });
});
