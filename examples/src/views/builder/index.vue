<template>
  <div>
    <EBuilder ref="kfb" :pageSchema="pageSchema">
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
import { ref, onMounted } from 'vue'
import { EBuilder } from '@epic-designer/core'

import { PageSchema } from '@epic-designer/core/types/epic-designer'

const kfb = ref<any>(null)
async function handleGetData() {
  const values = await kfb.value?.getData()
  console.log(values)
}
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
              "label": "上传文件",
              "type": "upload-file",
              "icon": "icon-upload",
              "field": "upload",
              "input": true,
              "componentProps": {
                "action": "http://cdn.kcz66.com/upload-img.txt",
                "name": "file",
                "showFileList": true
              },
              "id": "upload-file_by35flst"
            }
          ],
          "id": "form_uknia964"
        }
      ],
      "componentProps": {
        "style": {
          "padding": "16px"
        }
      }
    }
  ],
  "script": "const { defineExpose, getComponent } = this;\n\nfunction test (){\n    console.log('test')\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})"
})


// 表单赋值
onMounted(async () => {
  kfb.value?.setData({
    'upload': [{
      name: 'xxx',
      uid: 'xxx',
      status:
        "success",
      url: 'http://cdn.kcz66.com/%E5%A4%B4%E5%83%8F.jpg'
    }]
  })

  // const data = await kfb.value?.getData()
  const data = await kfb.value?.validate()
  console.log(data)
})


</script>
