<template>
  <div>
    <KFormBuild :formSchema="formSchema" />
  </div>

</template>

<script lang="ts" setup>
const formSchema = {
  "nodes": [
    {
      "field": "input_1663731915815",
      "component": "Input",
      "label": "输入框",
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
      "label": "输入框",
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
    "layout": "inline",
    "labelWidth": 100,
    "labelLayout": "flex",
    "hideRequiredMark": false,
    "customStyle": ""
  }
}
</script>