import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  component: () => import('./form.vue'),
  config: {
    action: [
      {
        describe: '获取表单数据',
        type: 'getData',
      },
      {
        describe: '设置表单数据',
        type: 'setData',
      },
      {
        describe: '校验表单',
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
        field: 'componentProps.layout',
        label: '表单布局',
        type: 'radio',
      },
      {
        componentProps: {
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
        field: 'componentProps.labelLayout',
        label: '标签布局',
        type: 'radio',
      },
      {
        field: 'componentProps.labelWidth',
        label: '标签宽度',
        show: ({ values }) => {
          return values.componentProps?.labelLayout === 'fixed';
        },
        type: 'EInputSize',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.labelCol.span',
        label: '标签占比',
        show: ({ values }) => {
          return values.componentProps?.labelLayout === 'flex';
        },
        type: 'input',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.wrapperCol.span',
        label: '控件占比',
        show: ({ values }) => {
          return values.componentProps?.labelLayout === 'flex';
        },
        type: 'input',
      },
      {
        componentProps: {
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
        field: 'componentProps.labelAlign',
        label: '标签对齐',
        type: 'radio',
      },
      {
        componentProps: {
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
        defaultValue: 'default',
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        componentProps: {
          checkedValue: false,
          unCheckedValue: true,
        },
        field: 'componentProps.colon',
        label: '隐藏冒号',
        type: 'switch',
      },
      {
        field: 'componentProps.hideRequiredMark',
        label: '隐藏必须标志',
        type: 'switch',
      },

      {
        field: 'componentProps.labelWrap',
        label: '标签文本换行',
        type: 'switch',
      },
      {
        field: 'componentProps.scrollToFirstError',
        label: '滚动校验错误处',
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
    label: '表单',
    type: 'form',
    children: [],
  },
  groupName: '表单',
  icon: 'icon--epic--list-alt-outline-rounded',
  sort: 600,
} as ComponentConfigModel;
