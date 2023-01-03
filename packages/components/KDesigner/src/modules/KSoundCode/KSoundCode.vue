<template>
  <div class="k-sound-code">
    <component class="editor" v-if="Monaco" :is="Monaco" v-model:value="getSchemas" />
  </div>
</template>
<script lang="ts" setup>
import { ref, inject, computed } from 'vue'
import { nodeSchema, pluginManager } from '../../../../../utils/index'
import { SchemaNodeGroupItem, Designer } from '../../../../../types/kDesigner'

const componentInfo = pluginManager.getComponent('monacoEditor')
const Monaco = componentInfo.component

const sourceSchema = ref<SchemaNodeGroupItem[]>([])
sourceSchema.value = nodeSchema.getSchemaByGroup()
// const schemas = inject('schemas') as Ref<NodeItem[]>
const designer = inject('designer') as Designer

const getSchemas = computed({
  get () {
    if (!designer.state.checkedNode) { return '{}' }
    return JSON.stringify(designer.state.checkedNode, null, 2)
  },
  set (e) {
    if (!designer.state.checkedNode) { return false }

    const json = JSON.parse(e)
    const keyArray = []
    for (const i in json) {
      designer.state.checkedNode[i] = json[i]
      keyArray.push(i)
    }
    for (const i in designer.state.checkedNode) {
      if (!keyArray.includes(i)) {
        delete designer.state.checkedNode[i]
      }
    }
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
