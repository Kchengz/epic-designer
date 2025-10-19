// 字段状态类型
type FieldStateType = 'DISABLED' | 'HIDE' | 'READ' | 'WRITE';

// 单个字段状态规则
interface FieldState {
  /** 其他扩展属性（如权限标识、作用域等） */
  [key: string]: any;

  /**
   * 动态控制条件（可选）
   * @param formData - 当前表单数据
   * @returns 返回 true 时应用当前 state，否则忽略
   */
  condition?: (formData: any) => boolean;

  /** 字段路径（支持嵌套，如 "user.email" 或 "BAILOR.REAL_NAME"） */
  field: string;

  // 是否必填
  required?: boolean;

  /** 字段状态 */
  state: FieldStateType;
}

// 字段状态集合（数组形式）
export type FieldStates = FieldState[];

// 字段状态对象类型
export type FieldStateMap = {
  [fieldPath: string]: FieldState;
};
