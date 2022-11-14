<template>
    <aside class="k-left-sidebar">
        <div>
            活动面板
            <draggable v-model="arr1" group="itxst" item-key="id" :component-data="{ name: 'list' }">
                <template #item="{ element }">
                    <div class="item">
                        {{ element.name }}
                    </div>
                </template>
            </draggable>
        </div>
    </aside>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { ref } from 'vue'
const arr1 = ref([
    {
        name: '测试',
        id: 45
    },
    {
        name: '测试2',
        id: 452
    },
    {
        name: '测试3',
        id: 454
    },
]) 
</script>
<style lang="less">
// 列表动画
.list-enter-active {
    transition: all .5s;
}

.list-leave-active {
    transition: all .3s;
}

.list-enter,
.list-leave-to

/* .list-leave-active for below version 2.1.8 */
    {
    opacity: 0;
    transform: translateX(-100px);
}

.list-enter {
    color: aqua;
    height: 30px;
}
</style>