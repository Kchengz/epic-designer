<template>
  <div class="k-sound-code">
    <component class="editor" ref="monacoEditorRef" v-if="Monaco" :is="Monaco" :modelValue="initModelValue"
      @update:modelValue="setSchemas" />
  </div>
</template>
<script lang="ts" setup>
import { inject, ref, toRaw, watch } from 'vue'
import { pluginManager, deepEqual, deepClone } from '../../../../../utils/index'
import { Designer } from '../../../../../types/kDesigner'

const Monaco = pluginManager.getComponent('monacoEditor')
const monacoEditorRef = ref<any>(null)
const designer = inject('designer') as Designer

let oldVal: any = {}
watch(() => designer.state.checkedNode, (newVal: any) => {
  if (!deepEqual(oldVal, toRaw(newVal))) {
    monacoEditorRef.value?.setValue(JSON.stringify(newVal, null, 2))
  }
}, {
  deep: true
})

const initModelValue = JSON.stringify(designer.state.checkedNode, null, 2)

function setSchemas (e: string) {
  if (!designer.state.checkedNode) { return false }
  oldVal = JSON.parse(e)
  const keyArray = []
  for (const i in oldVal) {
    designer.state.checkedNode[i] = deepClone(oldVal[i])
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
