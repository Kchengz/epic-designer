<template>
    <aside class="k-right-sidebar">
        属性面板
        <div v-if="checkedNode">
            <div :key="item.attrIndex" v-for="item in componentAttr">
                <div>
                    {{ item.label }}
                </div>
                <KAttributeInput :record="item" :model-value="getAttrValue(item.attrIndex)"
                    @update:model-value="setAttrValue($event, item.attrIndex)" />
            </div>

        </div>
    </aside>
</template>
<script lang="ts" setup>
import KAttributeInput from './KAttributeInput.vue'
import { ref } from 'vue'
import { Designer } from '../../../../../types/kDesigner'
import { inject, computed } from 'vue'
const designer = inject('designer') as Designer
import { pluginManager } from '../../../../../utils/index'

const componentAttrs = pluginManager.getComponentAttrs()




const checkedNode = computed(() => {
    return designer.state.checkedNode
})

const componentAttr = computed(() => {
    return componentAttrs[designer.state.checkedNode?.type]
})



function getAttrValue(attrIndex) {
    let obj = checkedNode.value || {}
    let arr = attrIndex.split(".");
    for (let i in arr) {
        obj = obj[arr[i]] || "";
    }
    return obj;
}

function setAttrValue(value, attrIndex) {
    let obj = checkedNode.value || {}
    let arr = attrIndex.split(".");
    arr.forEach((item, index) => {
        if (index === (arr.length - 1)) {
            obj[item] = value
            return false
        }
        if (!obj[item]) {
            obj[item] = {}
        }
        obj = obj[item]
    })

}

</script>