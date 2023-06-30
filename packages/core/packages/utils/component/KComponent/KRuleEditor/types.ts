export interface RuleItem {
  required?: boolean
  type?: string
  pattern?: RegExp | string
  min?: number
  max?: number
  len?: number
  enum?: Array<string | number | boolean | null | undefined>
  whitespace?: boolean
  validator?: string
  isValidator?: boolean
  message?: string | ((a?: string) => string)
}
export interface FormItemRule extends RuleItem {
  trigger?: string | string[]
  [model: string]: any
}
