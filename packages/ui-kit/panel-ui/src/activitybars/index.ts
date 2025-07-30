import type { PluginManager } from '@epic-designer/manager';

/**
 * 初始化活动栏，向插件管理器注册活动栏项。
 *
 * @param {PluginManager} pluginManager - 插件管理器实例，用于注册活动栏项。
 * @returns {void}
 */
export function setupActivitybar(pluginManager: PluginManager): void {
  pluginManager.registerActivitybar({
    component: async () => await import('./componentView/index.vue'),
    icon: 'icon--epic--extension-outline',
    id: 'component_view',
    sort: 100,
    title: '组件',
  });

  pluginManager.registerActivitybar({
    component: async () => await import('./sourceCode/index.vue'),
    icon: 'icon--epic--sdk-outline-rounded',
    id: 'sound_code_view',
    sort: 200,
    title: '源码',
  });

  pluginManager.registerActivitybar({
    component: async () => await import('./outline/outline.vue'),
    icon: 'icon--epic--account-tree-outline-rounded',
    id: 'outline_view',
    sort: 300,
    title: '大纲',
  });
}
