export interface RuleItem {
  required?: boolean;
  pattern?: RegExp | string;
  min?: number;
  max?: number;
  len?: number;
  enum?: Array<string | number | boolean | null | undefined>;
  whitespace?: boolean;
  message?: string | ((a?: string) => string);
}
export interface FormItemRule extends RuleItem {
  trigger?: string;
}