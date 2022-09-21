<template>
    <a-form-item :label="record.label" :rules="record.rules">
        <component :is="components[record.component]" style="width: 100%;" v-model:value="formState[record.field]"
            v-bind="componentProps" />
    </a-form-item>
</template>
<script lang="ts" setup>
import { components } from '../config/component_use'
import { defineEmits, computed } from 'vue'
const props = defineProps({
    record: Object as any,
    formState: Object as any,
})

const { record, formState } = props

const componentProps = props.record.componentProps

</script>
