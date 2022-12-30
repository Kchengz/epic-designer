<template>
    <Modal title="预览" v-model:visible="visible" @cancel="handleClose">
        <KBuilder :schemas="schemas" />
    </Modal>
</template>
<script lang="ts" setup>
import KBuilder from '../../../../KBuilder'
import { Modal } from 'ant-design-vue'
import { ref, defineExpose, inject } from 'vue'
import { NodeItem } from '../../../../../types/kDesigner'

// const emit = defineEmits(['close'])
const visible = ref(false)
const schemas = inject('schemas') as NodeItem[]

function handleClose () {
//   emit('close')
  visible.value = false
}

function handleOpen () {
  visible.value = true
  console.log(schemas)
}

defineExpose({
  handleOpen
})
</script>
