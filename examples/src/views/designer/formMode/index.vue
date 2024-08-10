<template>
  <EDesigner ref="designerRef" formMode @save="handleSubmit" title="表单模式示例">
    <template #header-prefix>
      <div>
        欢迎使用EpicDesigner设计器
      </div>
    </template>
  </EDesigner>
</template>
<script lang="ts" setup>
import { EDesigner, type PageSchema } from '@epic-designer/core'
import { ref } from 'vue'

const designerRef = ref<InstanceType<typeof EDesigner>>()
/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e: PageSchema) {
  console.log(e)
}
</script>
