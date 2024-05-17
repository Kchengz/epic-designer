<template>
  <div class="epic-page-main p-2 h-full flex flex-col">
    <h2 class="pt-4 pl-8 text-24px block">禁用隐藏</h2>
    <EBuilder ref="ebRef" :pageSchema="pageSchema">
    </EBuilder>
    <Divider orientation="left">页面结构数据</Divider>
    <MonacoEditor class="flex-1" :modelValue="pageSchema" autoToggleTheme readOnly valueFormat="json" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EBuilder, PageSchema } from '@epic-designer/core'
import { pluginManager } from '@epic-designer/utils'
import { Divider } from 'ant-design-vue'

const MonacoEditor = pluginManager.getComponent('monacoEditor')
const ebRef = ref<InstanceType<typeof EBuilder>>()

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
          "componentProps": {
            "size": "default",
            "labelWidth": 100,
            "labelCol": {
              "span": 5
            },
            "wrapperCol": {
              "span": 19
            },
            "style": {
              "width": "600px"
            },
            "hideRequiredMark": false,
            "labelPosition": "right",
            "requireAsteriskPosition": "left",
            "labelLayout": "fixed"
          },
          "id": "3543akxhdum00",
          "name": "default",
          "children": [
            {
              "label": "栅格布局",
              "type": "row",
              "icon": "icon-zhage",
              "children": [
                {
                  "type": "col",
                  "children": [
                    {
                      "label": "禁用姓名",
                      "type": "switch",
                      "icon": "icon-kaiguan3",
                      "field": "switch_vhzz40mc",
                      "input": true,
                      "componentProps": {
                        "disabled": false
                      },
                      "id": "switch_vhzz40mc",
                      "on": {
                        "change": [
                          {
                            "type": "custom",
                            "methodName": "setDisabled",
                            "componentId": null
                          }
                        ]
                      }
                    }
                  ],
                  "componentProps": {
                    "span": 12
                  },
                  "id": "col_fmqw6vre"
                },
                {
                  "type": "col",
                  "children": [
                    {
                      "label": "隐藏姓名",
                      "type": "switch",
                      "icon": "icon-kaiguan3",
                      "field": "switch_k561x18z",
                      "input": true,
                      "componentProps": {},
                      "id": "switch_k561x18z",
                      "on": {
                        "change": [
                          {
                            "type": "custom",
                            "methodName": "test",
                            "componentId": null
                          }
                        ]
                      }
                    }
                  ],
                  "componentProps": {
                    "span": 12
                  },
                  "id": "col_i5q4prg6"
                }
              ],
              "id": "row_w2fw9pkw"
            },
            {
              "label": "姓名",
              "type": "input",
              "icon": "icon-write",
              "field": "input_ho0tpt7i7tc00",
              "input": true,
              "componentProps": {
                "placeholder": "请输入",
                "defaultValue": "",
                "size": "default",
                "type": "text",
                "hidden": false,
                "disabled": false
              },
              "id": "ho0tpt7i7tc00",
              "on": {
                "input": [
                  {
                    "type": "custom",
                    "methodName": "test",
                    "componentId": null
                  }
                ]
              }
            }
          ]
        }
      ],
      "componentProps": {
        "style": {
          "padding": "16px"
        }
      }
    }
  ],
  "script": "const { defineExpose, getComponent } = this;\n\nfunction test (e){\n    getComponent('ho0tpt7i7tc00').setAttr('hidden',e)\n}\n\nfunction setDisabled (e){\n    getComponent('ho0tpt7i7tc00').setAttr('disabled',e)\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test,\n setDisabled\n})"
})

</script>
