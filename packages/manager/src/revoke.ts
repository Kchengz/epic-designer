import type {
  ComponentSchema,
  DesignerState,
  PageSchema,
} from '@epic-designer/types';

import { ref } from 'vue';

import {
  debounce,
  deepCompareAndModify,
  findSchemaById,
} from '@epic-designer/utils';

/**
 * 历史记录模型 - 用于存储页面状态的快照
 */
export interface RecordModel {
  /** 页面架构的JSON字符串表示 */
  pageSchema: string;
  /** 当前选中组件的ID，用于恢复选中状态 */
  selectedId?: string;
  /** 记录创建时间戳 */
  timestamp: number;
  /** 操作类型描述，如"添加组件"、"删除组件"等 */
  type: string;
}

/**
 * 撤销重做功能 - 提供完整的操作历史管理
 * @description 通过保存页面状态的快照实现撤销和重做功能
 * @param pageSchema - 当前页面架构对象（响应式）
 * @param state - 设计器状态对象
 * @param setSelectedNode - 设置当前选中节点的回调函数
 * @returns 撤销重做相关的操作方法和状态
 */
export function useRevoke(
  pageSchema: PageSchema,
  state: DesignerState,
  setSelectedNode: (schema?: ComponentSchema) => void,
) {
  /** 历史记录列表，按时间顺序存储所有操作记录 */
  const recordList = ref<RecordModel[]>([]);

  /** 撤销记录列表，用于重做操作（存储被撤销的记录） */
  const undoList = ref<RecordModel[]>([]);

  /**
   * 当前暂存记录
   * @description 用于临时存储当前状态，当有新操作时再正式推入历史记录
   */
  const currentRecord = ref<null | RecordModel>(null);

  /** 最大历史记录数量限制，防止内存占用过大 */
  const MAX_RECORDS = 60;

  /** 防抖时间间隔，避免频繁记录（毫秒） */
  const DEBOUNCE_TIME = 200;

  /**
   * 应用历史记录到当前页面
   * @description 将存储的历史状态还原到页面架构中，并恢复选中状态
   * @param record - 要应用的历史记录对象
   */
  const applyRecord = (record: RecordModel): void => {
    try {
      // 解析存储的页面架构
      const parsedSchema = JSON.parse(record.pageSchema);

      // 使用深度比较和修改算法，高效更新页面架构
      deepCompareAndModify(pageSchema, parsedSchema);

      // 恢复历史记录时的选中状态
      const selectedNode = record.selectedId
        ? findSchemaById(pageSchema.schemas, record.selectedId)
        : undefined;

      // 通过回调通知外部更新选中节点
      setSelectedNode(selectedNode ?? undefined);
    } catch (error) {
      console.error('解析历史记录失败:', error);
    }
  };

  /**
   * 创建当前状态的记录快照
   * @param type - 操作类型描述
   * @returns 包含当前完整状态的历史记录对象
   */
  const createRecord = (type: string): RecordModel => ({
    pageSchema: JSON.stringify(pageSchema),
    selectedId: state.selectedNode?.id,
    timestamp: Date.now(),
    type,
  });

  // 防抖处理：忽略过于频繁的操作记录（重要操作跳过防抖）
  const debounceCommit = debounce<(type: any) => void>(
    commitCurrentState,
    DEBOUNCE_TIME,
  );

  /**
   * 添加新的历史记录
   * @description 将当前状态保存为历史记录，支持防抖和数量限制
   * @param type - 操作类型描述，默认为"插入组件"
   * @param isImportant - 是否为重要操作，重要操作会跳过防抖直接记录，默认为false
   */
  function push(type = '插入组件', isImportant = false): void {
    // 特殊处理：如果是加载数据操作且当前只有初始化记录
    if (type === '加载数据' && currentRecord.value?.type === '初始化') {
      currentRecord.value = createRecord(type);
      return;
    }

    if (isImportant) {
      commitCurrentState(type);
      return;
    }
    debounceCommit(type);
  }

  /**
   * 提交当前状态到历史记录
   * @description 将当前暂存的状态正式记录到历史记录中，并创建新的暂存状态
   * @param type - 操作类型描述
   */
  function commitCurrentState(type: string): void {
    // 将当前暂存记录推入历史记录列表
    if (currentRecord.value !== null) {
      recordList.value.push(currentRecord.value);
      // 新增记录后清空重做列表（因为历史分支已改变）
      undoList.value = [];
    }

    // 创建新的暂存记录
    currentRecord.value = createRecord(type);

    // 限制历史记录数量，超出时移除最早记录
    if (recordList.value.length > MAX_RECORDS) {
      recordList.value.shift();
    }
  }

  /**
   * 撤销操作
   * @description 将页面状态回退到上一个历史记录点
   * @returns 是否成功撤销（有历史记录时返回true）
   */
  function undo(): boolean {
    if (recordList.value.length === 0) {
      return false;
    }

    // 取出最后一条历史记录
    const recordObj = recordList.value.pop() as RecordModel;

    // 将当前状态保存到重做列表
    if (currentRecord.value !== null) {
      undoList.value.push(currentRecord.value);
    }

    // 应用上一条历史记录
    currentRecord.value = recordObj;
    applyRecord(recordObj);
    return true;
  }

  /**
   * 重做操作
   * @description 重新应用被撤销的操作
   * @returns 是否成功重做（有重做记录时返回true）
   */
  function redo(): boolean {
    if (undoList.value.length === 0) {
      return false;
    }

    // 取出最后一条重做记录
    const recordObj = undoList.value.pop() as RecordModel;

    // 将当前状态保存回历史记录
    if (currentRecord.value !== null) {
      recordList.value.push(currentRecord.value);
    }

    // 应用重做记录
    currentRecord.value = recordObj;
    applyRecord(recordObj);
    return true;
  }

  /**
   * 重置所有历史记录
   * @description 清空所有历史记录和重做记录，恢复到初始状态
   */
  function reset(): void {
    recordList.value = [];
    undoList.value = [];
    currentRecord.value = null;
  }

  /**
   * 获取可撤销的操作数量
   * @returns 当前可撤销的历史记录数量
   */
  const getUndoCount = (): number => recordList.value.length;

  /**
   * 获取可重做的操作数量
   * @returns 当前可重做的操作数量
   */
  const getRedoCount = (): number => undoList.value.length;

  /**
   * 导出历史记录数据
   * @description 将当前所有历史记录导出为可序列化的格式，用于存储到数据库
   */
  const exportHistory = (): {
    currentRecord: null | RecordModel;
    recordList: RecordModel[];
    undoList: RecordModel[];
  } => ({
    currentRecord: currentRecord.value,
    recordList: [...recordList.value],
    undoList: [...undoList.value],
  });

  /**
   * 导入历史记录数据
   * @description 从数据库中恢复历史记录状态
   */
  const importHistory = (historyData: {
    currentRecord: null | RecordModel;
    recordList: RecordModel[];
    undoList: RecordModel[];
  }): void => {
    recordList.value = [...historyData.recordList];
    undoList.value = [...historyData.undoList];
    currentRecord.value = historyData.currentRecord;

    // 如果有当前记录，应用它以确保页面状态同步
    if (historyData.currentRecord) {
      applyRecord(historyData.currentRecord);
    }
  };

  /**
   * 预览历史记录
   * @description 临时应用指定的历史记录，但不改变当前的历史记录栈
   * @param record - 要预览的历史记录
   * @returns 恢复函数，调用后可回到预览前的状态
   */
  const previewHistory = (record: RecordModel): (() => void) => {
    // 保存当前状态，以便后续恢复
    const tempCurrent = currentRecord.value;

    // 应用要预览的记录
    applyRecord(record);

    // 返回一个函数，用于恢复到预览前的状态
    return () => {
      if (tempCurrent) {
        applyRecord(tempCurrent);
      }
    };
  };

  return {
    currentRecord,
    exportHistory,
    getRedoCount,
    getUndoCount,
    importHistory,
    previewHistory,
    push,
    recordList,
    redo,
    reset,
    undo,
    undoList,
  };
}

export type Revoke = ReturnType<typeof useRevoke>;
