<template>
  <KBuilder ref="kfb" :schemas="schemas">
    <template #sdff="{ model, record }">
      <input v-model="model[record.field]" />
    </template>
  </KBuilder>
  <div @click="handleGetData">获取数据</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { KBuilder } from '../../../packages';
import { NodeItem } from '../../../packages/types/kDesigner';



const kfb = ref<any>(null);
async function handleGetData() {
  const values = await kfb.value?.getData()
  console.log(values)
}
const schemas: NodeItem[] = [{
  "type": "form",
  'name': 'default',
  "id": "root",
  "children": [
    {
      "label": "文本框",
      "type": "input",
      "field": "input2",
      "isInput": true,
      "id": "glyhrunicr400",
      "componentProps": {
        "type": "text"
      }
    },
    {
      "label": "选择框",
      "type": "select",
      "field": "select",
      "isInput": true,
      "id": "8yizri1tzns00"
    },
    {
      "label": "文本框",
      "type": "input",
      "field": "input",
      "isInput": true,
      "id": "kluewssswzk00",
      componentProps: {

      },
      rules: [{
        required: true,
        message: '请输入'
      }]
    },
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