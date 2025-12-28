import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'value',
  component: async () => (await import('naive-ui')).NInput,
  config: {
    action: [
      {
        description: '使 input 获取焦点',
        type: 'focus',
      },
      {
        description: '使 input 失去焦点',
        type: 'blur',
      },
      {
        description: '清除 input 值',
        type: 'clear',
      },
      {
        description: '选中 input 中的文字',
        type: 'select',
      },
    ],
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
        field: 'props.defaultValue',
        label: '默认值',
        type: 'input',
      },
      {
        field: 'props.placeholder',
        label: '占位内容',
        type: 'input',
      },
      {
        props: {
          clearable: true,
          options: [
            {
              label: '极小',
              value: 'tiny',
            },
            {
              label: '小型',
              value: 'small',
            },
            {
              label: '中等',
              value: 'medium',
            },
            {
              label: '大号',
              value: 'large',
            },
          ],
          placeholder: '请选择',
        },
        field: 'props.size',
        label: '尺寸',
        type: 'select',
      },
      {
        props: {
          clearable: true,
          options: [
            {
              label: 'text',
              value: 'text',
            },
            {
              label: 'textarea',
              value: 'textarea',
            },
            {
              label: 'password',
              value: 'password',
            },
          ],
          placeholder: '请选择',
        },
        defaultValue: 'text',
        field: 'props.type',
        label: '输入类型',
        onChange: ({ value, values }) => {
          if (value !== 'text') values.props.pair = false;
        },
        type: 'select',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.maxlength',
        label: '最大输入长度',
        type: 'number',
      },
      {
        props: {
          clearable: true,
          options: [
            {
              label: 'click',
              value: 'click',
            },
            {
              label: 'mousedown',
              value: 'mousedown',
            },
          ],
          placeholder: '请选择',
        },
        field: 'props.showPasswordOn',
        label: '显示密码的时机',
        show: ({ values }) => values.props.type === 'password',
        type: 'select',
      },
      {
        field: 'props.rows',
        label: '行数',
        show: ({ values }) => values.props.type === 'textarea',
        type: 'number',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.separator',
        label: '分割符',
        show: ({ values }) =>
          values.props.type === 'text' && values.props.pair,
        type: 'input',
      },
      {
        field: 'props.round',
        label: '是否圆角',
        type: 'switch',
      },
      {
        field: 'props.showCount',
        label: '是否统计字数',
        type: 'switch',
      },
      {
        field: 'props.autosize',
        label: '自适应内容高度',
        show: ({ values }) => values.props.type === 'textarea',
        type: 'switch',
      },
      {
        field: 'props.clearable',
        label: '可清空',
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
      {
        description: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        type: 'ERuleEditor',
      },
    ],
    event: [
      {
        description: '输入值',
        type: 'input',
      },
      {
        description: '值修改',
        type: 'change',
      },
      {
        description: '获取焦点',
        type: 'focus',
      },
      {
        description: '失去焦点',
        type: 'blur',
      },
    ],
  },
  defaultSchema: {
    props: {
      defaultValue: '',
      placeholder: '请输入',
      type: 'text',
    },
    field: 'input',
    input: true,
    label: '输入框',
    type: 'input',
  },
  groupName: '表单',
  icon: 'icon--epic--border-color-outline-rounded',
  sort: 700,
} as ComponentConfigModel;
