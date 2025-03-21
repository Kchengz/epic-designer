import type {
  ActivitybarModel,
  RightSidebarModel,
  ViewsContainersModel,
} from '@epic-designer/types';

import type { AsyncComponentLoader } from 'vue';

import { computed, ref, shallowRef } from 'vue';

import { loadAsyncComponent } from '@epic-designer/utils';

export type Attr = 'id' | 'title';

export function usePanel() {
  // 视图容器模型，包含活动栏和右侧边栏的配置
  const viewsContainers: ViewsContainersModel = {
    activitybars: shallowRef([]), // 活动栏配置列表
    rightSidebars: shallowRef([]), // 右侧边栏配置列表
  };

  const hiddenActivitybars = ref<string[]>([]); // 隐藏的活动栏配置列表
  const hiddenRightSidebars = ref<string[]>([]); // 隐藏的右侧边栏配置列表

  // 获取未隐藏的活动栏
  const getActivitybars = computed(() => {
    return viewsContainers.activitybars.value.filter(
      (item) => !hiddenActivitybars.value.includes(item.title),
    );
  });

  // 获取未隐藏的右侧边栏
  const getRightSidebars = computed(() => {
    return viewsContainers.rightSidebars.value.filter(
      (item) => !hiddenRightSidebars.value.includes(item.title),
    );
  });

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
   * 隐藏活动栏
   * @param title 属性
   */
  function hideActivitybar(title: string) {
    hiddenActivitybars.value.push(title);
  }

  /**
   * 隐藏右侧边栏
   * @param value 属性
   */
  function hideRightSidebar(value: string) {
    hiddenRightSidebars.value.push(value);
  }

  /**
   * 显示活动栏
   * @param title 属性
   */
  function showActivitybar(title: string) {
    const index = hiddenActivitybars.value.indexOf(title);
    if (index !== -1) {
      hiddenActivitybars.value.splice(index, 1);
    }
  }

  /**
   * 显示右侧边栏
   * @param title 属性
   */
  function showRightSidebar(title: string) {
    const index = hiddenRightSidebars.value.indexOf(title);
    if (index !== -1) {
      hiddenRightSidebars.value.splice(index, 1);
    }
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
