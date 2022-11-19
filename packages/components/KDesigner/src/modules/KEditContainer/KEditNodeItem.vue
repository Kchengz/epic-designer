<template>
    <draggable v-model="value" group="edit-draggable" item-key="id" :component-data="{ name: 'draggable-range' }">
        <template #item="{ element }">
            <div class="item">
                {{ element.label }}
                <KNode :record="element">
                    <template #edit-node="data">
                        23234
                        {{ element }}
                        <KEditNodeItem v-model:schemas="element.children" />
                        23423
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