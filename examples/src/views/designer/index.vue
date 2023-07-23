<template>
  <!-- <button @click="handleGet">获取值</button> -->
  <!-- <button @click="handleReset">重置操作</button> -->
  <EDesigner ref="designerRef" @save="handleSubmit" />
</template>
<script lang="ts" setup>
import { EDesigner, type PageSchema } from '@epic-designer/core'
import { ref } from 'vue'
const designerRef = ref<typeof EDesigner>()
// function handleGet () {
//   console.log(JSON.stringify(designerRef.value!.getData()))
//   const page = { schemas: [{ type: 'page', id: 'root', children: [{ label: '输入框222', type: 'input', field: 'input', icon: 'icon-write', input: true, componentProps: { defaultValue: '', placeholder: '请输入' }, id: '9wr7dfv9kjc00' }, { label: '选择框', type: 'select', icon: 'icon-xiala', field: 'select', input: true, componentProps: { options: [{ label: '选项1', value: '选项1' }, { label: '选项2', value: '选项2' }], placeholder: '请选择' }, id: '4efvesnkhdo00' }, { label: '复选框', type: 'checkbox', icon: 'icon-duoxuan1', field: 'checkbox', input: true, componentProps: { defaultValue: [], options: [{ label: '选项1', value: '选项1' }, { label: '选项2', value: '选项2' }], hidden: false, disabled: true }, id: 'ayk2q9c948s00' }], componentProps: { style: { padding: '16px' } } }], script: "const { defineExpose, getComponent } = this;\n\nfunction test (){\n    console.log('test')\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})" }
//   designerRef.value!.setData(page)
// }

// function handleReset () {
//   designerRef.value!.reset()
// }

/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e: PageSchema) {
  console.log(e)
}
</script>
