<template>
  <div>
    <KFormBuild ref="kfb" :formSchema="formSchema" />
  </div>

</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
const kfb = ref(null)
nextTick(() => {
  console.log(kfb.value)
  // kfb.value?.setData({
  //   input_1663731915815: 1212
  // })
})

const formSchema = {
  "nodes": [
    {
      "field": "input_1663731915815",
      "component": "Input",
      "label": "输入框22",
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
      "component": "Input",
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
    "labelWidth": 200,
    "labelLayout": "fixed",
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
    "hideRequiredMark": false,
    "customStyle": ""
  }
}


</script>