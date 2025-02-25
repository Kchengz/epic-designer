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
          options: [
            {
              label: 'default',
              value: 'default',
            },
            {
              label: 'tertiary',
              value: 'tertiary',
            },
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
              label: 'error',
              value: 'error',
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
              label: 'tiny',
              value: 'tiny',
            },
            {
              label: '大号',
              value: 'large',
            },
            {
              label: '中等',
              value: 'medium',
            },
            {
              label: '小型',
              value: 'small',
            },
          ],
          placeholder: '请选择',
        },
        defaultValue: 'default',
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        field: 'componentProps.block',
        label: '是否块级',
        type: 'switch',
      },
      {
        field: 'componentProps.bordered',
        label: '显示边框',
        type: 'switch',
      },
      {
        field: 'componentProps.dashed',
        label: '虚线框',
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
        field: 'componentProps.color',
        label: '按钮颜色',
        type: 'color-picker',
      },
      {
        field: 'componentProps.ghost',
        label: '是否透明',
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
        describe: '点击按钮时',
        type: 'click',
      },
      {
        describe: '双击按钮时',
        type: 'dblclick',
      },
    ],
  },
  defaultSchema: {
    componentProps: {
      bordered: true,
      size: 'medium',
      type: 'default',
    },
    field: 'input',
    input: false,
    label: '按钮',
    type: 'button',
  },
  groupName: '表单',
  icon: 'icon--epic--fit-screen-rounded',
  sort: 1200,
} as ComponentConfigModel;
