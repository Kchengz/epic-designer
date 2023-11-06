<template>
  <div>
    <EBuilder ref="kfb" :pageSchema="pageSchema">
      <template #sdff="{ model, record }">
        <input v-model="model[record.field]">
      </template>
    </EBuilder>
    <div @click="handleGetData">
      获取数据
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { EBuilder } from '@epic-designer/core'

import { PageSchema } from '@epic-designer/core/types/epic-designer'

const kfb = ref<any>(null)
async function handleGetData() {
  const values = await kfb.value?.getData()
  console.log(values)
}
const pageSchema = ref<PageSchema>({
  "schemas": [
    {
      "type": "page",
      "id": "root",
      "label": "页面",
      "children": [
        {
          "label": "表单",
          "type": "form",
          "icon": "icon-daibanshixiang",
          "name": "default",
          "componentProps": {
            "labelWidth": 100,
            "labelCol": {
              "span": 5
            },
            "wrapperCol": {
              "span": 19
            },
            "hideRequiredMark": false,
            "labelPosition": "right",
            "size": "default",
            "requireAsteriskPosition": "left"
          },
          "children": [
            {
              "label": "输入框",
              "type": "input",
              "field": "input_tzpfvoqp",
              "icon": "icon-write",
              "input": true,
              "componentProps": {
                "defaultValue": "",
                "placeholder": "请输入",
                "size": "default",
                "type": "text"
              },
              "id": "input_tzpfvoqp"
            },
            {
              "label": "选择框",
              "type": "select",
              "icon": "icon-xiala",
              "field": "select_gbqzlhlu",
              "input": true,
              "componentProps": {
                "options": [
                  {
                    "label": "选项1",
                    "value": "选项1"
                  },
                  {
                    "label": "选项2",
                    "value": "选项2"
                  }
                ],
                "placeholder": "请选择",
                "size": "default",
                "effect": "light",
                "placement": "bottom-start"
              },
              "id": "select_gbqzlhlu"
            }
          ],
          "id": "form_ydqzoj6x"
        }
      ],
      "componentProps": {
        "style": {
          "padding": "16px"
        }
      }
    }
  ],
  "script": "const { defineExpose, getComponent } = this;\n\nfunction test (){\n    console.log('test')\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})"
})


// 表单赋值
onMounted(async () => {
  kfb.value?.setData({
    input_tzpfvoqp: '测试数据'
  })

  // const data = await kfb.value?.getData()
  const data = await kfb.value?.validate()
  console.log(data)
})


</script>
