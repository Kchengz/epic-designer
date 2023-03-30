<template>
  <div class="k-sound-code">
    <component class="editor" ref="monacoEditorRef" v-if="Monaco" :is="Monaco" v-model="getSchemas" />
  </div>
</template>
<script lang="ts" setup>
import { inject, ref, watch, computed } from 'vue'
import { pluginManager } from '../../../../../utils/index'
import { Designer } from '../../../../../types/kDesigner'

const Monaco = pluginManager.getComponent('monacoEditor')
const monacoEditorRef = ref<any>(null)
const designer = inject('designer') as Designer

watch(() => designer.state.checkedNode, (newVal: any, oldVal: any) => {
  const currenValue = JSON.stringify(newVal)
  const inputValue = JSON.stringify(oldVal)
  if (inputValue !== currenValue) {
    monacoEditorRef.value?.setValue(JSON.stringify(newVal, null, 2))
  }
})

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
