<template>
  <div class="k-sound-code">
    <component class="editor" v-if="Monaco" :is="Monaco" v-model:value="getSchemas" />
  </div>
</template>
<script lang="ts" setup>
import { inject, computed } from 'vue'
import { pluginManager } from '../../../../../utils/index'
import { Designer } from '../../../../../types/kDesigner'

const Monaco = pluginManager.getComponent('monacoEditor')

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
