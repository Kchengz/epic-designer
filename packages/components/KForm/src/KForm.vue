<template>
    <Form ref="form" :model="attrs.model" style="height: 100%;" @finish="onFinish">
        <slot name="edit-node">
            <slot name="node" :record="item" v-for="item in children"></slot>
        </slot>
        <!-- <Button type="primary" html-type="submit">Submit</Button> -->
    </Form>
</template>
<script lang="ts" setup>
import { pluginManager } from '../../../utils'
import { ref, watch, inject, useAttrs } from 'vue'
const { component: Form } = pluginManager.getComponent('Form') || {};
const attrs = useAttrs()
const form = ref<any>(null)
const props = defineProps({
    record: {
        type: Object as any,
        require: true
    },
})

function onFinish(e: any) {
    console.log(e)
}
const children = props.record.children ?? []
defineExpose({
    form
})
</script>
