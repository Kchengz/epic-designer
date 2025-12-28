import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'modelValue',
  component: () => import('./uploadFile.vue'),
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
        field: 'props.listType',
        label: '列表样式',
        props: {
          allowClear: true,
          options: [
            {
              label: 'text',
              value: 'text',
            },
            {
              label: 'picture',
              value: 'picture',
            },
          ],
          placeholder: '请选择',
        },
        type: 'select',
      },
      {
        field: 'props.multiple',
        label: '多选',
        type: 'switch',
      },
      {
        field: 'props.maxCount',
        label: '允许上传最大数量',
        props: {
          min: 0,
          placeholder: '请输入',
        },
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
        description: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        props: {
          ruleType: 'string',
        },
        type: 'ERuleEditor',
      },
    ],
  },
  defaultSchema: {
    field: 'uploadFile',
    input: true,
    label: '上传文件',
    props: {
      action: 'https://examples.epicjs.cn/epic-mock/common/upload',
    },
    type: 'upload-file',
  },
  groupName: '表单',
  icon: 'icon--epic--upload-rounded',
  sort: 920,
} as ComponentConfigModel;
