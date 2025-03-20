import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./button.vue'),
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
              label: 'ghost',
              value: 'ghost',
            },
            {
              label: 'dashed',
              value: 'dashed',
            },
            {
              label: 'link',
              value: 'link',
            },
            {
              label: 'text',
              value: 'text',
            },
            {
              label: 'default',
              value: 'default',
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
        field: 'componentProps.htmlType',
        label: '操作类型',
        type: 'select',
      },
      {
        componentProps: {
          allowClear: true,
          placeholder: '请输入',
        },
        field: 'componentProps.href',
        label: '链接',
        type: 'input',
      },
      {
        componentProps: {
          clearable: true,
          options: [
            {
              label: 'blank',
              value: '_blank',
            },
            {
              label: 'parent',
              value: '_parent',
            },
            {
              label: 'self',
              value: '_self',
            },
            {
              label: 'top',
              value: '_top',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.target',
        label: '链接打开方式',
        show: ({ values }) => values.componentProps?.href,
        type: 'select',
      },
      {
        componentProps: {
          allowClear: true,
          options: [
            {
              label: 'default',
              value: 'default',
            },
            {
              label: 'small',
              value: 'small',
            },
            {
              label: 'large',
              value: 'large',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        componentProps: {
          clearable: true,
          options: [
            {
              label: 'default',
              value: 'default',
            },
            {
              label: 'circle',
              value: 'circle',
            },
            {
              label: 'round',
              value: 'round',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.shape',
        label: '形状',
        type: 'select',
      },
      {
        field: 'componentProps.ghost',
        label: '幽灵按钮',
        type: 'switch',
      },
      {
        field: 'componentProps.loading',
        label: '加载状态',
        type: 'switch',
      },
      {
        field: 'componentProps.block',
        label: '宽度自适应',
        type: 'switch',
      },
      {
        field: 'componentProps.danger',
        label: '危险按钮',
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
