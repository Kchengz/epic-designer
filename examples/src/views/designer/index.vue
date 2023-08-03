<template>
  <!-- <button @click="handleReset">重置操作</button> -->
  <EDesigner ref="designerRef" @save="handleSubmit">
    <!-- <template #header-suffix>
        <button @click="handleSet">数据回显</button>
      </template> -->
  </EDesigner>
  
</template>
<script lang="ts" setup>
import { EDesigner, type PageSchema } from '@epic-designer/core'
import { ref } from 'vue'
const designerRef = ref<typeof EDesigner>()


// function handleReset () {
//   designerRef.value!.reset()
// }

// function handleSet() {
//   console.log(JSON.stringify(designerRef.value!.getData()))
//   const page = { schemas: [{ type: 'page', id: 'root', name: "测试页面", children: [{ label: '文本框222', type: 'input', field: 'input', icon: 'icon-write', isInput: true, componentProps: { defaultValue: '', placeholder: '请输入' }, id: '9wr7dfv9kjc00' }, { label: '选择框', type: 'select', icon: 'icon-xiala', field: 'select', isInput: true, componentProps: { options: [{ label: '选项1', value: '选项1' }, { label: '选项2', value: '选项2' }], placeholder: '请选择' }, id: '4efvesnkhdo00' }, { label: '复选框', type: 'checkbox', icon: 'icon-duoxuan1', field: 'checkbox', isInput: true, componentProps: { defaultValue: [], options: [{ label: '选项1', value: '选项1' }, { label: '选项2', value: '选项2' }], hidden: false, disabled: true }, id: 'ayk2q9c948s00' }], componentProps: { style: { padding: '16px' } } }], script: "const { defineExpose, getComponent } = this;\n\nfunction test (){\n    console.log('test')\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})" }
//   designerRef.value!.setData(page)
// }


/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e: PageSchema) {
  console.log(e)
}
</script>
