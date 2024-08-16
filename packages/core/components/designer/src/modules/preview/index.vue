<template>
  <Modal v-model="visible" title="预览" class="w-900px" width="900px" @close="handleClose" @ok="handleOk" okText="表单数据">
    <div class="min-w-750px rounded">
      <EBuilder :key="EBuilderKey" ref="kb" :page-schema="pageSchema" />

      <!-- 表单数据 start -->
      <Modal v-model="dataVisible" title="表单数据" class="w-860px" width="860px" @close="handleCloseData" @ok="handleCloseData">
        <div class="h-full rounded">
          <MonacoEditor ref="monacoEditorRef" autoToggleTheme readOnly class="h-full editor" :model-value="formValues" />
        </div>
      </Modal>
      <!-- 表单数据 end -->
    </div>
  </Modal>
</template>
<script lang="ts" setup>
import EBuilder from '../../../../builder'
import { pluginManager, getUUID, findSchemas } from '@epic-designer/utils'
import { ref, inject, computed, nextTick } from 'vue'
import { PageSchema,ComponentSchema } from '../../../../../types/epic-designer'
const MonacoEditor = pluginManager.getComponent('monacoEditor')
const Modal = pluginManager.getComponent('modal')
const monacoEditorRef = ref<any>(null)


const visible = ref(false)
const dataVisible = ref(false)
const formValues = ref({})

const pageSchema = inject('pageSchema') as PageSchema
const kb = ref<any>(null)
const EBuilderKey = ref('')

const getFormNames = computed(() => {
  // 查找页面 schema 中所有类型为 'form' 的组件，并将其转换为 ComponentSchema[] 类型
  const formNames = (findSchemas(pageSchema.schemas, item => item.type === 'form') as ComponentSchema[])
    // 提取每个 form 组件的名称（从 componentProps 中获取 name 属性）
    .map(schemas => schemas.componentProps?.name);

  // 使用 Set 去重后返回表单组件名称数组
  return [...new Set(formNames)];
});

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
  // 如果没有表单组件，则弹出提示并返回
  if(!getFormNames.value.length){
      alert('请添加表单组件后再尝试！')
      return
  }

  try {
    let values = {}

    // 遍历获取的表单组件名称并进行验证
    for(const name of getFormNames.value){
      values[`${name}`] = await kb.value.validate(name)
    }

    // 如果只有一个表单组件且名称为 'default'，则将 values 赋值为 'default' 的值
    if(getFormNames.value.length === 1 && getFormNames.value[0] === 'default'){
      values = values['default']
    }

    // 将验证后的表单数据转换为 JSON 字符串格式，并赋值给 formValues
    formValues.value = JSON.stringify(values, null, 2)

    // 在下一次 DOM 更新时，将 formValues 的值设置到 Monaco Editor 中
    nextTick(() => {
      monacoEditorRef.value?.setValue(formValues.value)
    })

    // 显示数据弹窗
    dataVisible.value = true
  } catch (err) {
    // 捕获并输出错误
    console.error(err)
  }
}


defineExpose({
  handleOpen
})
</script>
