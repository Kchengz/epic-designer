import type { Revoke } from '@epic-designer/manager/src/revoke';
import type { DesignerProps, PageSchema } from '@epic-designer/types';

import type { InjectionKey } from 'vue';

import { inject } from 'vue';

export interface DesignerContext {
  handleDelete: () => void;
  handleDuplicate: () => void;
  handleImported: (data: PageSchema) => void;
  handleToggleDeviceMode: (mode: string) => void;
  pageSchema: PageSchema;
  preview: () => void;
  props: DesignerProps;
  reset: () => void;
  revoke: Revoke;
  save: () => void;
  setDisabledHover: (disabledHover: boolean) => void;
  setHoverNode: (schema: any) => void;
  setSelectedNode: (schema: any) => void;
  state: {
    disabledHover: boolean;
    hoverNode: any;
    matched: any[];
    selectedNode: any;
  };
}

export const DESIGNER_KEY: InjectionKey<DesignerContext> =
  Symbol('designerContext');

export function useDesigner() {
  const designer = inject<DesignerContext>(DESIGNER_KEY);

  if (!designer) {
    throw new Error('useDesigner must be used within a Designer component');
  }
  return designer;
}
