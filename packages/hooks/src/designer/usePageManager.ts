import type { PageManager } from '@epic-designer/manager';

import type { InjectionKey } from 'vue';

import { inject } from 'vue';

export const PAGE_MANAGER_KEY: InjectionKey<PageManager> =
  Symbol('pageManager');

export function usePageManager() {
  const pageManager = inject<PageManager>(PAGE_MANAGER_KEY);

  if (!pageManager) {
    throw new Error('未获取到 pageManager 实例');
  }

  return pageManager;
}
