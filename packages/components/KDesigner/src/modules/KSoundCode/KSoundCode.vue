<template>
    <div class="k-sound-code">
        <component class="editor" v-if="Monaco" :is="Monaco" v-model:value="getSchemas" />
    </div>
</template>
<script lang="ts" setup>
import { ref, inject, Ref, computed } from 'vue'
import { nodeSchema } from '../../../../../utils/index'
import { SchemaNodeGroupItem, NodeItem } from '../../../../../types/kDesigner'

import { pluginManager } from '../../../../../utils/index'
const componentInfo = pluginManager.getComponent('monacoEditor')
const Monaco = componentInfo.component

const sourceSchema = ref<SchemaNodeGroupItem[]>([])
sourceSchema.value = nodeSchema.getSchemaByGroup()
const schemas = inject('schemas') as Ref<NodeItem[]>


const getSchemas = computed({
    get() {
        console.log(schemas.value)
        JSON.stringify(schemas.value, null, 2)
    },
    set(e) {
        console.log(e)
        // schemas.value = JSON.parse(e)
    }
})


</script>


<style>
.k-sound-code {
    height: 100%;
}

.editor {
    height: 100%;
}
</style>