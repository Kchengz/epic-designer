import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  bindModel: 'modelValue',
  component: () => import('./uploadImage'),
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
        field: 'componentProps.action',
        label: '请求地址',
        type: 'input',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.name',
        label: '上传文件字段',
        type: 'input',
      },
      {
        componentProps: {
          min: 0,
          placeholder: '请输入',
        },
        field: 'componentProps.max',
        label: '允许上传最大数量',
        type: 'number',
      },
      {
        field: 'componentProps.showFileList',
        label: '展示文件列表',
        type: 'switch',
      },
      {
        field: 'componentProps.multiple',
        label: '多选',
        type: 'switch',
      },
      {
        field: 'componentProps.disabled',
        label: '禁用',
        type: 'switch',
      },
      {
        field: 'componentProps.hidden',
        label: '隐藏',
        type: 'switch',
      },
      {
        componentProps: {
          ruleType: 'array',
        },
        describe: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        type: 'ERuleEditor',
      },
    ],
  },
  defaultSchema: {
    componentProps: {
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
