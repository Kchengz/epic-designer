<template>
    <draggable v-model="value" group="edit-draggable" item-key="id" :component-data="{ name: 'draggable-range' }">
        <template #item="{ element }">
            <div class="item">
                <KNode :record="element">
                    <template #edit-node="data">
                        <KEditNodeItem v-model:schemas="element.children" />
                    </template>
                </KNode>
            </div>
        </template>
    </draggable>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { computed, PropType } from 'vue'

import KNode from '../../../../KNode'
import { NodeItem } from '../../../../../types/kDesigner'
const props = defineProps({
    schemas: {
        type: Array as PropType<NodeItem[]>
    }
})

const emit = defineEmits(['update:schemas'])
const value = computed({
    get() {
        return props.schemas
    },
    set(e) {
        emit('update:schemas', e)
    }
})

</script>