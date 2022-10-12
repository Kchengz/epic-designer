<template>
  <div>
    <KFormBuild ref="kfb" :formSchema="formSchema">
      <template #sdf="{model,record}">
        <span>{{model}}
          {{record.field}}
          <input v-model="model[record.field]" />
        </span>
      </template>
    </KFormBuild>

  </div>

</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { KFormBuild } from '../packages';
import { FormSchema } from '../packages/src/KFormBuild/KFormBuild.vue';


const kfb = ref(null)
nextTick(() => {
  console.log(kfb.value)
  // kfb.value?.setData({
  //   input_1663731915815: 1212
  // })
})

const formSchema: FormSchema = {
  "nodes": [
    {
      "field": "input_166373191",
      "component": "Input",
      "label": "输入框sd水电费",
      slot: 'sdf',
      labelCol: { span: 3 },
      "componentProps": {
        "defaultValue": "22",
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
    "labelLayout": "fixed",
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
    "hideRequiredMark": false,
    "customStyle": ""
  }
}


</script>