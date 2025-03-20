import type {
  ActivitybarModel,
  RightSidebarModel,
  ViewsContainersModel,
} from '@epic-designer/types';

import type { AsyncComponentLoader } from 'vue';

import { shallowRef } from 'vue';

import { loadAsyncComponent } from '@epic-designer/utils';

export type Attr = 'id' | 'title';

export function usePanel() {
  // 视图容器模型，包含活动栏和右侧边栏的配置
  const viewsContainers: ViewsContainersModel = {
    activitybars: shallowRef([]), // 活动栏配置列表
    rightSidebars: shallowRef([]), // 右侧边栏配置列表
  };

  /**
   * 获取所有activitybars
   * @returns activitybars
   */
  function getActivitybars(): ActivitybarModel[] {
    return viewsContainers.activitybars.value;
  }

  /**
   * 获取所有rightSidebars
   * @returns rightSidebars
   */
  function getRightSidebars(): RightSidebarModel[] {
    return viewsContainers.rightSidebars.value;
  }

  /**
   * 隐藏活动栏
   * @param value 属性
   * @param attr 匹配字段 title | id 默认值 title
   */
  function hideActivitybar(value: string, attr: Attr = 'title') {
    viewsContainers.activitybars.value = viewsContainers.activitybars.value.map(
      (activitybar) => {
        // 查找具有指定属性和值的活动栏
        if (activitybar[attr] === value) {
          // 如果找到匹配的活动栏, 将匹配的活动栏的 'visible' 属性设置为 false
          activitybar.visible = false;
        }
        return activitybar;
      },
    );
  }

  /**
   * 隐藏右侧边栏
   * @param value 属性
   * @param attr 查询字段 默认值 title
   */
  function hideRightSidebar(value: string, attr: Attr = 'title') {
    viewsContainers.rightSidebars.value =
      viewsContainers.rightSidebars.value.map((rightSidebar) => {
        // 查找具有指定属性和值的右侧边栏
        if (rightSidebar[attr] === value) {
          // 如果找到匹配的右侧边栏, 将匹配的右侧边栏的 'visible' 属性设置为 false
          rightSidebar.visible = false;
        }
        return rightSidebar;
      });
  }

  /**
   * 注册或更新活动栏（Activitybar）模型。
   * 如果模型中的组件是一个函数，则异步加载该组件。
   * @param activitybar 要注册或更新的活动栏模型
   */
  function registerActivitybar(activitybar: ActivitybarModel): void {
    // 如果组件是一个函数，则异步加载该组件
    if (typeof activitybar.component === 'function') {
      activitybar.component = loadAsyncComponent(
        activitybar.component as AsyncComponentLoader,
      );
    }

    // 默认visible为true
    if (activitybar.visible === undefined) {
      activitybar.visible = true;
    }

    // 默认sort设置为1000
    if (activitybar.sort === undefined) {
      activitybar.sort = 1000;
    }

    // 查找活动栏在列表中的索引
    const index = viewsContainers.activitybars.value.findIndex(
      (item) => item.id === activitybar.id,
    );

    // 如果找到相同 id 的活动栏，则更新该活动栏模型
    if (index === -1) {
      // 否则将新的活动栏模型添加到活动栏列表中
      viewsContainers.activitybars.value.push(activitybar);
    } else {
      viewsContainers.activitybars.value[index] = activitybar;
    }
  }

  /**
   * 注册右侧栏
   */
  function registerRightSidebar(rightSidebar: RightSidebarModel): void {
    if (typeof rightSidebar.component === 'function') {
      rightSidebar.component = loadAsyncComponent(
        rightSidebar.component as AsyncComponentLoader,
      );
    }

    // 默认visible为true
    if (rightSidebar.visible === undefined) {
      rightSidebar.visible = true;
    }

    // 默认sort设置为1000
    if (rightSidebar.sort === undefined) {
      rightSidebar.sort = 1000;
    }

    const index = viewsContainers.rightSidebars.value.findIndex(
      (sidebar) => sidebar.id === rightSidebar.id,
    );

    if (index === -1) {
      viewsContainers.rightSidebars.value.push(rightSidebar);
    } else {
      viewsContainers.rightSidebars.value[index] = rightSidebar;
    }
  }

  /**
   * 显示活动栏
   * @param value 属性
   * @param attr 匹配字段 title | id 默认值 title
   */
  function showActivitybar(value: string, attr: Attr = 'title') {
    viewsContainers.activitybars.value = viewsContainers.activitybars.value.map(
      (activitybar) => {
        // 查找具有指定属性和值的活动栏
        if (activitybar[attr] === value) {
          // 如果找到匹配的活动栏, 将匹配的活动栏的 'visible' 属性设置为 true
          activitybar.visible = true;
        }
        return activitybar;
      },
    );
  }

  /**
   * 显示右侧边栏
   * @param value 属性
   * @param attr 查询字段 默认值 title
   */
  function showRightSidebar(value: string, attr: Attr = 'title') {
    viewsContainers.rightSidebars.value =
      viewsContainers.rightSidebars.value.map((rightSidebar) => {
        // 查找具有指定属性和值的右侧边栏
        if (rightSidebar[attr] === value) {
          // 如果找到匹配的右侧边栏, 将匹配的右侧边栏的 'visible' 属性设置为 true
          rightSidebar.visible = true;
        }
        return rightSidebar;
      });
  }
  return {
    getActivitybars,
    getRightSidebars,
    hideActivitybar,
    hideRightSidebar,
    registerActivitybar,
    registerRightSidebar,
    showActivitybar,
    showRightSidebar,
    viewsContainers,
  };
}
