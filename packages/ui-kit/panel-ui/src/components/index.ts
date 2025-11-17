import type { PluginManager } from '@epic-designer/manager';

import { EpicNode } from '@epic-designer/base-ui';

import MonacoEditor from './MonacoEditor';
import Page from './Page';

/**
 * 初始化页面组件
 * @param pluginManager
 * @returns {void}
 */
export function setupPage(pluginManager: PluginManager): void {
  pluginManager.registerComponent(Page);
}

/**
 * 初始化属性设置组件
 * @param pluginManager
 * @returns {void}
 */
export function setupComponent(pluginManager: PluginManager): void {
  pluginManager.component.add(
    'EInputSize',
    async () => await import('./EInputSize/index.vue'),
  );
  pluginManager.component.add(
    'EColEditor',
    async () => await import('./EColEditor/index.vue'),
  );
  pluginManager.component.add(
    'EActionEditor',
    async () => await import('./EActionEditor/index.vue'),
  );
  pluginManager.component.add(
    'ERuleEditor',
    async () => await import('./ERuleEditor/index.vue'),
  );
  pluginManager.component.add(
    'EOptionsEditor',
    async () => await import('./EOptionsEditor/index.vue'),
  );
  pluginManager.component.add('EpicNode', EpicNode);

  const componentArray = [MonacoEditor];

  setupPage(pluginManager);

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item);
  });
}
