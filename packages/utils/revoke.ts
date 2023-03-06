
import { NodeItem } from "../types/kDesigner.d";
import { ref } from 'vue'

export interface recordModel {
  type: string;
  record: string;
}
/**
 撤销重做功能
 */
export function useRevoke() {
  // 历史记录
  const recordList = ref<recordModel[]>([]);

  // 撤销记录，用于重做
  const undoList = ref<recordModel[]>([]);

  // 当前记录用currentRecord变量暂时存储，当用户修改时，再存放到recordList
  const currentRecord = ref<recordModel | null>(null);

  /**
   * @description: 插入历史记录
   * @param {object}record
   * @return {boolean}
   */
  function push(record: NodeItem[], type = "插入组件") {
    // 判断之前是否已经存在currentRecord记录，有则存储到recordList
    if (currentRecord.value) {
      recordList.value.push(currentRecord.value);
      // 增加记录后则应该清空重做记录
      undoList.value.splice(0, undoList.value.length);
    }

    // 将json转成字符串存储
    currentRecord.value = {
      type,
      record: JSON.stringify(record)
    };

    // 最多存储20条记录，超过20条记录则删除之前的记录
    if (recordList.value.length > 20) {
      recordList.value.unshift();
    }

    return true;
  }

  /**
   * @description: 撤销操作
   * @param {*}
   * @return {object}
   */
  function undo() {
    // 没有记录时,返回false
    if (recordList.value.length === 0) {
      return false;
    }
    const recordObj = recordList.value.pop() as recordModel;

    // 将当前记录添加到重做记录里面
    if (currentRecord.value) {
      undoList.value.push(currentRecord.value);
    }
    // 丢弃当前记录，防止重复添加
    currentRecord.value = recordObj;

    return JSON.parse(recordObj.record);
  }

  /**
   * @description: 重做操作
   * @param {*}
   * @return {*}
   */
  function redo() {
    // 没有重做记录时,返回false
    if (undoList.value.length === 0) {
      return false;
    }

    const recordObj = undoList.value.pop() as recordModel;
    // 添加到重做记录里面
    if (currentRecord.value) {
      recordList.value.push(currentRecord.value);
    }
    // 丢弃当前记录，防止重复添加
    currentRecord.value = recordObj;
    return JSON.parse(recordObj.record);
  }

  return {
    recordList,
    undoList,
    currentRecord,
    push,
    undo,
    redo,
  }
}

export const revoke = useRevoke();
