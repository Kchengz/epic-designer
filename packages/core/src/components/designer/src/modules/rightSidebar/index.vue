<script lang="ts" setup>
import type { RightSidebarModel } from '@epic-designer/types';

import { computed, ref, shallowRef } from 'vue';

import { EpicIcon } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/manager';

import EpicBreadcrumb from './breadcrumb.vue';

const hideRightMain = ref(false);

const rightSidebars = computed(() => {
  return pluginManager.getRightSidebars.value
    .filter((item) => item.visible)
    .sort((a, b) => {
      return a.sort! - b.sort!;
    });
});

const activityBarCheckedIndex = ref<null | number>(0);
const sidebarComponent = shallowRef<any>(null);
sidebarComponent.value = rightSidebars.value[0]?.component;

function handleHideRight() {
  hideRightMain.value = !hideRightMain.value;
}

function handleClick(item: RightSidebarModel, index: number) {
  if (activityBarCheckedIndex.value === index) {
    return false;
  }
  sidebarComponent.value = item.component;
  activityBarCheckedIndex.value = index;
}
</script>
<template>
  <div v-if="sidebarComponent" class="epic-right-sidebar-container relative">
    <!-- 折叠按钮 start -->
    <div
      class="epic-right-sidebar-hide-btn z-9 absolute flex cursor-pointer items-center justify-center"
      @click="handleHideRight"
    >
      <EpicIcon
        class="transition-all"
        :class="{ 'rotate-180': hideRightMain }"
        name="icon--epic--arrow-forward-ios-rounded"
      />
    </div>
    <!-- 折叠按钮 end -->

    <div class="epic-right-sidebar w-308px" :class="{ hide: hideRightMain }">
      <div class="w-308px">
        <EpicBreadcrumb />
        <ul class="epic-actions-container">
          <li
            v-for="(item, index) in rightSidebars"
            :key="index"
            class="epic-action-item"
            :title="item.title"
            :class="{ checked: activityBarCheckedIndex === index }"
            @click="handleClick(item, index)"
          >
            {{ item.title }}
          </li>
        </ul>
        <div class="epic-sidebar-content">
          <component :is="sidebarComponent" />
        </div>
      </div>
    </div>
  </div>
</template>
