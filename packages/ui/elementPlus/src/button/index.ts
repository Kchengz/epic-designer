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
        props: {
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
        field: 'props.type',
        label: '类型',
        type: 'select',
      },
      {
        props: {
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
        field: 'props.native-type',
        label: '操作类型',
        type: 'select',
      },
      {
        props: {
          type: 'color',
        },
        field: 'props.color',
        label: '自定义颜色',
        type: 'color-picker',
      },
      {
        field: 'props.plain',
        label: '朴素按钮',
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
        field: 'props.text',
        label: '文字按钮',
        type: 'switch',
      },
      {
        field: 'props.loading',
        label: '加载状态',
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
    type: 'button',
  },
  groupName: '表单',
  icon: 'icon--epic--fit-screen-rounded',
  sort: 1200,
} as ComponentConfigModel;
