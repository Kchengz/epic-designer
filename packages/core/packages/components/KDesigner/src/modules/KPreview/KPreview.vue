<template>
  <Modal
    v-model="visible"
    title="预览"
    class="w-900px"
    width="900px"
    @close="handleClose"
    @ok="handleOk"
    okText="输出结果"
  >
    <div class="min-w-750px rounded bg-white">
      <KBuilder
        :key="kBuilderKey"
        ref="kb"
        :page-schema="pageSchema"
      />
    </div>
  </Modal>
</template>
<script lang="ts" setup>
import KBuilder from '../../../../KBuilder'
import { pluginManager, getUUID } from '@k-designer/utils'
import { ref, inject } from 'vue'
import { PageSchema } from '../../../../../types/kDesigner'

const Modal = pluginManager.getComponent('modal')

const visible = ref(false)
const pageSchema = inject('pageSchema') as PageSchema
const kb = ref<any>(null)
const kBuilderKey = ref('')
function handleClose () {
  visible.value = false
}

function handleOpen () {
  visible.value = true
  // 通过修改key重新渲染组件
  kBuilderKey.value = getUUID()
}

async function handleOk () {
  const values = await kb.value.validate()
  console.log('表单结果为：', values)
}

defineExpose({
  handleOpen
})
</script>
