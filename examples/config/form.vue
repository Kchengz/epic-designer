<template>
    <Form ref="form" :model="attrs.model" style="height: 100%;" @finish="onFinish">
        <slot name="edit-node">
            <slot name="node" :record="item" v-for="item in children"></slot>
        </slot>
        <!-- <FormItem :wrapper-col="{ offset: 8, span: 16 }" name="input" :rules="[]">
            <Input v-model:value="attrs.model['input']" />
        </FormItem>
        <FormItem :wrapper-col="{ offset: 8, span: 16 }">
            <Button type="primary" html-type="submit">Submit</Button>
        </FormItem> -->
    </Form>
</template>
<script lang="ts" setup>
import { Form, Input, FormItem, Button } from 'ant-design-vue'
import { ref, watch, inject, useAttrs } from 'vue'
const attrs = useAttrs()
console.log(attrs)
const form = ref(null)
const props = defineProps({
    record: {
        type: Object as any,
        require: true
    },
})

watch(() => attrs.model, async (e) => {
    console.log(form.value)
    const values = await form.value?.validateFields()
    console.log(values)
}, {
    deep: true
})

function onFinish(e) {
    console.log(e)
}
const children = props.record.children ?? []
defineExpose({
    form
})
</script>
