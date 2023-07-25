## epic-designer 设计器

:::tip 设计器
`epic-builder` 是一个页面构建组件，它可以将设计器生成的 JSON 配置构建成页面，功能包括组件渲染、事件绑定和数据回显等。
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
<script setup>
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
          icon: "icon-write",
          input: true,
          componentProps: {
            defaultValue: "",
            placeholder: "请输入",
            size: "default",
            type: "text",
          },
          id: "gbm1xhrrj5s00",
        },
      ],
      componentProps: {
        style: {
          padding: "16px",
        },
      },
    },
  ],
};
</script>
```

> 通过 JSON 渲染表单

<div>
	<EBuilder ref="ebForm" :pageSchema="pageSchemaForm" />
  <button @click="handleValidate">获取数据</button>
</div>

```vue
<template>
  <div>
    <EBuilder :pageSchema="pageSchema" />
  </div>
</template>
<script setup>
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
          icon: "icon-qiapian",
          name: "default",
          componentProps: {
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
              icon: "icon-write",
              input: true,
              componentProps: {
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
              icon: "icon-number",
              field: "number",
              input: true,
              componentProps: {
                placeholder: "请输入",
                size: "default",
                controlsPosition: "default",
              },
              id: "i6x0mqlm6js00",
            },
            {
              label: "选择框",
              type: "select",
              icon: "icon-xiala",
              field: "select",
              input: true,
              componentProps: {
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
              icon: "icon-danxuan-cuxiantiao",
              field: "radio",
              input: true,
              componentProps: {
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
      componentProps: {
        style: {
          padding: "16px",
        },
      },
    },
  ],
};
</script>
```

<script setup>
import { EBuilder } from "epic-designer";
import { ref } from 'vue'

const ebForm = ref(null)

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
          icon: "icon-write",
          input: true,
          componentProps: {
            defaultValue: "",
            placeholder: "请输入",
            size: "default",
            type: "text",
          },
          id: "gbm1xhrrj5s00",
        },
      ],
      componentProps: {
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
          icon: "icon-qiapian",
          name: "default",
          componentProps: {
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
              icon: "icon-write",
              input: true,
              componentProps: {
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
              icon: "icon-number",
              field: "number",
              input: true,
              componentProps: {
                placeholder: "请输入",
                size: "default",
                controlsPosition: "default",
              },
              id: "i6x0mqlm6js00",
            },
            {
              label: "选择框",
              type: "select",
              icon: "icon-xiala",
              field: "select",
              input: true,
              componentProps: {
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
              icon: "icon-danxuan-cuxiantiao",
              field: "radio",
              input: true,
              componentProps: {
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
      componentProps: {
        style: {
          padding: "16px",
        },
      },
    },
  ]
};

async function handleValidate(){
  console.log(await ebForm.value.validate())
  alert('您可以在控制台查看数据')
}



</script>

## API

| 参数       | 说明                              | 类型 | 默认值 | 版本 |
| ---------- | --------------------------------- | ---- | ------ | ---- |
| pageSchema | e-designer 设计器生成的 json 数据 | json | -      | -    |

## 函数

| 函数名称 | 说明                       | 参数          | 回调参数        | 版本   |
| -------- | -------------------------- | ------------- | --------------- | ------ |
| setData  | 设置表单数据，用于数据回显 | FormDataModel |                 | 0.0.36 |
| getData  | 跳过验证直接获取表单数据   | -             | Object \| false | 0.0.36 |
| validate | 验证表单并获取表单数据     | -             | Object \| false | 0.0.36 |

## 事件

| 事件名称 | 说明             | 参数            | 版本 |
| -------- | ---------------- | --------------- | ---- |
| ready    | 页面渲染完时触发 | { pageManager } |      |
