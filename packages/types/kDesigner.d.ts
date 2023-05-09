import { FormItemRule } from "../utils/component/KComponent/KRuleEditor/types";
export interface RenderCallbackParams {
  values: { [propName: string]: any };
}

export interface NodeItem {
  type: string;
  label?: string;
  field?: string;
  name?: string;
  slotName?: string;
  componentProps?: any;
  id?: string;
  rules?: FormItemRule[];
  labelCol?: any;
  wrapperCol?: any;
  children?: NodeItem[];
  show?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
  [propName: string]: any;
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

export interface FormDataModel {
  [field: string]: any;
}

export interface SchemaGroupItem {
  title: string;
  list: string[];
}

export interface SchemaNodeGroupItem {
  title: string;
  list: NodeItem[];
}

export interface Designer {
  setCheckedNode: (record: NodeItem) => {};
  setHoverNode: (record: NodeItem | null) => {};
  setDisableHover: (disableHover = false) => {};
  state: DesignerState;
  // schemas: NodeItem[];
}

export interface DesignerState {
  checkedNode: NodeItem | null;
  hoverNode: NodeItem | null;
  disableHover: boolean;
  matched: NodeItem[];
}

export interface PageSchema {
  schemas: NodeItem[];
  script: string;
}
