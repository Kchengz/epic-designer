import type {
  ComponentSchema,
  DesignerState,
  PageSchema,
} from '@epic-designer/types';

import { effectScope, ref } from 'vue';

import { deepCompareAndModify, findSchemaById } from '../index';
/**
 * 历史记录模型
 */
export interface RecordModel {
  pageSchema: string;
  selectedId?: string; // 添加选中组件ID字段
  type: string;
}

/**
 * 撤销重做功能
 */
export function useRevoke(
  pageSchema: PageSchema,
  state: DesignerState,
  setSelectedNode: (schema?: ComponentSchema) => void,
) {
  // 使用effectScope来管理所有的响应式效果
  const scope = effectScope();

  // 历史记录
  const recordList = ref<RecordModel[]>([]);

  // 撤销记录，用于重做
  const undoList = ref<RecordModel[]>([]);

  // 当前记录用currentRecord变量暂时存储，当用户修改时，再存放到recordList
  const currentRecord = ref<null | RecordModel>(null);

  // 最大记录数量
  const MAX_RECORDS = 60;

  // 记录防抖时间(ms)
  const DEBOUNCE_TIME = 150;

  // 最后记录时间
  let lastPushTime = 0;

  /**
   * @description: 将当前页面状态应用到pageSchema
   * @param {object} record - 记录对象
   */
  const applyRecord = (record: RecordModel): void => {
    try {
      // 使用JSON.parse解析存储的页面架构
      const parsedSchema = JSON.parse(record.pageSchema);

      // 应用变更到当前页面架构
      deepCompareAndModify(pageSchema, parsedSchema);

      // 恢复选中状态
      const selectedNode = record.selectedId
        ? findSchemaById(pageSchema.schemas, record.selectedId)
        : undefined;

      setSelectedNode(selectedNode ?? undefined);
    } catch (error) {
      console.error('解析历史记录失败:', error);
    }
  };

  /**
   * @description: 创建当前状态的记录
   * @param {string} type - 操作类型
   * @return {RecordModel} 记录对象
   */
  const createRecord = (type: string): RecordModel => {
    return {
      pageSchema: JSON.stringify(pageSchema),
      selectedId: state.selectedNode?.id,
      type,
    };
  };

  /**
   * @description: 插入历史记录
   * @param {string} type - 操作类型
   * @return {void}
   */
  function push(type = '插入组件'): void {
    // 特殊情况：加载数据前只有初始化记录时，直接使用加载的数据作为初始化记录
    if (type === '加载数据' && currentRecord.value?.type === '初始化') {
      currentRecord.value = createRecord(type);
      return;
    }

    const nowTime = Date.now();
    // 防抖：忽略低于设定时间差的记录
    if (lastPushTime + DEBOUNCE_TIME > nowTime) {
      return;
    }
    lastPushTime = nowTime;

    // 将当前记录添加到历史记录中
    if (currentRecord.value !== null) {
      recordList.value.push(currentRecord.value);
      // 增加新记录后清空重做记录
      undoList.value = [];
    }

    // 创建新的当前记录
    currentRecord.value = createRecord(type);

    // 限制记录数量，超过最大数量则删除最早的记录
    if (recordList.value.length > MAX_RECORDS) {
      recordList.value.shift();
    }
  }

  /**
   * @description: 撤销操作
   * @return {boolean} 是否成功撤销
   */
  function undo(): boolean {
    // 没有记录时,返回false
    if (recordList.value.length === 0) {
      return false;
    }

    // 从历史记录中取出最后一条
    const recordObj = recordList.value.pop() as RecordModel;

    // 将当前记录添加到重做记录里面
    if (currentRecord.value !== null) {
      undoList.value.push(currentRecord.value);
    }

    // 更新当前记录并应用
    currentRecord.value = recordObj;
    applyRecord(recordObj);
    return true;
  }

  /**
   * @description: 重做操作
   * @return {boolean} 是否成功重做
   */
  function redo(): boolean {
    // 没有重做记录时,返回false
    if (undoList.value.length === 0) {
      return false;
    }

    // 从重做记录中取出最后一条
    const recordObj = undoList.value.pop() as RecordModel;

    // 将当前记录添加到历史记录里面
    if (currentRecord.value !== null) {
      recordList.value.push(currentRecord.value);
    }

    // 更新当前记录并应用
    currentRecord.value = recordObj;
    applyRecord(recordObj);
    return true;
  }

  /**
   * @description: 重置所有记录
   * @return {void}
   */
  function reset(): void {
    recordList.value = [];
    undoList.value = [];
    currentRecord.value = null;
  }

  /**
   * @description: 获取当前可撤销的操作数量
   * @return {number} 可撤销的操作数量
   */
  function getUndoCount(): number {
    return recordList.value.length;
  }

  /**
   * @description: 获取当前可重做的操作数量
   * @return {number} 可重做的操作数量
   */
  function getRedoCount(): number {
    return undoList.value.length;
  }

  // 清理函数，在组件卸载时调用
  function dispose() {
    scope.stop();
    reset();
  }

  return {
    currentRecord,
    dispose,
    getRedoCount,
    getUndoCount,
    push,
    recordList,
    redo,
    reset,
    undo,
    undoList,
  };
}

export type Revoke = ReturnType<typeof useRevoke>;
