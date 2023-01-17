<template>
    <header class="k-footer">
        <div class="left">
            <div>
                <span v-for="(item, index) in designer.state.matched" :key="index">
                    <span v-if="index !== 0"> > </span>
                    <span class="node-item" @click="handleSelect(item)" @mouseenter.stop="designer.setHoverNode(item)"
                        @mouseleave.stop="designer.setHoverNode(null)">{{ item.type }}</span>
                </span>
            </div>
        </div>
        <div class="right">
            <div class="author">
                kcz
            </div>
            <div class="package-name">
                k-designer
            </div>
        </div>
    </header>
</template>
<script lang="ts" setup>
import { inject } from 'vue'
import { Designer, NodeItem } from '../../../../../types/kDesigner'
const designer = inject('designer') as Designer
/**
 * 选中点击节点元素
 * @param schema
 */
function handleSelect (schema: NodeItem) {
  designer.setCheckedNode(schema)
}

</script>
