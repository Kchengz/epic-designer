<script lang="ts" setup>
import { computed, ref, shallowRef } from 'vue';

import { pluginManager, RightSidebarModel } from '@epic-designer/utils';

import EIcon from '../../../../icon';
import EBreadcrumb from './breadcrumb.vue';

const hideRightMain = ref(false);

const rightSidebars = computed(() => {
  return pluginManager.viewsContainers.rightSidebars.value.filter(
    (item) => item.visible,
  );
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
      class="epic-right-sidebar-hide-btn left--18px top-80px w-28px h-28px z-9 absolute flex cursor-pointer items-center justify-center rounded-full"
      @click="handleHideRight"
    >
      <EIcon
        class="transition-all"
        :class="{ 'rotate-180': hideRightMain }"
        name="icon--epic--arrow-forward-ios-rounded"
      />
    </div>
    <div class="w-10px"></div>
    <!-- 折叠按钮 end -->

    <div class="epic-right-sidebar w-308px" :class="{ hide: hideRightMain }">
      <div class="w-308px">
        <EBreadcrumb />
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
