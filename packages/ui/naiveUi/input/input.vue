<template>
    <NInput>
        <template #prefix>
            <slot name="edit-node">
                <slot v-for="item in prefix" name="node" :record="item" />
            </slot>
        </template>
        <template #suffix>
            <slot name="edit-node">
                <slot v-for="item in suffix" name="node" :record="item" />
            </slot>
        </template>
    </NInput>
</template>
<script lang="ts" setup>
import { NInput } from 'naive-ui/lib/input'
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { NodeItem } from '@epic-designer/core/types/epic-designer'
const props = defineProps({
    record: {
        type: Object as PropType<NodeItem>,
        require: true,
        default: () => ({})
    }
})
const suffix = computed(() => {
    return props.record!.slots?.suffix ?? []
})
const prefix = computed(() => {
    return props.record!.slots?.prefix ?? []
})
</script>