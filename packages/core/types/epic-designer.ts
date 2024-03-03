import { type FormItemRule } from "../extensions/ERuleEditor/types";
export interface RenderCallbackParams {
  values: Record<string, any>;
}

export interface ComponentSchema {
  // 节点ID，可选
  id?: string;
  // 节点类型，必选
  type: string;
  // 节点标签，可选
  label?: string;
  // 节点字段，可选
  field?: string;
  // 组件属性，可选
  componentProps?: any;
  // 插槽名称（组件为插槽类型时，需要设置插槽name），可选
  slotName?: string;
  // 分组名称（组件分组），可选
  groupName?: string;
  // 表单验证规则，可选
  rules?: FormItemRule[];
  // 是否无需表单项，可选
  noFormItem?: boolean;
  // 是否为表单输入组件，可选
  input?: boolean;
  // 是否固定不可拖动，可选
  immovable?: boolean;
  // 子节点是否固定不不可拖动，可选
  childImmovable?: boolean;
  // 标签布局宽度占比，可选
  labelCol?: any;
  // 包裹布局宽度占比，可选
  wrapperCol?: any;
  // 子节点列表，可选
  children?: ComponentSchema[];
  // 插槽列表，可选
  slots?: { [slotName: string]: ComponentSchema[] };
  // 是否显示（属性编辑组件可以添加函数动态显示隐藏），可选
  show?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
  // 编辑组件数据，可选（属性编辑另外绑定编辑的数据，默认则为当前选中组件数据）
  editData?: any;
  // 其他未明确指定的属性
  [fieldName: string]: any;
}

export interface FormConfig {
  layout?: string;
  labelWidth?: string;
  labelLayout: any;
  labelCol: any;
  wrapperCol: any;
  hideRequiredMark?: boolean;
  customStyle?: string;
}

export type FormDataModel = Record<string, any>;

export interface SchemaGroupItem {
  title: string;
  list: string[];
}

export interface Designer {
  setCheckedNode: (schema?: ComponentSchema) => void;
  setHoverNode: (schema: ComponentSchema | null) => void;
  setDisableHover: (disableHover?: boolean) => void;
  reset: () => void;
  state: DesignerState;
  // schemas: ComponentSchema[];
}

export interface DesignerState {
  checkedNode: ComponentSchema | null;
  hoverNode: ComponentSchema | null;
  disableHover: boolean;
  matched: ComponentSchema[];
}

export interface PageSchema {
  schemas: ComponentSchema[];
  canvas?: {
    width?: string;
    height?: string;
  };
  script?: string;
}
