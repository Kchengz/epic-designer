<template>
  <div
    v-if="sidebarComponent"
    class="epic-right-sidebar"
  >
  <EBreadcrumb />
    <ul class="actions-container">
      <li
        v-for="(item, index) in rightSidebars"
        :key="index"
        class="action-item"
        :title="item.title"
        :class="{ checked: actionBarCheckedIndex === index }"
        @click="handleClick(item, index)"
      >
        {{ item.title }}
      </li>
    </ul>
    <div class="sidebar-content">
      <aside :class="{ hide: actionBarCheckedIndex === null }">
        <component :is="sidebarComponent" />
      </aside>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import { pluginManager } from '@epic-designer/utils'
import { RightSidebarModel } from '@epic-designer/utils/pluginManager'
import EBreadcrumb from './breadcrumb.vue'

const rightSidebars = pluginManager.getRightSidebars()
const actionBarCheckedIndex = ref<number | null>(0)

const sidebarComponent = shallowRef<any>(null)
sidebarComponent.value = rightSidebars[0]?.component

function handleClick (item: RightSidebarModel, index: number) {
  if (actionBarCheckedIndex.value === index) {
    return false
  }
  sidebarComponent.value = item.component
  actionBarCheckedIndex.value = index
}
</script>
