<template>
  <div class="epic-sound-code">
    <MonacoEditor
      ref="monacoEditorRef"
      class="editor"
      :model-value="initModelValue"
      @update:model-value="setSchemas"
    />
  </div>
</template>
<script lang="ts" setup>
import { inject, ref, toRaw, watch } from 'vue'
import { pluginManager, deepEqual, deepCompareAndModify } from '@epic-designer/utils'
import { Designer } from '../../../../../types/epic-designer'

const MonacoEditor = pluginManager.getComponent('monacoEditor')
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
  deepCompareAndModify(designer.state.checkedNode, oldVal)
}

</script>

<style scoped>
.epic-sound-code {
  height: 100%;
}

.editor {
  height: 100%;
}
</style>
