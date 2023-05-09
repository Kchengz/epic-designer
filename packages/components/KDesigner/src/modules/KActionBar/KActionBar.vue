<template>
    <div class="k-action-bar">
        <ul class="actions-container">
            <li class="action-item" :title="item.title" v-for="(item, index) in activitybars" :key="index"
                :class="{ checked: actionBarCheckedIndex === index }" @click="handleClick(item, index)">
                <span class="iconfont" :class="item.icon"></span>
            </li>
        </ul>
    </div>
    <aside class="k-left-sidebar" :class="{ hide: actionBarCheckedIndex === null }">
        <div class="sidebar-container">
            <component :is="sidebarComponent" />
        </div>
    </aside>
</template>
<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import { pluginManager } from '../../../../../utils/index'
import { ActivitybarModel } from '../../../../../utils/pluginManager'

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
