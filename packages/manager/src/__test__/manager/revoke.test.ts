import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { DesignerState } from '@epic-designer/types';

import { useRevoke } from '../../';

describe('useRevoke', () => {
  // 模拟页面Schema和设计器状态
  const mockPageSchema = { schemas: [] };
  const mockState: DesignerState = { disabledHover: false, hoverNode: null, matched: [], selectedNode: null };
  const mockSetSelectedNode = vi.fn();

  beforeEach(() => {
    // 在每个测试前启用假定时器
    vi.useFakeTimers();
    // 重置所有模拟函数
    vi.clearAllMocks();
  });

  afterEach(() => {
    // 在每个测试后恢复真实定时器
    vi.useRealTimers();
  });

  it('应正确初始化', () => {
    const revoke = useRevoke(
      mockPageSchema,
      mockState,
      mockSetSelectedNode
    );
    
    expect(revoke.recordList.value).toHaveLength(0);
    expect(revoke.undoList.value).toHaveLength(0);
    expect(revoke.currentRecord.value).toBeNull();
  });

  it('应正确插入记录', () => {
    const revoke = useRevoke(
      mockPageSchema,
      mockState,
      mockSetSelectedNode
    );
    
    // 第一次push，currentRecord应该被设置，recordList应该为空
    revoke.push('插入组件');
    
    // 因为有防抖，所以需要等待200ms
    vi.advanceTimersByTime(200);

    expect(revoke.currentRecord.value).not.toBeNull();
    expect(revoke.currentRecord.value?.type).toBe('插入组件');
    expect(revoke.recordList.value).toHaveLength(0);
    
    // 模拟时间间隔
    vi.advanceTimersByTime(200);
    
    // 第二次push，之前的currentRecord应该被添加到recordList
    revoke.push('修改组件');
    vi.advanceTimersByTime(200);
    expect(revoke.currentRecord.value?.type).toBe('修改组件');
    expect(revoke.recordList.value).toHaveLength(1);
    expect(revoke.recordList.value[0].type).toBe('插入组件');
  });

  it('应正确撤销操作', () => {
    const revoke = useRevoke(
      mockPageSchema,
      mockState,
      mockSetSelectedNode
    );
    
    // 准备两条记录
    revoke.push('插入组件1');
    vi.advanceTimersByTime(200);
    revoke.push('插入组件2');
    vi.advanceTimersByTime(200);
    
    // 撤销操作
    revoke.undo();
    
    // 验证撤销结果
    expect(revoke.recordList.value).toHaveLength(0);
    expect(revoke.undoList.value).toHaveLength(1);
    expect(revoke.undoList.value[0].type).toBe('插入组件2');
    expect(revoke.currentRecord.value?.type).toBe('插入组件1');
    
    // 验证applyRecord被调用
    expect(mockSetSelectedNode).toHaveBeenCalled();
  });

  it('应正确重做操作', () => {
    const revoke = useRevoke(
      mockPageSchema,
      mockState,
      mockSetSelectedNode
    );
    
    // 准备记录并撤销
    revoke.push('插入组件1');
    vi.advanceTimersByTime(200);
    revoke.push('插入组件2');
    vi.advanceTimersByTime(200);
    revoke.undo();
    
    // 重置模拟函数计数
    mockSetSelectedNode.mockClear();
    
    // 执行重做
    revoke.redo();
    
    // 验证重做结果
    expect(revoke.recordList.value).toHaveLength(1);
    expect(revoke.recordList.value[0].type).toBe('插入组件1');
    expect(revoke.undoList.value).toHaveLength(0);
    expect(revoke.currentRecord.value?.type).toBe('插入组件2');
    
    // 验证applyRecord被调用
    expect(mockSetSelectedNode).toHaveBeenCalled();
  });

  it('当没有记录时撤销应返回false', () => {
    const revoke = useRevoke(
      mockPageSchema,
      mockState,
      mockSetSelectedNode
    );
    
    const result = revoke.undo();
    expect(result).toBe(false);
  });

  it('当没有重做记录时重做应返回false', () => {
    const revoke = useRevoke(
      mockPageSchema,
      mockState,
      mockSetSelectedNode
    );
    
    const result = revoke.redo();
    expect(result).toBe(false);
  });

  it('应正确重置所有记录', () => {
    const revoke = useRevoke(
      mockPageSchema,
      mockState,
      mockSetSelectedNode
    );
    
    // 准备记录
    revoke.push('插入组件1');
    vi.advanceTimersByTime(200);
    revoke.push('插入组件2');
    vi.advanceTimersByTime(200);
    // 执行重置
    revoke.reset();
    
    // 验证重置结果
    expect(revoke.recordList.value).toHaveLength(0);
    expect(revoke.undoList.value).toHaveLength(0);
    expect(revoke.currentRecord.value).toBeNull();
  });

  it('应处理加载数据的特殊情况', () => {
    const revoke = useRevoke(
      mockPageSchema,
      mockState,
      mockSetSelectedNode
    );
    
    // 先设置初始化记录
    revoke.push('初始化');
    // 然后加载数据
    revoke.push('加载数据');
    vi.advanceTimersByTime(200);
    
    // 验证结果 - 应该只更新currentRecord而不添加到recordList
    expect(revoke.recordList.value).toHaveLength(0);
    expect(revoke.currentRecord.value?.type).toBe('加载数据');
  });

  it('应限制记录数量不超过60条', () => {
    const revoke = useRevoke(
      mockPageSchema,
      mockState,
      mockSetSelectedNode
    );
    
    // 添加61条记录
    revoke.push('初始记录');
    
    for (let i = 0; i < 61; i++) {
      vi.advanceTimersByTime(200);
      revoke.push(`记录${i}`);
    }
    vi.advanceTimersByTime(200);
    
    // 验证结果 - recordList应该只有60条，最早的记录应该被移除
    expect(revoke.recordList.value).toHaveLength(60);
    expect(revoke.recordList.value[0].type).toBe('记录0');
    expect(revoke.currentRecord.value?.type).toBe('记录60');
  });

  it('应忽略短时间内的重复记录', () => {
    const revoke = useRevoke(
      mockPageSchema,
      mockState,
      mockSetSelectedNode
    );
    
    // 添加第一条记录
    revoke.push('记录1');
    
    // 短时间内添加第二条记录（不到150ms）
    vi.advanceTimersByTime(100);
    revoke.push('记录2');
    
    vi.advanceTimersByTime(200);
    // 验证结果 - 第一条记录应该被忽略
    expect(revoke.recordList.value).toHaveLength(0);
    expect(revoke.currentRecord.value?.type).toBe('记录2');
    
    // 足够时间后添加第三条记录
    vi.advanceTimersByTime(200);
    revoke.push('记录3');
    vi.advanceTimersByTime(200);
    
    // 验证结果 - 第三条记录应该被添加
    expect(revoke.recordList.value).toHaveLength(1);
    expect(revoke.recordList.value[0].type).toBe('记录2');
    expect(revoke.currentRecord.value?.type).toBe('记录3');
  });

  it('应正确获取可撤销和可重做的操作数量', () => {
    const revoke = useRevoke(
      mockPageSchema,
      mockState,
      mockSetSelectedNode
    );
    
    // 初始状态
    expect(revoke.getUndoCount()).toBe(0);
    expect(revoke.getRedoCount()).toBe(0);
    
    // 添加记录,第一条属于初始化记录
    revoke.push('记录1');
    vi.advanceTimersByTime(200);
    revoke.push('记录2');
    vi.advanceTimersByTime(200);
    
    // 添加记录后 - 应该有一条记录可以撤销（记录2）
    expect(revoke.getUndoCount()).toBe(1);
    expect(revoke.getRedoCount()).toBe(0);
    
    // 撤销操作
    revoke.undo();
    
    // 撤销后 - 应该有一条可以重做
    expect(revoke.getUndoCount()).toBe(0);
    expect(revoke.getRedoCount()).toBe(1);
    
    // // 重做操作
    // revoke.redo();
    
    // // 重做后 - 应该回到两条记录可以撤销
    // expect(revoke.getUndoCount()).toBe(2);
    // expect(revoke.getRedoCount()).toBe(0);
  });

  it('应正确处理reset方法', () => {
    const revoke = useRevoke(
      mockPageSchema,
      mockState,
      mockSetSelectedNode
    );
    
    // 添加一些记录
    revoke.push('记录1');
    vi.advanceTimersByTime(200);
    revoke.push('记录2');
    vi.advanceTimersByTime(200);
    
    // 验证记录已添加
    expect(revoke.recordList.value).toHaveLength(1);
    expect(revoke.currentRecord.value).not.toBeNull();
    
    // 执行重置
    revoke.reset();
    
    // 验证所有记录都被清空
    expect(revoke.recordList.value).toHaveLength(0);
    expect(revoke.undoList.value).toHaveLength(0);
    expect(revoke.currentRecord.value).toBeNull();
  });
});
