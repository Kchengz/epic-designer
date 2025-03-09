import type { ComponentSchema } from '@epic-designer/core/types/epic-designer';

import { ref } from 'vue';

/**
历史记录模型
*/
export interface RecordModel {
  componentSchema: string;
  type: string;
}

/**
 撤销重做功能
 */
export function useRevoke() {
  // 历史记录
  const recordList = ref<RecordModel[]>([]);

  // 撤销记录，用于重做
  const undoList = ref<RecordModel[]>([]);

  // 当前记录用currentRecord变量暂时存储，当用户修改时，再存放到recordList
  const currentRecord = ref<null | RecordModel>(null);

  // 最后记录时间
  let lastPushTime = 0;
  /**
   * @description: 插入历史记录
   * @param {object}componentSchema
   * @return {boolean}
   */
  function push(componentSchema: ComponentSchema[], type = '插入组件'): void {
    // 加载数据前只有初始化记录时，直接使用加载的数据作为初始化记录
    if (type === '加载数据' && currentRecord.value?.type === '初始化') {
      // 将json转成字符串存储
      currentRecord.value = {
        componentSchema: JSON.stringify(componentSchema),
        type,
      };
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
      undoList.value.splice(0, undoList.value.length);
    }

    // 将json转成字符串存储
    currentRecord.value = {
      componentSchema: JSON.stringify(componentSchema),
      type,
    };

    // 最多存储60条记录，超过60条记录则删除之前的记录
    if (recordList.value.length > 60) {
      recordList.value.unshift();
    }
  }

  /**
   * @description: 撤销操作
   * @return {object}
   */
  function undo(): false | RecordModel {
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

    return JSON.parse(recordObj.componentSchema);
  }

  /**
   * @description: 重做操作
   * @return {*}
   */
  function redo(): false | RecordModel {
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
    return JSON.parse(recordObj.componentSchema);
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
