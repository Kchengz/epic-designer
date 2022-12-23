<template>
    <div class="k-sound-code">
        <component class="editor" v-if="Monaco" :is="Monaco" :value="JSON.stringify(schemas, null, 2)" />
    </div>
</template>
<script lang="ts" setup>
import { ref, inject, toRaw } from 'vue'
import { nodeSchema } from '../../../../../utils/index'
import { SchemaNodeGroupItem, NodeItem } from '../../../../../types/kDesigner'

import { pluginManager } from '../../../../../utils/index'
const componentInfo = pluginManager.getComponent('monacoEditor')
const Monaco = componentInfo.component

const sourceSchema = ref<SchemaNodeGroupItem[]>([])
sourceSchema.value = nodeSchema.getSchemaByGroup()
const schemas = inject('schemas') as NodeItem[]



</script>


<style>
.k-sound-code {
    height: 100%;
}

.editor {
    height: 100%;
}
</style>