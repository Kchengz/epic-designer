import type { ComponentInternalInstance } from 'vue';

export interface ExtendedExposed {
  getAttr?: (key: string) => any;
  getValue?: () => any;
  setAttr?: (key: string, value: any) => any;
  setValue?: (value: any) => void;
}

export type EpicNodeInstance = ComponentInternalInstance & {
  exposed?: ComponentInternalInstance['exposed'] & ExtendedExposed;
};
