<template>
    <draggable v-model="schemas" group="edit-draggable" item-key="id" @add="handleAdd"
        :component-data="{ name: 'draggable-range' }">
        <template #item="{ element }">
            <div class="item" :class="{ checked: designer.state.checkedNode?.id === element.id }"
                @click.stop="designer.setCheckedNode(element)">
                <div class="action-box" v-show="designer.state.checkedNode?.id === element.id">
                    <div class="action-item">
                        {{ element.type }}
                    </div>
                </div>
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
import { NodeItem, Designer } from '../../../../../types/kDesigner'
import { inject } from 'vue'

const designer = inject('designer') as Designer

const props = defineProps({
    schemas: {
        type: Array as PropType<NodeItem[]>
    }
})

const emit = defineEmits(['update:schemas'])
const schemas = computed({
    get() {
        return props.schemas
    },
    set(e) {
        emit('update:schemas', e)
    }
})

function handleAdd(e: any) {
    designer.setCheckedNode(schemas.value![e.newIndex])
}

</script>