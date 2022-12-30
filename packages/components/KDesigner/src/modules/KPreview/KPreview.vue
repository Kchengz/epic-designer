<template>
    <Modal title="预览" v-model:visible="visible" @cancel="handleClose" @ok="handleOk">
        <KBuilder ref="kb" :schemas="schemas" />
    </Modal>
</template>
<script lang="ts" setup>
import KBuilder from '../../../../KBuilder'
import { Modal } from 'ant-design-vue'
import { ref, inject } from 'vue'
import { NodeItem } from '../../../../../types/kDesigner'
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
