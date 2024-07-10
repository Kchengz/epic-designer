<template>
  <div v-if="sidebarComponent" class="epic-right-sidebar-container relative">
    <!-- 折叠按钮 start -->
    <div
      class="epic-right-sidebar-hide-btn absolute left--18px top-80px cursor-pointer rounded-full flex justify-center items-center w-28px h-28px z-9"
      @click="handleHideRight">
      <EIcon prefix="" class="iconfont transition-all" :class="{ 'rotate-180': hideRightMain }"
        name="epic-icon-zhankai" />
    </div>
    <div class="w-10px"></div>
    <!-- 折叠按钮 end -->

    <div class="epic-right-sidebar w-308px" :class="{ hide: hideRightMain }">
      <div class="w-308px">
        <EBreadcrumb />
        <ul class="epic-actions-container">
          <li v-for="(item, index) in rightSidebars" :key="index" class="epic-action-item" :title="item.title"
            :class="{ checked: actionBarCheckedIndex === index }" @click="handleClick(item, index)">
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
<script lang="ts" setup>
import { ref, computed, shallowRef } from 'vue'
import { pluginManager } from '@epic-designer/utils'
import { RightSidebarModel } from '@epic-designer/utils'
import EBreadcrumb from './breadcrumb.vue'
import EIcon from "../../../../icon";

const hideRightMain = ref(false)

const rightSidebars = computed(() => {
  return pluginManager.viewsContainers.rightSidebars.value.filter(item => item.visible)
})

const actionBarCheckedIndex = ref<number | null>(0)
const sidebarComponent = shallowRef<any>(null)
sidebarComponent.value = rightSidebars.value[0]?.component

function handleHideRight() {
  hideRightMain.value = !hideRightMain.value
}

function handleClick(item: RightSidebarModel, index: number) {
  if (actionBarCheckedIndex.value === index) {
    return false
  }
  sidebarComponent.value = item.component
  actionBarCheckedIndex.value = index
}
</script>
