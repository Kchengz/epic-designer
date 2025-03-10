import { setupActivitybar } from './activitybars';
import { setupComponent } from './components';
import { setupRightSidebar } from './rightSidebars';

import './index.less';

export { setupPage } from './components';

/**
 * 初始化面板，调用多个设置函数来设置活动栏、右侧边栏和组件。
 *
 * @param {any} pluginManager - 插件管理器实例，用于传递给各个设置函数。
 * @returns {void}
 */
export function setupPanel(pluginManager: any) {
  setupActivitybar(pluginManager);
  setupRightSidebar(pluginManager);
  setupComponent(pluginManager);
}
