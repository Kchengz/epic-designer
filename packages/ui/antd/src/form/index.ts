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
        field: 'props.name',
        label: 'Name',
        type: 'input',
      },
      {
        field: 'props.layout',
        label: '表单布局',
        props: {
          allowClear: true,
          'option-type': 'button',
          options: [
            {
              label: '水平',
              value: 'horizontal',
            },
            {
              label: '垂直',
              value: 'vertical',
            },
            {
              label: '内联',
              value: 'inline',
            },
          ],
          placeholder: '请选择',
        },
        type: 'radio',
      },
      {
        field: 'props.labelLayout',
        label: '标签布局',
        props: {
          'option-type': 'button',
          options: [
            {
              label: '固定宽度',
              value: 'fixed',
            },
            {
              label: '自适应宽度',
              value: 'flex',
            },
          ],
        },
        type: 'radio',
      },
      {
        field: 'props.labelWidth',
        label: '标签宽度',
        show: ({ values }) => {
          return values.props?.labelLayout === 'fixed';
        },
        type: 'EInputSize',
      },
      {
        field: 'props.labelCol.span',
        label: '标签占比',
        props: {
          placeholder: '请输入',
        },
        show: ({ values }) => {
          return values.props?.labelLayout === 'flex';
        },
        type: 'input',
      },
      {
        field: 'props.wrapperCol.span',
        label: '控件占比',
        props: {
          placeholder: '请输入',
        },
        show: ({ values }) => {
          return values.props?.labelLayout === 'flex';
        },
        type: 'input',
      },
      {
        field: 'props.labelAlign',
        label: '标签对齐',
        props: {
          'option-type': 'button',
          options: [
            {
              label: '左',
              value: 'left',
            },
            {
              label: '右',
              value: 'right',
            },
          ],
        },
        type: 'radio',
      },
      {
        defaultValue: 'default',
        field: 'props.size',
        label: '尺寸',
        props: {
          allowClear: true,
          options: [
            {
              label: '大号',
              value: 'large',
            },
            {
              label: '中等',
              value: 'middle',
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
        field: 'props.colon',
        label: '隐藏冒号',
        props: {
          checkedValue: false,
          unCheckedValue: true,
        },
        type: 'switch',
      },
      {
        field: 'props.hideRequiredMark',
        label: '隐藏必须标志',
        type: 'switch',
      },

      {
        field: 'props.labelWrap',
        label: '标签文本换行',
        type: 'switch',
      },
      {
        field: 'props.scrollToFirstError',
        label: '滚动校验错误处',
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
  },
  defaultSchema: {
    label: '表单',
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
    type: 'form',
    children: [],
  },
  groupName: '表单',
  icon: 'icon--epic--list-alt-outline-rounded',
  sort: 600,
} as ComponentConfigModel;
