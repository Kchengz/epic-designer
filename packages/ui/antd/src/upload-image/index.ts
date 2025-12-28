import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'modelValue',
  component: () => import('./uploadImage.vue'),
  config: {
    attribute: [
      {
        field: 'field',
        label: '字段名',
        type: 'input',
      },
      {
        field: 'label',
        label: '标题',
        type: 'input',
      },
      {
        field: 'props.action',
        label: '请求地址',
        type: 'input',
      },
      {
        field: 'props.multiple',
        label: '多选',
        type: 'switch',
      },
      {
        props: {
          min: 0,
          placeholder: '请输入',
        },
        field: 'props.maxCount',
        label: '允许上传最大数量',
        type: 'number',
      },
      {
        field: 'props.disabled',
        label: '禁用',
        type: 'switch',
      },
      {
        field: 'props.hidden',
        label: '隐藏',
        type: 'switch',
      },
      {
        props: {
          ruleType: 'string',
        },
        description: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        type: 'ERuleEditor',
      },
    ],
  },
  defaultSchema: {
    props: {
      action: 'https://examples.epicjs.cn/epic-mock/common/upload',
    },
    field: 'uploadImage',
    input: true,
    label: '上传图片',
    type: 'upload-image',
  },
  groupName: '表单',
  icon: 'icon--epic--imagesmode-outline-rounded',
  sort: 920,
} as ComponentConfigModel;
