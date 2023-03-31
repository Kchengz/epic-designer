<template>
  <div class="k-sound-code">
    <component class="editor" ref="monacoEditorRef" v-if="Monaco" :is="Monaco" :modelValue="initModelValue"
      @update:modelValue="setSchemas" />
  </div>
</template>
<script lang="ts" setup>
import { inject, ref, watch } from 'vue'
import { pluginManager, deepEqual } from '../../../../../utils/index'
import { Designer } from '../../../../../types/kDesigner'

const Monaco = pluginManager.getComponent('monacoEditor')
const monacoEditorRef = ref<any>(null)
const designer = inject('designer') as Designer

let oldVal = {}
watch(() => designer.state.checkedNode, (newVal: any) => {
  if (!deepEqual(oldVal, newVal)) {
    monacoEditorRef.value?.setValue(JSON.stringify(newVal, null, 2))
  }
}, {
  deep: true
})

const initModelValue = JSON.stringify(designer.state.checkedNode, null, 2)

function setSchemas (e: string) {
  if (!designer.state.checkedNode) { return false }
  const json = JSON.parse(e)
  oldVal = json
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

</script>

<style>
.k-sound-code {
  height: 100%;
}

.editor {
  height: 100%;
}
</style>
