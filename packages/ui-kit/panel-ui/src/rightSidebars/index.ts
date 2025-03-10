import type { PluginManager } from '@epic-designer/utils';

/**
 * 初始化右侧边栏，向插件管理器注册右侧边栏项。
 *
 * @param {PluginManager} pluginManager - 插件管理器实例，用于注册右侧边栏项。
 * @returns {void}
 */
export function setupRightSidebar(pluginManager: PluginManager): void {
  pluginManager.registerRightSidebar({
    component: async () => await import('./attribute/attribute.vue'),
    id: 'attribute_view',
    title: '属性',
  });

  pluginManager.registerRightSidebar({
    component: async () => await import('./style/style.vue'),
    id: 'style_view',
    title: '样式',
  });
  pluginManager.registerRightSidebar({
    component: async () => await import('./event/event.vue'),
    id: 'event_view',
    title: '事件',
  });
}
