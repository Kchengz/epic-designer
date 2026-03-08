import type { InjectionKey, Ref } from 'vue';

export type PanelName = number | string | symbol;

export interface CollapseContext {
  accordion: boolean;
  activeKeys: Ref<PanelName[]>;
  bordered: boolean;
  defaultExpandAll: boolean;
  isPanelActive: (name: PanelName) => boolean;
  registerPanel: (name: PanelName) => void;
  togglePanel: (name: PanelName) => void;
  unregisterPanel: (name: PanelName) => void;
}

export const COLLAPSE_CONTEXT_KEY: InjectionKey<CollapseContext> =
  Symbol('collapseContext');
