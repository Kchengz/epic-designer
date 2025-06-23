import type {
  ComponentSchema,
  DesignerState,
  PageSchema,
} from '@epic-designer/types';

import { shallowRef } from 'vue';

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
  // 历史记录
  const recordList = shallowRef<RecordModel[]>([]);

  // 撤销记录，用于重做
  const undoList = shallowRef<RecordModel[]>([]);

  // 当前记录用currentRecord变量暂时存储，当用户修改时，再存放到recordList
  const currentRecord = shallowRef<null | RecordModel>(null);

  // 最后记录时间
  let lastPushTime = 0;

  /**
   * @description: 将当前页面状态应用到pageSchema
   * @param {object} record - 记录对象
   */
  const applyRecord = (record: RecordModel): void => {
    try {
      deepCompareAndModify(pageSchema, JSON.parse(record.pageSchema));

      const selectedNode = record.selectedId
        ? findSchemaById(pageSchema.schemas, record.selectedId)
        : undefined;

      setSelectedNode(selectedNode || undefined);
    } catch (error) {
      console.error('解析历史记录失败:', error);
    }
  };

  /**
   * @description: 插入历史记录
   * @param {string} type - 操作类型
   * @return {void}
   */
  function push(type = '插入组件'): void {
    // 加载数据前只有初始化记录时，直接使用加载的数据作为初始化记录
    if (type === '加载数据' && currentRecord.value?.type === '初始化') {
      // 将json转成字符串存储
      currentRecord.value = {
        pageSchema: JSON.stringify(pageSchema),
        selectedId: state.selectedNode?.id,
        type,
      };
      return;
    }

    const nowTime = Date.now();
    // 忽略低于150ms时间差的记录
    if (lastPushTime + 150 > nowTime) {
      return;
    }
    lastPushTime = nowTime;

    // 判断之前是否已经存在currentRecord记录，有则存储到recordList
    if (currentRecord.value !== null) {
      recordList.value.push(currentRecord.value);
      // 增加记录后则应该清空重做记录
      undoList.value = [];
    }

    // 将json转成字符串存储
    currentRecord.value = {
      pageSchema: JSON.stringify(pageSchema),
      selectedId: state.selectedNode?.id,
      type,
    };

    // 最多存储60条记录，超过60条记录则删除之前的记录
    if (recordList.value.length > 60) {
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

    const recordObj = recordList.value.pop() as RecordModel;

    // 将当前记录添加到重做记录里面
    if (currentRecord.value !== null) {
      undoList.value.push(currentRecord.value);
    }

    // 丢弃当前记录，防止重复添加
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

    const recordObj = undoList.value.pop() as RecordModel;

    // 添加到重做记录里面
    if (currentRecord.value !== null) {
      recordList.value.push(currentRecord.value);
    }

    // 丢弃当前记录，防止重复添加
    currentRecord.value = recordObj;
    applyRecord(recordObj);
    return true;
  }

  /**
   * @description: 重置
   * @return {void}
   */
  function reset(): void {
    recordList.value = [];
    undoList.value = [];
    currentRecord.value = null;
  }

  return {
    currentRecord,
    push,
    recordList,
    redo,
    reset,
    undo,
    undoList,
  };
}

export type Revoke = ReturnType<typeof useRevoke>;
