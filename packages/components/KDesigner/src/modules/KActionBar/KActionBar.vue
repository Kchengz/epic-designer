<template>
    <div class="k-action-bar">
        <ul class="actions-container">
            <li class="action-item" :title="item.title" v-for="(item, index) in activitybars"
                :class="{ checked: actionBarCheckedIndex === index }" @click="handleClick(item, index)">
                {{ item.title }}
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
import { ref, shallowRef, onMounted } from 'vue'
import { pluginManager } from '../../../../../utils/index'
import { ActivitybarModel } from '../../../../../utils/pluginManager'
const activitybars = pluginManager.getActivitybars()
const actionBarCheckedIndex = ref<number | null>(0)

let sidebarComponent = shallowRef<any>(null)
sidebarComponent.value = activitybars[0].component

function handleClick(item: ActivitybarModel, index: number) {
    if (actionBarCheckedIndex.value === index) {
        actionBarCheckedIndex.value = null
        return false
    }
    sidebarComponent.value = item.component
    actionBarCheckedIndex.value = index
}
</script>
