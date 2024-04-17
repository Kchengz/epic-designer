<template>
  <Modal v-model="visible" title="预览" class="w-900px" width="900px" @close="handleClose" @ok="handleOk" okText="输出结果">
    <div class="min-w-750px rounded bg-white">
      <EBuilder :key="EBuilderKey" ref="kb" :page-schema="pageSchema" />

      <!-- 输出结果 start -->
      <Modal v-model="dataVisible" title="表单数据" class="w-860px" width="860px" @close="handleCloseData" @ok="handleCloseData">
        <div class="h-full rounded bg-white">
          <MonacoEditor ref="monacoEditorRef" class="h-full editor" :model-value="formValues" />
        </div>
      </Modal>
      <!-- 输出结果 end -->
    </div>
  </Modal>
</template>
<script lang="ts" setup>
import EBuilder from '../../../../builder'
import { pluginManager, getUUID } from '@epic-designer/utils'
import { ref, inject, nextTick } from 'vue'
import { PageSchema } from '../../../../../types/epic-designer'
const MonacoEditor = pluginManager.getComponent('monacoEditor')
const Modal = pluginManager.getComponent('modal')
const monacoEditorRef = ref<any>(null)


const visible = ref(false)
const dataVisible = ref(false)
const formValues = ref({})

const pageSchema = inject('pageSchema') as PageSchema
const kb = ref<any>(null)
const EBuilderKey = ref('')

function handleCloseData() {
  dataVisible.value = false
}

function handleClose() {
  visible.value = false
}



function handleOpen() {
  visible.value = true
  // 通过修改key重新渲染组件
  EBuilderKey.value = getUUID()
}

async function handleOk() {
  try {
    const values = await kb.value.validate()
    console.log('表单结果为：', values)
    formValues.value = JSON.stringify(values, null, 2)
    nextTick(() => {
      monacoEditorRef.value?.setValue(formValues.value)
    })
    dataVisible.value = true
  } catch (err) {
    if (typeof err === 'string') {
      alert(err + '\r\n请添加表单组件后再尝试！')
    }
    console.error(err)
  }

}

defineExpose({
  handleOpen
})
</script>
