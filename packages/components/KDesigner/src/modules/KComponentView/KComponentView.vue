<template>
    <aside class="k-component-view">
        
        <div v-for="item in sourceSchema">
            <div class="collapse-header">
                {{ item.title }}
            </div>
            <draggable v-model="item.list" group="componentView" v-bind="{
                group: { name: 'edit-draggable', pull: 'clone', put: false },
                sort: false,
                animation: 180,
                ghostClass: 'moving'
            }" item-key="id" :component-data="{ name: 'list' }" @end="handleDraggableEnd($event, item.list)">
                <template #item="{ element }">
                    <div class="source-componet-item">
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
