<template>
  <component v-if="Modal" :is="Modal" title="预览" v-model:visible="visible" v-model="visible" width="800px" :footer="null">
    <KBuilder ref="kb" :schemas="schemas" :script="script" />
    <div class="k-modal-footer">
      <Button @click="handleClose">关闭</Button>
      <Button type="primary" @click="handleOk">输出结果</Button>
    </div>
  </component>
</template>
<script lang="ts" setup>
import KBuilder from '../../../../KBuilder'
import { pluginManager } from '../../../../../utils'
import { ref, inject } from 'vue'
import { NodeItem } from '../../../../../types/kDesigner'
const Modal = pluginManager.getComponent('Modal')
const Button = pluginManager.getComponent('button')

const visible = ref(false)
const schemas = inject('schemas') as NodeItem[]
const script = inject('script') as string
const kb = ref<any>(null)
function handleClose () {
  visible.value = false
}

function handleOpen () {
  console.log(Modal)
  visible.value = true
}

async function handleOk () {
  const values = await kb.value.validate()
  console.log('表单结果为：', values)
}

defineExpose({
  handleOpen
})
</script>
