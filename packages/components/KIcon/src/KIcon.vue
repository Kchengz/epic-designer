<template>
    <svg aria-hidden="true" class="svg-icon" :width="props.size" :height="props.size">
        <use :xlink:href="symbolId" />
    </svg>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
    prefix: {
        type: String,
        default: 'icon'
    },
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        default: '1em'
    }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<style lang="less" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>