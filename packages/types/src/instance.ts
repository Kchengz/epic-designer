import type { ComponentInternalInstance, VNode } from 'vue';

export interface EpicNode extends VNode {
  getAttr?: (key: string) => any;
  getValue?: () => any;
  setAttr?: (key: string, value: any) => any;
  setValue?: (value: any) => void;
}

export interface EpicComponentInstance extends ComponentInternalInstance {
  getAttr?: (key: string) => any;
  getValue?: () => any;
  setAttr?: (key: string, value: any) => any;
  setValue?: (value: any) => void;
}

export type ComponentNodeInstance = EpicComponentInstance | EpicNode;
