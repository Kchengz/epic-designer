import type { ComponentConfigModel } from '@epic-designer/types';

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
        field: 'props.type',
        label: '类型',
        props: {
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
        type: 'select',
      },
      {
        defaultValue: 'default',
        field: 'props.size',
        label: '尺寸',
        props: {
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
        type: 'select',
      },
      {
        field: 'props.block',
        label: '是否块级',
        type: 'switch',
      },
      {
        field: 'props.bordered',
        label: '显示边框',
        type: 'switch',
      },
      {
        field: 'props.dashed',
        label: '虚线框',
        type: 'switch',
      },
      {
        field: 'props.round',
        label: '圆角按钮',
        type: 'switch',
      },
      {
        field: 'props.circle',
        label: '圆形按钮',
        type: 'switch',
      },
      {
        field: 'props.color',
        label: '按钮颜色',
        type: 'color-picker',
      },
      {
        field: 'props.ghost',
        label: '是否透明',
        type: 'switch',
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
    props: {
      bordered: true,
      size: 'medium',
      type: 'default',
    },
    type: 'button',
  },
  groupName: '表单',
  icon: 'icon--epic--fit-screen-rounded',
  sort: 1200,
} as ComponentConfigModel;
