export interface RuleItem {
  enum?: Array<boolean | null | number | string | undefined>;
  isValidator?: boolean;
  len?: number;
  max?: number;
  message?: ((a?: string) => string) | string;
  min?: number;
  pattern?: RegExp | string;
  required?: boolean;
  type?: string;
  validator?: string;
  whitespace?: boolean;
}
export interface FormItemRule extends RuleItem {
  [model: string]: any;
  trigger?: string | string[];
}
