<template>
  <div class="epic-page-main p-2">
    <EBuilder
      ref="ebRef"
      :page-schema="pageSchema"
      @ready="handleReady"
    />
    <div @click="handleGetData">
      获取数据
    </div>
    {{ data }}
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { EBuilder, PageManager, PageSchema } from '@epic-designer/core'

const ebRef = ref<any>(null)
const data = ref({})
async function handleGetData() {
  const values = await ebRef.value?.getData()
  data.value = values
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
          "icon": "epic-icon-daibanshixiang",
          "componentProps": {
            "name": "default",
            "labelWidth": 100,
            "labelCol": {
              "span": 5
            },
            "wrapperCol": {
              "span": 19
            },
            "hideRequiredMark": false,
            "labelPlacement": "left",
            "labelAlign": "right",
            "requireMarkPlacement": "right",
            "size": "medium"
          },
          "children": [
            {
              "label": "输入框22",
              "type": "input",
              "field": "input_sb6jhfb8",
              "icon": "epic-icon-write",
              "input": true,
              "componentProps": {
                "defaultValue": "",
                "placeholder": "请输入",
                "type": "text",
                "size": "medium",
                "disabled": false
              },
              "id": "input_sb6jhfb8"
            },
            {
              "label": "按钮",
              "type": "button",
              "field": "button_ks9jbmym",
              "icon": "epic-icon-button-remove",
              "input": false,
              "componentProps": {
                "bordered": true,
                "type": "default",
                "size": "medium"
              },
              "id": "button_ks9jbmym",
              "on": {
                "click": [
                  {
                    "type": "custom",
                    "methodName": "test",
                    "componentId": null
                  }
                ]
              }
            }
          ],
          "id": "form_18vemlk8"
        }
      ],
      "componentProps": {
        "style": {
          "padding": "16px"
        }
      }
    }
  ],
  "script": "const { defineExpose, find } = epic;\n\nfunction test (){\n    console.log('test')\n    find('input_sb6jhfb8').setAttr('disabled',!find('input_sb6jhfb8').getAttr('disabled'))\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})"
})


function handleReady(pageManager: PageManager) {
  console.log(pageManager)
}
// 表单赋值
onMounted(async () => {
  const data = await ebRef.value?.validate()
  console.log(data)
})


</script>
