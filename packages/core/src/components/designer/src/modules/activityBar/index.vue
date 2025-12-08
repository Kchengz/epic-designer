<script lang="ts" setup>
import type { ActivitybarModel } from '@epic-designer/types';

import { computed, ref, shallowRef } from 'vue';

import { EpicIcon } from '@epic-designer/base-ui';
import { pluginManager } from '@epic-designer/manager';

defineOptions({
  name: 'EActivityBar',
});
const activityBars = computed(() => {
  return pluginManager.panel.activityBars.value
    .filter((item) => item.visible)
    .sort((a, b) => {
      return a.sort! - b.sort!;
    });
});

const activityBarCheckedIndex = ref<null | number>(0);

const sidebarComponent = shallowRef<any>(null);
sidebarComponent.value = activityBars.value[0].component;

function handleClick(item: ActivitybarModel, index: number) {
  if (activityBarCheckedIndex.value === index) {
    activityBarCheckedIndex.value = null;
    return false;
  }
  sidebarComponent.value = item.component;
  activityBarCheckedIndex.value = index;
}
</script>
<template>
  <div class="relative flex">
    <div class="epic-action-bar">
      <ul class="epic-actions-container flex-col flex-center gap-1">
        <li
          v-for="(item, index) in activityBars"
          :key="index"
          class="epic-action-item text-[16px] w-9 h-9 flex-center"
          :title="item.title"
          :class="{ checked: activityBarCheckedIndex === index }"
          @click="handleClick(item, index)"
        >
          <EpicIcon :name="item.icon" />
          <!-- <div class="text-14px">
            {{ item.title }}
          </div> -->
        </li>
      </ul>
    </div>
    <div
      class="epic-left-sidebar"
      :class="{ hide: activityBarCheckedIndex === null }"
    >
      <div class="epic-sidebar-container">
        <component :is="sidebarComponent" />
      </div>
    </div>
  </div>
</template>
