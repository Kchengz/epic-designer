<template>
  <div class="epic-action-bar">
    <ul class="actions-container">
      <li
        v-for="(item, index) in activitybars"
        :key="index"
        class="action-item"
        :title="item.title"
        :class="{ checked: actionBarCheckedIndex === index }"
        @click="handleClick(item, index)"
      >
        <span
          class="iconfont relative"
          :class="item.icon"
        />
        <div class="text-14px">{{ item.title }}</div>
      </li>
    </ul>
  </div>
  <aside
    class="epic-left-sidebar"
    :class="{ hide: actionBarCheckedIndex === null }"
  >
    <div class="sidebar-container">
      <component :is="sidebarComponent" />
    </div>
  </aside>
</template>
<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import { pluginManager } from '@epic-designer/utils'
import { ActivitybarModel } from '@epic-designer/utils/pluginManager'
defineOptions({
  name: 'EActionBar'
})
const activitybars = pluginManager.getActivitybars()
const actionBarCheckedIndex = ref<number | null>(0)

const sidebarComponent = shallowRef<any>(null)
sidebarComponent.value = activitybars[0].component

function handleClick (item: ActivitybarModel, index: number) {
  if (actionBarCheckedIndex.value === index) {
    actionBarCheckedIndex.value = null
    return false
  }
  sidebarComponent.value = item.component
  actionBarCheckedIndex.value = index
}
</script>
