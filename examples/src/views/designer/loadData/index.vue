<template>
  <!-- <button @click="handleReset">重置操作</button> -->
  <EDesigner ref="designerRef" @save="handleSubmit">
  </EDesigner>

</template>
<script lang="ts" setup>
import { EDesigner, type PageSchema } from '@epic-designer/core'
import { ref, onMounted } from 'vue'
const designerRef = ref<typeof EDesigner>()


const pageSchema = {
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
            "layout": "horizontal",
            "name": "default",
            "labelWidth": 100,
            "labelLayout": "fixed",
            "labelCol": {
              "span": 5
            },
            "wrapperCol": {
              "span": 19
            },
            "hideRequiredMark": false,
            "colon": true,
            "labelAlign": "right",
            "size": "middle"
          },
          "children": [
            {
              "label": "输入框",
              "type": "input",
              "field": "input_z28lqm8h",
              "icon": "epic-icon-write",
              "input": true,
              "componentProps": {
                "bordered": true,
                "placeholder": "请输入"
              },
              "id": "input_z28lqm8h"
            },
            {
              "label": "数字输入框",
              "type": "number",
              "icon": "epic-icon-number",
              "field": "number_8svvq0cr",
              "input": true,
              "componentProps": {
                "style": {
                  "width": "100%"
                },
                "placeholder": "请输入"
              },
              "id": "number_8svvq0cr"
            },
            {
              "label": "选择框",
              "type": "select",
              "icon": "epic-icon-xiala",
              "field": "select_57wyuxbk",
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
                "listHeight": 256,
                "placeholder": "请选择",
                "placement": "bottomLeft"
              },
              "id": "select_57wyuxbk"
            },
            {
              "label": "选择框",
              "type": "select",
              "icon": "epic-icon-xiala",
              "field": "select_f3l6gstx",
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
                "listHeight": 256,
                "placeholder": "请选择",
                "placement": "bottomLeft"
              },
              "id": "select_f3l6gstx"
            },
            {
              "label": "选择框",
              "type": "select",
              "icon": "epic-icon-xiala",
              "field": "select_jwlufr5s",
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
                "listHeight": 256,
                "placeholder": "请选择",
                "placement": "bottomLeft"
              },
              "id": "select_jwlufr5s"
            }
          ],
          "id": "form_cyzocgex"
        }
      ],
      "componentProps": {
        "style": {
          "padding": "16px"
        }
      }
    }
  ],
  "script": "const { defineExpose, find } = epic;\n\nfunction test (){\n    console.log('test')\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})"
}

onMounted(() => {
  designerRef.value?.setData(pageSchema)
})

/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e: PageSchema) {
  console.log(e)
}
</script>
