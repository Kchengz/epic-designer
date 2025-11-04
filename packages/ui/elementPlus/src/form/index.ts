import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./form.vue'),
  config: {
    action: [
      {
        description: '获取表单数据',
        type: 'getData',
      },
      {
        description: '设置表单数据',
        type: 'setData',
      },
      {
        description: '校验表单',
        type: 'validate',
      },
    ],
    attribute: [
      {
        field: 'componentProps.name',
        label: 'Name',
        type: 'input',
      },
      {
        componentProps: {
          clearable: true,
          options: [
            {
              label: '左边',
              value: 'left',
            },
            {
              label: '右边',
              value: 'right',
            },
            {
              label: '顶部',
              value: 'top',
            },
          ],
          radioButton: true,
        },
        field: 'componentProps.label-position',
        label: '标签位置',
        type: 'radio',
      },
      {
        field: 'componentProps.labelWidth',
        label: '标签宽度',
        type: 'EInputSize',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.labelSuffix',
        label: '标签后缀',
        type: 'input',
      },

      {
        componentProps: {
          clearable: true,
          options: [
            {
              label: '大号',
              value: 'large',
            },
            {
              label: '中等',
              value: 'default',
            },
            {
              label: '小型',
              value: 'small',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.size',
        label: '表单尺寸',
        type: 'select',
      },
      {
        componentProps: {
          clearable: true,
          options: [
            {
              label: '左边',
              value: 'left',
            },
            {
              label: '右边',
              value: 'right',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.require-asterisk-position',
        label: '星号位置',
        type: 'select',
      },
      {
        field: 'componentProps.inline-message',
        label: '行内展示校验信息',
        type: 'switch',
      },
      {
        field: 'componentProps.status-icon',
        label: '校验反馈图标',
        type: 'switch',
      },
      {
        field: 'componentProps.scroll-to-error',
        label: '滚动校验错误处',
        type: 'switch',
      },
      {
        field: 'componentProps.inline',
        label: '行内模式',
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
    ],
  },
  defaultSchema: {
    componentProps: {
      'label-position': 'left',
      labelWidth: '100px',
      name: 'default',
    },
    label: '表单',
    type: 'form',
    children: [],
  },
  groupName: '表单',
  icon: 'icon--epic--list-alt-outline-rounded',
  sort: 600,
} as ComponentConfigModel;
