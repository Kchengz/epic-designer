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
      <EBuilder
        :key="EBuilderKey"
        ref="kb"
        :page-schema="pageSchema"
      />
    </div>
  </Modal>
</template>
<script lang="ts" setup>
import EBuilder from '../../../../builder'
import { pluginManager, getUUID } from '@epic-designer/utils'
import { ref, inject } from 'vue'
import { PageSchema } from '../../../../../types/epic-designer'

const Modal = pluginManager.getComponent('modal')

const visible = ref(false)
const pageSchema = inject('pageSchema') as PageSchema
const kb = ref<any>(null)
const EBuilderKey = ref('')
function handleClose () {
  visible.value = false
}

function handleOpen () {
  visible.value = true
  // 通过修改key重新渲染组件
  EBuilderKey.value = getUUID()
}

async function handleOk () {
  const values = await kb.value.validate()
  console.log('表单结果为：', values)
}

defineExpose({
  handleOpen
})
</script>
