<template>
  <div class="epic-sound-code">
    <MonacoEditor ref="monacoEditorRef" autoToggleTheme class="epic-editor" :readOnly="designerProps.sourceCodeReadOnly" :model-value="initModelValue"
      lineNumbers="off" @update:model-value="setSchemas" />
  </div>
</template>
<script lang="ts" setup>
import { inject, ref, toRaw, watch } from 'vue'
import { pluginManager, deepEqual, deepCompareAndModify } from '@epic-designer/utils'
import { Designer } from '../../../../../types/epic-designer'
import { DesignerProps } from '../../types'
const MonacoEditor = pluginManager.getComponent('monacoEditor')
const monacoEditorRef = ref<any>(null)
const designer = inject('designer') as Designer
const designerProps = inject('designerProps') as DesignerProps

let oldVal: any = {}
watch(() => designer.state.checkedNode, (newVal: any) => {
  if (!deepEqual(oldVal, toRaw(newVal))) {
    monacoEditorRef.value?.setValue(JSON.stringify(newVal, null, 2))
  }
}, {
  deep: true
})

const initModelValue = JSON.stringify(designer.state.checkedNode, null, 2)

function setSchemas(e: string) {
  try {
    if (!designer.state.checkedNode) { return false }
    oldVal = JSON.parse(e)
    deepCompareAndModify(designer.state.checkedNode, oldVal)
  } catch (error) {
    console.warn("[epic-desinger：源码]异常：", error);
  }
}
</script>
