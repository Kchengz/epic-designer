<template>
    <draggable v-model="schemas" :group="firstNodeId === 'root' || 'edit-draggable'" item-key="id"
        @start="handleSelect($event.oldIndex)" @add="handleSelect($event.newIndex)"
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
                    <template #edit-node>
                        <KEditNodeItem v-model:schemas="element.children" />
                    </template>
                </KNode>
            </div>
        </template>
    </draggable>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { computed, watch, PropType, inject, ref } from 'vue'

import KNode from '../../../../KNode'
import { NodeItem, Designer } from '../../../../../types/kDesigner'

const designer = inject('designer') as Designer

const props = defineProps({
  schemas: {
    type: Array as PropType<NodeItem[]>
  }
})

const firstNodeId = ref('')

const emit = defineEmits(['update:schemas'])
const schemas = computed({
  get () {
    // 判断props.schemas是否存在值
    return props.schemas
  },
  set (e) {
    emit('update:schemas', e)
  }
})

watch(schemas, (e) => {
  // 判断props.schemas是否存在值
  if (e?.length) {
    // 读取第一个节点id 如果节点id等于root 则判定该节点为根节点
    firstNodeId.value = e[0].id ?? ''
  }
}, {
  immediate: true
})

function handleSelect (index: number) {
  console.log(index, 1111111)
  designer.setCheckedNode(schemas.value![index])
}

</script>
