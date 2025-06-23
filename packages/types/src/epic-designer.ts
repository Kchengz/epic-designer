import type { ActionsModel } from '@epic-designer/utils';

import type { FormItemRule } from './rules';

export interface RenderCallbackParams {
  values: Record<string, any>;
}

export interface ComponentSchema {
  // 其他未明确指定的属性
  [fieldName: string]: any;
  // 子节点列表，可选
  children?: ComponentSchema[];
  // 组件属性，可选
  componentProps?: any;
  /**
   * @deprecated 此属性用于兼容旧版，后期可能会移除，请使用description属性代替。
   */
  describe?: string;
  // 编辑组件数据，可选（属性编辑另外绑定编辑的数据，默认则为当前选中组件数据）
  editData?: object;
  // 节点字段，可选
  field?: string;
  // 节点ID，可选
  id?: string;
  // 是否为表单输入组件，可选
  input?: boolean;
  // 节点标签，可选
  label?: string;
  // 是否无需表单项，可选
  noFormItem?: boolean;
  // 事件绑定
  on?: {
    [eventName: string]: ActionsModel[];
  };
  // 表单验证规则，可选
  rules?: FormItemRule[];
  // 是否显示（属性编辑组件可以添加函数动态显示隐藏），可选
  show?: ((renderCallbackParams: RenderCallbackParams) => boolean) | boolean;
  // 插槽名称（组件为插槽类型时，需要设置插槽name），可选
  slotName?: string;
  // 插槽列表，可选
  slots?: { [slotName: string]: ComponentSchema[] };
  // 节点类型，必选
  type: string;
}

export interface FormConfig {
  customStyle?: string;
  hideRequiredMark?: boolean;
  labelCol: any;
  labelLayout: any;
  labelWidth?: string;
  layout?: string;
  wrapperCol: any;
}

export type FormDataModel = Record<string, any>;

export interface DesignerState {
  disabledHover: boolean;
  hoverNode: ComponentSchema | null;
  matched: ComponentSchema[];
  selectedNode: ComponentSchema | null;
}

export interface PageSchema {
  canvas?: {
    height?: string;
    mode?: string;
    width?: string;
  };
  schemas: ComponentSchema[];
  script?: string;
}

export interface Designer {
  handleDelete: () => void;
  handleDuplicate: () => void;
  handleImported: (data: PageSchema) => void;
  handleToggleDeviceMode: (mode: string) => void;
  preview: () => void;
  reset: () => void;
  save: () => void;
  setDisabledHover: (disabledHover?: boolean) => void;
  setHoverNode: (schema: ComponentSchema | null) => void;
  setSelectedNode: (schema?: ComponentSchema) => void;
  state: DesignerState;
  // schemas: ComponentSchema[];
}
