<template>
  <div class="flex relative">
    <div class="epic-action-bar">
      <ul class="epic-actions-container">
        <li v-for="(item, index) in activitybars" :key="index" class="epic-action-item" :title="item.title"
          :class="{ checked: activityBarCheckedIndex === index }" @click="handleClick(item, index)">
          <EIcon prefix="" class="iconfont relative" :name="item.icon" />
          <div class="text-14px">{{ item.title }}</div>
        </li>
      </ul>
    </div>
    <div class="epic-left-sidebar" :class="{ hide: activityBarCheckedIndex === null }">
      <div class="epic-sidebar-container">
        <component :is="sidebarComponent" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, shallowRef } from "vue";
import { pluginManager } from "@epic-designer/utils";
import { ActivitybarModel } from "@epic-designer/utils";
import EIcon from "../../../../icon";
defineOptions({
  name: "EActivityBar",
});
const activitybars = computed(() => {
  return pluginManager.viewsContainers.activitybars.value.filter(item => item.visible)
})

const activityBarCheckedIndex = ref<number | null>(0);

const sidebarComponent = shallowRef<any>(null);
sidebarComponent.value = activitybars.value[0].component;

function handleClick(item: ActivitybarModel, index: number) {
  if (activityBarCheckedIndex.value === index) {
    activityBarCheckedIndex.value = null;
    return false;
  }
  sidebarComponent.value = item.component;
  activityBarCheckedIndex.value = index;
}
</script>
