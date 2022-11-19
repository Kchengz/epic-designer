<template>
    <aside class="k-left-sidebar">
        <div v-for="item in sourceSchema">
            {{ item.title }}
            <draggable v-model="item.list" group="componentView" v-bind="{
                group: { name: 'edit-draggable', pull: 'clone', put: false },
                sort: false,
                animation: 180,
                ghostClass: 'moving'
            }" item-key="id" :component-data="{ name: 'list' }" @end="handleDraggableEnd($event, item.list)">
                <template #item="{ element }">
                    <div class="item">
                        {{ element.label }}
                    </div>
                </template>
            </draggable>
        </div>
    </aside>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { ref, toRaw } from 'vue'
import { getUUID, deepClone, nodeSchema } from '../../../../../utils/index'
import { SchemaNodeGroupItem } from '../../../../../types/kDesigner'

const sourceSchema = ref<SchemaNodeGroupItem[]>([])
sourceSchema.value = nodeSchema.getSchemaByGroup()

/**
 * 拖拽结束,深拷贝一次数据,防止重复引用
 * @param e 
 * @param list
 */
function handleDraggableEnd(e, list) {
    list[e.oldIndex] = deepClone({
        ...toRaw(list[e.oldIndex]),
        id: getUUID(),
    })
}
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