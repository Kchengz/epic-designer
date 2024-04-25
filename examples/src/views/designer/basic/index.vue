<template>
  <EDesigner ref="designerRef" @save="handleSubmit">
  </EDesigner>

</template>
<script lang="ts" setup>
import { EDesigner, type PageSchema } from '@epic-designer/core'
import { ref } from 'vue'
const designerRef = ref<typeof EDesigner>()
/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e: PageSchema) {
  console.log(e)
}
</script>
