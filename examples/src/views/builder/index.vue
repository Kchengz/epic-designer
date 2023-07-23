<template>
  <div>
    <EBuilder
      ref="kfb"
      :schemas="schemas"
    >
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
import { ref } from 'vue'
import { EBuilder } from '@epic-designer/core/packages'
import { NodeItem } from '@epic-designer/core/types/epic-designer'

const kfb = ref<any>(null)
async function handleGetData () {
  const values = await kfb.value?.getData()
  console.log(values)
}
const schemas: NodeItem[] = [{
  type: 'form',
  id: 'root',
  name: 'default',
  componentProps: {
    layout: 'inline',
    labelWidth: 80,
    labelLayout: 'fixed',
    labelCol: {
      span: 5
    },
    wrapperCol: {
      span: 19
    },
    hideRequiredMark: false
  },
  children: [
    {
      label: '输入框',
      type: 'slot',
      field: 'input',
      slotName: 'sdff',
      icon: 'icon-write',
      input: true,
      id: '6jewjjk2jho00',

      componentProps: {
        type: 'text'
      }
    },
    {
      label: '密码输入框',
      type: 'number',
      icon: 'icon-number',
      field: 'number',
      input: true,
      show: ({ values }) => {
        return values.input !== '4444'
      },
      rules: [
        {
          require: true,
          message: '请输入'
        }
      ],
      dataSource: {
        api: () => {
          return [{
            label: '23423',
            value: 1212
          }]
        }
      },
      id: '8gdrepx5ep800'
    }
  ]
}]

// {
//   "nodes": [
//     {
//       "field": "input_1663731915815",
//       noInput: true,
//       "type": "Test",
//       "label": "输入",
//       "componentProps": {
//         "defaultValue": "222222",
//         "placeholder": "请输入",
//       },
//       "rules": [
//         { required: true, message: 'Please input your username!' }
//       ],
//       children: [
//         {
//           "field": "input_1663731915815",
//           "type": "slot",
//           slotName: 'sdff',
//           "label": "输入框222352",
//           "componentProps": {
//             "defaultValue": "",
//             "placeholder": "请输入",
//           },
//           "rules": [
//             { required: true, message: 'Please input your username!' }
//           ]
//         },
//         {
//           "field": "input_1663731915815",
//           noInput: true,
//           "type": "Test",
//           "label": "输入框sd水电费",
//           "componentProps": {
//             "defaultValue": "222222",
//             "placeholder": "请输入",
//           },
//           "rules": [
//             { required: true, message: 'Please input your username!' }
//           ],
//         },
//       ]
//     },
//     {
//       "field": "input_1663731915815",
//       "type": "Input",
//       "label": "输入框222352",
//       "componentProps": {
//         "defaultValue": "",
//         "placeholder": "请输入",
//       },
//       "rules": [
//         { required: true, message: 'Please input your username!' }
//       ]
//     },
//   ],
//   "config": {
//     "labelLayout": "fixed",
//     labelCol: { span: 4 },
//     wrapperCol: { span: 16 },
//     "hideRequiredMark": false,
//     "customStyle": ""
//   }
// }

</script>
