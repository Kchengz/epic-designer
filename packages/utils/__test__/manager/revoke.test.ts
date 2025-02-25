import { describe, it, expect } from 'vitest'
import { useRevoke } from '../../'

describe('useRevoke', () => {
  it('应正确插入记录', () => {
    const { recordList, push, undoList, currentRecord } = useRevoke()

    const mockSchema1 = [{ type: 'component1' }]
    const mockSchema2 = [{ type: 'component2' }]
    push(mockSchema1, '插入组件')
    setTimeout(() => {
      // 延迟插入新记录
      push(mockSchema2, '插入组件')
      // 断言 recordList 中应包含一条记录
      expect(recordList.value).toHaveLength(1)

      // 未通过测试
      expect(recordList.value[0].type).toBe('component1')
      expect(JSON.parse(recordList.value[0].componentSchema)).toEqual(mockSchema1)
      // 断言 undoList 应为空
      expect(undoList.value).toHaveLength(0)
      // 断言 currentRecord 不为空
      expect(currentRecord.value).not.toBeNull()
    }, 200)

  })
  it('应正确撤销操作', () => {
    const { recordList, push, undo, redo, currentRecord, undoList } = useRevoke()

    const mockSchema1 = [{ type: 'component1' }]
    const mockSchema2 = [{ type: 'component2' }]

    // 插入两条记录
    push(mockSchema1, '插入组件1')
    setTimeout(() => {
      // 延迟插入新记录
      push(mockSchema2, '插入组件2')

      // 断言 recordList 中应包含两条记录
      expect(recordList.value).toHaveLength(1)
      expect(currentRecord.value).not.toBeNull()

      const result = undo()

      // 断言撤销后的结果应为第二条记录的组件 schema
      expect(result).toEqual(mockSchema2)
      // 断言 recordList 中应只剩下第一条记录
      expect(recordList.value).toHaveLength(0)
      // 断言 undoList 中应包含撤销的记录
      expect(undoList.value).toHaveLength(1)
      // 断言 currentRecord 不为空
      expect(currentRecord.value).not.toBeNull()
    }, 200)

  })

  it('应正确重做操作', () => {
    const { recordList, push, undo, redo, currentRecord, undoList } = useRevoke()

    const mockSchema1 = [{ type: 'component1' }]
    const mockSchema2 = [{ type: 'component2' }]

    // 插入记录并进行撤销
    push(mockSchema1, '插入组件1')
    setTimeout(() => {
      // 延迟插入新记录
      push(mockSchema2, '插入组件2')
      undo()

      // 断言撤销操作后，undoList 中应包含撤销的记录
      expect(undoList.value).toHaveLength(1)
      // 执行重做操作
      const result = redo()

      // 断言重做后的结果应为撤销的记录
      expect(result).toEqual(mockSchema2)
      // 断言 recordList 中应包含重做的记录
      expect(recordList.value).toHaveLength(2)
      // 断言 undoList 中应为空
      expect(undoList.value).toHaveLength(0)
      // 断言 currentRecord 不为空
      expect(currentRecord.value).not.toBeNull()
    }, 200)
  })

  it('应正确重置所有记录', () => {
    const { recordList, push, undo, redo, reset, currentRecord, undoList } = useRevoke()

    const mockSchema1 = [{ type: 'component1' }]
    const mockSchema2 = [{ type: 'component2' }]

    // 插入记录
    push(mockSchema1, '插入组件1')
    push(mockSchema2, '插入组件2')
    undo()

    // 执行重置操作
    reset()

    // 断言所有记录都应被清空
    expect(recordList.value).toHaveLength(0)
    expect(undoList.value).toHaveLength(0)
    expect(currentRecord.value).toBeNull()
  })
})
