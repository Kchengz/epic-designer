import type { PluginManager } from '@epic-designer/utils';

import MonacoEditor from './MonacoEditor';
import Page from './Page';

export function setupComponent(pluginManager: PluginManager): void {
  pluginManager.component(
    'EInputSize',
    async () => await import('./EInputSize/index.vue'),
  );
  pluginManager.component(
    'EColEditor',
    async () => await import('./EColEditor/index.vue'),
  );
  pluginManager.component(
    'EActionEditor',
    async () => await import('./EActionEditor/index.vue'),
  );
  pluginManager.component(
    'ERuleEditor',
    async () => await import('./ERuleEditor/index.vue'),
  );
  pluginManager.component(
    'EOptionsEditor',
    async () => await import('./EOptionsEditor/index.vue'),
  );
  pluginManager.component(
    'ENode',
    async () => await import('../components/node/index'),
  );

  // 左侧菜单初始化
  pluginManager.registerActivitybar({
    component: async () =>
      await import(
        '../components/designer/src/modules/componentView/index.vue'
      ),
    icon: 'icon--epic--extension-outline',
    id: 'component_view',
    title: '组件',
  });

  pluginManager.registerActivitybar({
    component: async () =>
      await import('../components/designer/src/modules/sourceCode/index.vue'),
    icon: 'icon--epic--sdk-outline-rounded',
    id: 'sound_code_view',
    title: '源码',
  });

  pluginManager.registerActivitybar({
    component: async () =>
      await import('../components/designer/src/modules/outline/outline.vue'),
    icon: 'icon--epic--account-tree-outline-rounded',
    id: 'outline_view',
    title: '大纲',
  });

  pluginManager.registerRightSidebar({
    component: async () =>
      await import(
        '../components/designer/src/modules/attributeView/attributeView.vue'
      ),
    id: 'attribute_view',
    title: '属性',
  });

  pluginManager.registerRightSidebar({
    component: async () =>
      await import(
        '../components/designer/src/modules/attributeView/styleView.vue'
      ),
    id: 'style_view',
    title: '样式',
  });
  pluginManager.registerRightSidebar({
    component: async () =>
      await import(
        '../components/designer/src/modules/attributeView/eventView.vue'
      ),
    id: 'event_view',
    title: '事件',
  });

  const componentArray = [MonacoEditor, Page];

  componentArray.forEach((item) => {
    pluginManager.registerComponent(item);
  });
}
