import type { ComponentInternalInstance } from 'vue';

import type { ComponentSchema } from './epic-designer';

export interface ExtendedExposed {
  getAttr?: (key: string) => any;
  getValue?: () => any;
  schema?: ComponentSchema;
  setAttr?: (key: string, value: any) => any;
  setValue?: (value: any) => void;
}

export type EpicNodeInstance = ComponentInternalInstance & {
  exposed?: ComponentInternalInstance['exposed'] & ExtendedExposed;
};
