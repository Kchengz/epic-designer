<template>
    <Form style="withd: 350px;background:#ff889966;padding:20px;">
        <slot name="edit-node">
            <slot name="node" :record="item" v-for="item in children"></slot>
        </slot>
    </Form>
</template>
<script lang="ts" setup>
import { Form } from 'ant-design-vue'
const props = defineProps({
    record: {
        type: Object as any,
        require: true
    },
})

const children = props.record.children ?? []
</script>
