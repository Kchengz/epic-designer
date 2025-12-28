# EBuilder 生成器

:::tip 生成器
`EBuilder` 是一个页面构建组件，它可以将设计器生成的 JSON 配置构建成页面，功能包括组件渲染、事件绑定和数据回显等。
:::

## 基础用法

> 通过 JSON 渲染组件

<div>
	<EBuilder :pageSchema="pageSchema" />
</div>

```vue
<template>
  <div>
    <EBuilder :pageSchema="pageSchema" />
  </div>
</template>
<script lang="ts" setup>
import { EBuilder } from "epic-designer";

const pageSchema = {
  schemas: [
    {
      type: "page",
      id: "root",
      children: [
        {
          label: "输入框",
          type: "input",
          field: "input",
          icon: "epic-icon-write",
          input: true,
          props: {
            defaultValue: "",
            placeholder: "请输入",
            size: "default",
            type: "text",
          },
          id: "gbm1xhrrj5s00",
        },
      ],
      props: {
        style: {
          padding: "16px",
        },
      },
    },
  ],
};
</script>
```

## 校验表单并获取数据
<div>
	<EBuilder ref="ebForm" :pageSchema="pageSchemaForm" />
  <button @click="handleValidate">获取数据</button>
  <div>
  {{formData}}
  </div>
</div>

```vue
<template>
	<div>
		<EBuilder ref="ebForm" :pageSchema="pageSchema" />
  		<button @click="handleValidate">获取数据</button>
  	<div>
  {{formData}}
  </div>
</div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { EBuilder } from "epic-designer";

const pageSchema = {
  schemas: [
    {
      type: "page",
      id: "root",
      children: [
        {
          label: "表单",
          type: "form",
          icon: "epic-icon-qiapian",
          name: "default",
          props: {
            labelWidth: 100,
            labelCol: {
              span: 5,
            },
            wrapperCol: {
              span: 19,
            },
            hideRequiredMark: false,
            labelPosition: "right",
            size: "default",
            requireAsteriskPosition: "left",
          },
          children: [
            {
              label: "输入框",
              type: "input",
              field: "input",
              icon: "epic-icon-write",
              input: true,
              props: {
                defaultValue: "",
                placeholder: "请输入",
                size: "default",
                type: "text",
              },
              id: "7k6ajqpxhl000",
            },
            {
              label: "数字输入框",
              type: "number",
              icon: "epic-icon-number",
              field: "number",
              input: true,
              props: {
                placeholder: "请输入",
                size: "default",
                controlsPosition: "default",
              },
              id: "i6x0mqlm6js00",
            },
            {
              label: "选择框",
              type: "select",
              icon: "epic-icon-xiala",
              field: "select",
              input: true,
              props: {
                options: [
                  {
                    label: "选项1",
                    value: "选项1",
                  },
                  {
                    label: "选项2",
                    value: "选项2",
                  },
                ],
                placeholder: "请选择",
                size: "default",
                effect: "light",
                placement: "bottom-start",
              },
              id: "80gl3fnca3g00",
            },
            {
              label: "单选框",
              type: "radio",
              icon: "epic-icon-danxuan-cuxiantiao",
              field: "radio",
              input: true,
              props: {
                options: [
                  {
                    label: "选项1",
                    value: "选项1",
                  },
                  {
                    label: "选项2",
                    value: "选项2",
                  },
                ],
                size: "default",
              },
              id: "2ggd4l3i109w0",
            },
          ],
          id: "eqf5rtg2ohc00",
        },
      ],
      props: {
        style: {
          padding: "16px",
        },
      },
    },
  ],
};
    
const ebForm = ref(null)
const formData = ref(null)

async function handleValidate(){
  formData.value = {...(await ebForm.value.validate())}
}
</script>
```



## 重置表单
  <div>
    <EBuilder ref="ebRef2" :pageSchema="pageSchema2">
    </EBuilder>
    <button @click="handleReset">
      重置表单
    </button>
  </div>

```vue
<template>
  <div>
    <EBuilder ref="ebRef" :pageSchema="pageSchema"> </EBuilder>
    <button @click="handleReset">重置数据</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { EBuilder, PageSchema } from "epic-designer";

const ebRef = ref<any>(null);

async function handleReset() {
  // 获取表单实例
  const form = await ebRef.value?.getFormInstance();
  // 调用组件实例方法，参考ui from 提供的重置方法，本案例以Ant Design Vue为基础UI
  form?.resetFields();
}
const pageSchema = ref<PageSchema>({
  schemas: [
    {
      type: "page",
      id: "root",
      label: "页面",
      children: [
        {
          label: "表单",
          type: "form",
          icon: "epic-icon-daibanshixiang",
          props: {
            name: "default",
            labelWidth: 100,
            labelCol: {
              span: 5,
            },
            wrapperCol: {
              span: 19,
            },
            hideRequiredMark: false,
            labelPlacement: "left",
            labelAlign: "right",
            requireMarkPlacement: "right",
            size: "medium",
          },
          children: [
            {
              label: "姓名",
              type: "input",
              field: "input_sb6jhfb8",
              icon: "epic-icon-write",
              input: true,
              props: {
                defaultValue: "",
                placeholder: "请输入",
                type: "text",
                size: "medium",
                disabled: false,
              },
              id: "input_sb6jhfb8",
            },
          ],
          id: "form_18vemlk8",
        },
      ],
      props: {
        style: {
          padding: "16px",
        },
      },
    },
  ],
});

// 表单赋值
onMounted(async () => {
  setTimeout(() => {
    ebRef.value?.setData({
      input_sb6jhfb8: "自动填写的内容",
    });
  },200);
});
</script>
```

<script setup>
import { EBuilder } from "epic-designer";
import { ref,onMounted } from 'vue'
import "epic-designer/dist/style.css";
import { EDesigner, pluginManager } from "epic-designer";
import { setupElementPlus } from "@epic-designer/element-plus";
import 'element-plus/dist/index.css'
setupElementPlus(pluginManager);
const ebForm = ref(null)
const formData = ref(null)
const ebRef2 = ref(null)
const pageSchema = {
  schemas: [
    {
      type: "page",
      id: "root",
      children: [
        {
          label: "输入框",
          type: "input",
          field: "input",
          icon: "epic-icon-write",
          input: true,
          props: {
            defaultValue: "",
            placeholder: "请输入",
            size: "default",
            type: "text",
          },
          id: "gbm1xhrrj5s00",
        },
      ],
      props: {
        style: {
          padding: "16px",
        },
      },
    },
  ],
};

const pageSchemaForm = {
  schemas: [
    {
      type: "page",
      id: "root",
      children: [
        {
          label: "表单",
          type: "form",
          icon: "epic-icon-qiapian",
          name: "default",
          props: {
            labelWidth: 100,
            labelCol: {
              span: 5,
            },
            wrapperCol: {
              span: 19,
            },
            hideRequiredMark: false,
            labelPosition: "right",
            size: "default",
            requireAsteriskPosition: "left",
          },
          children: [
            {
              label: "输入框",
              type: "input",
              field: "input",
              icon: "epic-icon-write",
              input: true,
              props: {
                defaultValue: "",
                placeholder: "请输入",
                size: "default",
                type: "text",
              },
              id: "7k6ajqpxhl000",
            },
            {
              label: "数字输入框",
              type: "number",
              icon: "epic-icon-number",
              field: "number",
              input: true,
              props: {
                placeholder: "请输入",
                size: "default",
                controlsPosition: "default",
              },
              id: "i6x0mqlm6js00",
            },
            {
              label: "选择框",
              type: "select",
              icon: "epic-icon-xiala",
              field: "select",
              input: true,
              props: {
                options: [
                  {
                    label: "选项1",
                    value: "选项1",
                  },
                  {
                    label: "选项2",
                    value: "选项2",
                  },
                ],
                placeholder: "请选择",
                size: "default",
                effect: "light",
                placement: "bottom-start",
              },
              id: "80gl3fnca3g00",
            },
            {
              label: "单选框",
              type: "radio",
              icon: "epic-icon-danxuan-cuxiantiao",
              field: "radio",
              input: true,
              props: {
                options: [
                  {
                    label: "选项1",
                    value: "选项1",
                  },
                  {
                    label: "选项2",
                    value: "选项2",
                  },
                ],
                size: "default",
              },
              id: "2ggd4l3i109w0",
            },
          ],
          id: "eqf5rtg2ohc00",
        },
      ],
      props: {
        style: {
          padding: "16px",
        },
      },
    },
  ]
};

async function handleValidate(){
  formData.value = {...(await ebForm.value.validate())}
  // alert('您可以在控制台查看数据')
}

async function handleReset() {
console.log(ebRef2.value)
  // 获取表单实例
  const form = await ebRef2.value?.getFormInstance()
  // 调用组件实例方法，参考ui from 提供的方法
  form?.resetFields()
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
          "props": {
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
              "label": "姓名",
              "type": "input",
              "field": "input_sb6jhfb8",
              "icon": "epic-icon-write",
              "input": true,
              "props": {
                "defaultValue": "",
                "placeholder": "请输入",
                "type": "text",
                "size": "medium",
                "disabled": false
              },
              "id": "input_sb6jhfb8"
            }
          ],
          "id": "form_18vemlk8"
        }
      ],
      "props": {
        "style": {
          "padding": "16px"
        }
      }
    }
  ]
}

onMounted(async () => {
  setTimeout(() => {
    ebRef2.value?.setData({
      input_sb6jhfb8: "自动填写的内容",
    });
  },200);
})


</script>


## API

| 参数       | 说明                             | 类型    | 默认值 | 版本  |
| ---------- | -------------------------------- | ------- | ------ | ----- |
| pageSchema | EDesigner 设计器生成的 json 数据 | json    | -      | -     |
| formData   | 表单数据，用于数据回显(仅用于name为default的表单)           | FormDataModel | -  | 0.9.15 |
| disabled   | 禁用EBuilder所有输入项           | boolean | false  | 0.9.4 |
| fieldStates | 控制表单字段状态 | FieldStates | - | 1.1.0 |

## 函数

| 函数名称        | 说明                       | 参数          | 回调参数                   | 版本   |
| --------------- | -------------------------- | ------------- | -------------------------- | ------ |
| setData         | 设置表单数据，用于数据回显 | FormDataModel |                            | 0.0.36 |
| getData         | 跳过验证直接获取表单数据   | -             | Promise<br /><Object \| false>   | 0.0.36 |
| validate        | 验证表单并获取表单数据     | -             | Promise<br /><Object \| false>   | 0.0.36 |
| getFormInstance | 获取表单实例               |               | Promise<br /><Form \| false> | 0.9.4 |

## 事件

| 事件名称 | 说明             | 参数            | 版本 |
| -------- | ---------------- | --------------- | ---- |
| ready    | 页面渲染完时触发 | { pageManager } |      |


## fieldStates 属性说明
- fieldStates 用于控制表单字段状态，如禁用、必填等
- 每个对象表示一个字段状态，包含以下属性
  - field: 字段名称
  - condition: 触发条件，为一个函数，接收当前表单数据作为参数，返回一个布尔值
  - required: 是否必填
  - state: 字段状态，可选值为 'DISABLED' | 'HIDE' | 'READ' | 'WRITE'

  示例：
  ```javascript

  // 设置 name 字段禁用
    const fieldStates = [
    {
      field: 'name',
      state: 'DISABLED'
    }
  ]

  // 当 name 字段的值为 '张三' 时，将 name 字段设为必填并禁用
  const fieldStates = [
    {
      field: 'name',
      condition: (data) => data.name === '张三',
      state: 'DISABLED'
    }
  ]
  ```
