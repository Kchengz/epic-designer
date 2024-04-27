<template>
    <Cascader v-bind="getComponentProps" />
</template>
<script setup lang="ts">
import { Cascader } from 'ant-design-vue'
import { useAttrs, computed } from 'vue'

const attrs = useAttrs()
const emits = defineEmits<{
    'update:modelValue': any
}>()
const getComponentProps = computed(() => ({
    ...attrs,
    value: attrs.modelValue,
    showCheckedStrategy: Cascader[attrs.showCheckedStrategy as string ?? 'SHOW_PARENT'],
    "onUpdate:value": handleUpdate,
}))

function handleUpdate(e = null): void {
    emits("update:modelValue", e);
}

</script>