import { type FormItemRule } from '../utils/component/KComponent/ERuleEditor/types'
export interface RenderCallbackParams {
  values: Record<string, any>
}

export interface NodeItem {
  type: string
  label?: string
  field?: string
  name?: string
  slotName?: string
  componentProps?: any
  id?: string
  rules?: FormItemRule[]
  noFormItem?: boolean
  input?: boolean
  labelCol?: any
  wrapperCol?: any
  children?: NodeItem[]
  show?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean)
  [propName: string]: any
}

export interface FormConfig {
  layout?: string
  labelWidth?: string
  labelLayout: any
  labelCol: any
  wrapperCol: any
  hideRequiredMark?: boolean
  customStyle?: string
}

export type FormDataModel = Record<string, any>

export interface SchemaGroupItem {
  title: string
  list: string[]
}

export interface Designer {
  setCheckedNode: (schema?: NodeItem) => void
  setHoverNode: (schema: NodeItem | null) => void
  setDisableHover: (disableHover = false) => void
  state: DesignerState
  // schemas: NodeItem[];
}

export interface DesignerState {
  checkedNode: NodeItem | null
  hoverNode: NodeItem | null
  disableHover: boolean
  matched: NodeItem[]
}

export interface PageSchema {
  schemas: NodeItem[]
  script?: string
}
