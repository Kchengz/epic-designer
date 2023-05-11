import { describe, it, expect } from 'vitest'
function sum (a: number, b: number): number {
  return a + b
}

describe('test.vue', () => {
  it('测试加法', () => {
    expect(sum(2, 3)).toEqual(5)
  })
})
