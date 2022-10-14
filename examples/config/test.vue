<template>
    <div style="withd: 350px;background:#ff889966;padding:20px;margin-bottom: 20px;">
        <div style="text-align: center">假装我是一个布局组件</div>
        <slot name="node"
            :record="item" v-for="item in children"></slot>
    </div>
</template>
<script lang="ts" setup>

const props = defineProps({
    record: {
        type: Object as any,
        require: true
    },
})


const children = props.record.children ?? []

</script>
