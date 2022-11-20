<template>
  <KBuilder ref="kfb" :formSchema="formSchema">
    <template #sdff="{ model, record }">
      234234
      <input v-model="model[record.field]" />
    </template>
  </KBuilder>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { KBuilder } from '../../../packages';
import { Schemas } from '../../../packages/types/kDesigner';

const kfb = ref(null);

const formSchema: Schemas = {
  "nodes": [
    {
      "field": "input_1663731915815",
      noInput: true,
      "type": "Test",
      "label": "输入",
      "componentProps": {
        "defaultValue": "222222",
        "placeholder": "请输入",
      },
      "rules": [
        { required: true, message: 'Please input your username!' }
      ],
      children: [
        {
          "field": "input_1663731915815",
          "type": "slot",
          slotName: 'sdff',
          "label": "输入框222352",
          "componentProps": {
            "defaultValue": "",
            "placeholder": "请输入",
          },
          "rules": [
            { required: true, message: 'Please input your username!' }
          ]
        },
        {
          "field": "input_1663731915815",
          noInput: true,
          "type": "Test",
          "label": "输入框sd水电费",
          "componentProps": {
            "defaultValue": "222222",
            "placeholder": "请输入",
          },
          "rules": [
            { required: true, message: 'Please input your username!' }
          ],
        },
      ]
    },
    {
      "field": "input_1663731915815",
      "type": "Input",
      "label": "输入框222352",
      "componentProps": {
        "defaultValue": "",
        "placeholder": "请输入",
      },
      "rules": [
        { required: true, message: 'Please input your username!' }
      ]
    },
  ],
  "config": {
    "labelLayout": "fixed",
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
    "hideRequiredMark": false,
    "customStyle": ""
  }
}


</script>