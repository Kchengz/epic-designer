<script lang="ts" setup>
import type { PageSchema } from '@epic-designer/types';

import { onMounted, ref } from 'vue';

import { EDesigner } from '@epic-designer/core';
import { pluginManager } from '@epic-designer/manager';

// 模拟器api返回数据
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        about:
          '性格沉稳内敛，做事踏实细致，平日里偏爱在安静的时光里读书、钻研小事，待人谦和真诚，不张扬却始终带着一份认真，在生活里守着自己的节奏，简单而坚定地走好每一步。',
        age: 18,
        name: '张三',
      });
    }, 300);
  });
};

pluginManager.publicMethods.add({
  handler: fetchData,
  name: 'fetchData',
});

const designerRef = ref<InstanceType<typeof EDesigner>>();

const pageSchema = {
  canvas: {
    mode: 'desktop',
  },
  schemas: [
    {
      id: 'root',
      label: '页面',
      props: {
        style: {
          padding: '16px',
        },
      },
      type: 'page',
      children: [
        {
          label: '表单',
          type: 'form',
          children: [
            {
              type: 'input',
              props: {
                placeholder: '请输入',
              },
              id: 'input_4314',
              field: 'name',
              input: true,
              label: '姓名',
            },
            {
              type: 'number',
              props: {
                placeholder: '请输入',
                style: {
                  width: '100%',
                },
              },
              id: 'number_9807',
              field: 'age',
              input: true,
              label: '年龄',
            },
            {
              field: 'about',
              input: true,
              label: '个人简介',
              props: {
                placeholder: '请输入',
              },
              type: 'textarea',
              id: 'textarea_9941',
            },
            {
              field: 'button_4338',
              input: false,
              label: '调用API回显数据',
              type: 'button',
              id: 'button_4338',
              props: {
                type: 'primary',
              },
              on: {
                click: [
                  {
                    componentId: null,
                    methodName: 'test',
                    type: 'custom',
                  },
                ],
              },
            },
          ],
          id: 'form_2002',
          props: {
            labelCol: {
              span: 5,
            },
            labelLayout: 'fixed',
            labelWidth: '100px',
            name: 'default',
            wrapperCol: {
              span: 19,
            },
          },
        },
      ],
    },
  ],
  script:
    "const { defineExpose, find } = epic;\n\nasync function test (){\n    const data = await epic.publicMethods.fetchData()\n    find('name','field').setValue(data.name)\n    find('age','field').setValue(data.age)\n    find('about','field').setValue(data.about)\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test\n})",
};

onMounted(() => {
  designerRef.value?.setData(pageSchema);
});

/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e: PageSchema) {
  console.log(e);
}
</script>
<template>
  <EDesigner
    ref="designerRef"
    title="EpicDesigner数据回显示例"
    @save="handleSubmit"
  >
    <template #header-prefix>
      <div>欢迎使用EpicDesigner设计器</div>
    </template>
  </EDesigner>
</template>
