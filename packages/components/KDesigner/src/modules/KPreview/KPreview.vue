<template>
    <component :is="Modal" title="预览" v-model:visible="visible" width="800px" @cancel="handleClose" @ok="handleOk">
        <KBuilder ref="kb" :schemas="schemas" />
    </component>
</template>
<script lang="ts" setup>
import KBuilder from '../../../../KBuilder'
import { pluginManager } from '../../../../../utils'
import { ref, inject } from 'vue'
import { NodeItem } from '../../../../../types/kDesigner'
const { component: Modal } = pluginManager.getComponent('Modal') || {}

const visible = ref(false)
const schemas = inject('schemas') as NodeItem[]
const kb = ref<any>(null)
function handleClose () {
  visible.value = false
}

function handleOpen () {
  visible.value = true
}

async function handleOk () {
  const values = await kb.value.getData()
  console.log('表单结果为：', values)
}

defineExpose({
  handleOpen
})
</script>
