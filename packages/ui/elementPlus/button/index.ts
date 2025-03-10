import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  component: () => import('./button'),
  config: {
    attribute: [
      {
        field: 'label',
        label: '标题',
        type: 'input',
      },
      {
        componentProps: {
          clearable: true,
          options: [
            {
              label: 'primary',
              value: 'primary',
            },
            {
              label: 'success',
              value: 'success',
            },
            {
              label: 'info',
              value: 'info',
            },
            {
              label: 'warning',
              value: 'warning',
            },
            {
              label: 'danger',
              value: 'danger',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.type',
        label: '类型',
        type: 'select',
      },
      {
        componentProps: {
          clearable: true,
          options: [
            {
              label: 'button',
              value: 'button',
            },
            {
              label: 'submit',
              value: 'submit',
            },
            {
              label: 'reset',
              value: 'reset',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.native-type',
        label: '操作类型',
        type: 'select',
      },
      {
        componentProps: {
          type: 'color',
        },
        field: 'componentProps.color',
        label: '自定义颜色',
        type: 'color-picker',
      },
      {
        field: 'componentProps.plain',
        label: '朴素按钮',
        type: 'switch',
      },
      {
        field: 'componentProps.round',
        label: '圆角按钮',
        type: 'switch',
      },
      {
        field: 'componentProps.circle',
        label: '圆形按钮',
        type: 'switch',
      },
      {
        field: 'componentProps.text',
        label: '文字按钮',
        type: 'switch',
      },
      {
        field: 'componentProps.loading',
        label: '加载状态',
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
    event: [
      {
        description: '点击按钮时',
        type: 'click',
      },
      {
        description: '双击按钮时',
        type: 'dblclick',
      },
    ],
  },
  defaultSchema: {
    field: 'input',
    input: false,
    label: '按钮',
    type: 'button',
  },
  groupName: '表单',
  icon: 'icon--epic--fit-screen-rounded',
  sort: 1200,
} as ComponentConfigModel;
