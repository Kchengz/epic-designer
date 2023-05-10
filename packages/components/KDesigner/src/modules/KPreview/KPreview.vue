<template>
  <component
    :is="Modal"
    v-model:visible="visible"
    v-model:show="visible"
    v-model="visible"
    title="预览"
    width="800px"
    :footer="null"
  >
    <div class="k-preview-container">
      <KBuilder
        :key="kBuilderKey"
        ref="kb"
        :schemas="schemas"
        :script="script"
      />
      <div class="k-modal-footer">
        <Button @click="handleClose">
          关闭
        </Button>
        <Button
          type="primary"
          @click="handleOk"
        >
          输出结果
        </Button>
      </div>
    </div>
  </component>
</template>
<script lang="ts" setup>
import KBuilder from '../../../../KBuilder'
import { pluginManager, getUUID } from '../../../../../utils'
import { ref, inject } from 'vue'
import { NodeItem } from '../../../../../types/kDesigner'

const Modal = pluginManager.getComponent('Modal')
const Button = pluginManager.getComponent('button')

const visible = ref(false)
const schemas = inject('schemas') as NodeItem[]
const script = inject('script') as string
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
