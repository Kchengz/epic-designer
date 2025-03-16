import type { ComponentInternalInstance } from 'vue';

export interface ComponentNodeInstance extends ComponentInternalInstance {
  el: HTMLElement;
  getAttr?: (key: string) => any;
  getValue?: () => any;
  setAttr?: (key: string, value: any) => any;
  setValue?: (value: any) => void;
}
