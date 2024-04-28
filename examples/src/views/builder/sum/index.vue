<template>
  <div class="bg-white p-2 h-full flex flex-col">
    <h2 class="pt-4 pl-8 text-24px block">计算求和</h2>

    <EBuilder ref="ebRef" :pageSchema="pageSchema">
    </EBuilder>
    <Divider orientation="left">页面结构数据</Divider>
    <MonacoEditor class="flex-1" :modelValue="pageSchema" readOnly valueFormat="json" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { EBuilder, PageSchema } from '@epic-designer/core'
import { pluginManager } from '@epic-designer/utils'
import { Divider } from 'ant-design-vue'

const MonacoEditor = pluginManager.getComponent('monacoEditor')
const ebRef = ref<any>(null)

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
            "requireAsteriskPosition": "left",
            "labelLayout": "fixed",
            "style": {
              "width": "600px"
            }
          },
          "children": [
            {
              "label": "数值1",
              "type": "number",
              "icon": "icon-number",
              "field": "number_9m5zzib6",
              "input": true,
              "componentProps": {
                "style": {
                  "width": "100%"
                },
                "placeholder": "请输入"
              },
              "id": "1",
              "on": {
                "change": [
                  {
                    "type": "custom",
                    "methodName": "test",
                    "componentId": null
                  }
                ]
              }
            },
            {
              "label": "数值2",
              "type": "number",
              "icon": "icon-number",
              "field": "number_szitefkr",
              "input": true,
              "componentProps": {
                "style": {
                  "width": "100%"
                },
                "placeholder": "请输入"
              },
              "id": "2",
              "on": {
                "change": [
                  {
                    "type": "custom",
                    "methodName": "test",
                    "componentId": null
                  }
                ]
              }
            },
            {
              "label": "总值",
              "type": "number",
              "icon": "icon-number",
              "field": "number_bs7n1wpv",
              "input": true,
              "componentProps": {
                "style": {
                  "width": "100%"
                },
                "placeholder": "请输入"
              },
              "id": "3"
            }
          ],
          "id": "3543akxhdum00"
        }
      ],
      "componentProps": {
        "style": {
          "padding": "16px"
        }
      }
    }
  ],
  "script": "const { defineExpose, getComponent } = this;\n\nfunction test (e){\n    const sum = (getComponent('1').getValue()??0)+ (getComponent('2').getValue()??0)\n    getComponent('3').setValue(sum)\n    \n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})"
})


// 表单赋值
onMounted(async () => {
})


</script>
