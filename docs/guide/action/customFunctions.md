# 自定义函数

:::tip 自定义函数说明
`自定义函数` 是设计器中的一项关键功能，它赋予用户更灵活的操作和定制能力。通过自定义函数，用户可以在设计器中实现特定的逻辑和行为，满足其个性化的需求。
:::

在自定义函数内提供了一个 epic 对象，可以通过该对象对应的方法与页面及组件进行交互,如下面代码，解构获取defineExpose函数（暴露自定义函数给设计器使用）、find函数（通过id查询组件实例），更多方法可以查看下面 [Epic Methods](#epic-methods)

```js
const { defineExpose, find } = epic;

function test(e) {
  find("ho0tpt7i7tc00").setAttr("hidden", e);
}

function setDisabled(e) {
  find("ho0tpt7i7tc00").setAttr("disabled", e);
}

// 通过defineExpose暴露的函数或者属性
defineExpose({
  test,
  setDisabled,
});
```

## 显示,禁用交互示例-设计组件

<div class="epic-designer-container">
	<EDesigner ref="edRef"  @save="handleSubmit"  />
</div>

## 显示,禁用交互示例-渲染组件

<EBuilder :pageSchema="pageSchema" />
epic.json 数据
```json
{
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
            "size": "default",
            "labelWidth": 100,
            "labelCol": {
              "span": 5
            },
            "wrapperCol": {
              "span": 19
            },
            "hideRequiredMark": false,
            "labelPosition": "right",
            "requireAsteriskPosition "left",
            ,
          },
          "id": "3543akxhdum00",
          "name": "default",
          "children": [
            {
              "label": "栅格布局",
              "type": "row",
              "icon": "epic-icon-zhage",
              "childImmovable": true,
              "children": [
                {
                  "type": "col",
                  "children": [
                    {
                      "label": "禁用姓名",
                      "type": "switch",
                      "icon": "epic-icon-kaiguan3",
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
                      "icon": "epic-icon-kaiguan3",
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
              "icon": "epic-icon-write",
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
}
```

## 表单自动求和-渲染组件

<EBuilder :pageSchema="pageSchema2" />
epic.json 数据
```json
{
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
            "labelWidth": 100,
            "labelLayout": "fixed"
          },
          "children": [
            {
              "label": "数值1",
              "type": "number",
              "icon": "epic-icon-number",
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
              "icon": "epic-icon-number",
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
              "icon": "epic-icon-number",
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
}
```
<ConfigProvider :theme="{ algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm }">
</ConfigProvider>

<script setup>
import "epic-designer/dist/style.css";
import { EDesigner,EBuilder,pluginManager } from "epic-designer";
import { ref, onMounted } from 'vue';
import { setupAntd } from "epic-designer/dist/ui/antd";
import { ConfigProvider, theme } from 'ant-design-vue'
import { useTheme } from '@epic-designer/utils'
const { isDark } = useTheme()
setupAntd(pluginManager);

const edRef = ref(null)
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
            "size": "default",
            "labelWidth": 100,
            "labelCol": {
              "span": 5
            },
            "wrapperCol": {
              "span": 19
            },
            "hideRequiredMark": false,
            "labelPosition": "right",
            "requireAsteriskPosition": "left",
            "labelWidth": 100,
            "labelLayout": "fixed"
          },
          "id": "3543akxhdum00",
          "name": "default",
          "children": [
            {
              "label": "栅格布局",
              "type": "row",
              "icon": "epic-icon-zhage",
              "childImmovable": true,
              "children": [
                {
                  "type": "col",
                  "children": [
                    {
                      "label": "禁用姓名",
                      "type": "switch",
                      "icon": "epic-icon-kaiguan3",
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
                      "icon": "epic-icon-kaiguan3",
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
              "icon": "epic-icon-write",
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
}

const pageSchema2 = {
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
              "label": "数值1",
              "type": "number",
              "icon": "epic-icon-number",
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
              "icon": "epic-icon-number",
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
              "icon": "epic-icon-number",
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
}
onMounted(()=>{
  edRef.value.setData(pageSchema)
})

function handleSubmit (e) {
  console.log(e)
}
</script>

<style>
.epic-designer-container{
width:1200px;
height:800px;
border: 1px solid var(--epic-border-color);
position: relative;
z-index: 20;
background: white;
}
</style>

## Epic Methods

#### defineExpose

类型：`(exposed:Record<string, any>) => void `

说明：暴露的自定义函数或者属性，注：该方法仅需要执行一次

#### find

类型：`(id: string) => ComponentPublicInstance `

说明：通过id获取组件实例

#### getComponent

类型：`(id: string) => ComponentPublicInstance `

说明：通过id获取组件实例，跟find函数效果一致，find函数名称更简短

> 除以上方法外还包含所有公共函数
