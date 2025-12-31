import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: async () => (await import('element-plus')).ElInput,
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
        label: '数据字段',
        type: 'EpField',
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
        defaultValue: 'default',
        field: 'props.size',
        label: '尺寸',
        props: {
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
        type: 'select',
      },
      {
        field: 'props.maxlength',
        label: '最大输入长度',
        props: {
          min: 0,
          placeholder: '请输入',
        },
        type: 'number',
      },
      {
        field: 'props.showWordLimit',
        label: '统计字数',
        show: ({ values }) => {
          return values.props.maxlength;
        },
        type: 'switch',
      },
      {
        defaultValue: 'text',
        field: 'props.type',
        label: '输入类型',
        props: {
          clearable: true,
          options: [
            {
              label: 'text',
              value: 'text',
            },
            {
              label: 'number',
              value: 'number',
            },
            {
              label: 'password',
              value: 'password',
            },
          ],
          placeholder: '请选择',
        },
        type: 'select',
      },
      {
        field: 'props.showPassword',
        label: '显示切换图标',
        show: ({ values }) => {
          return values.props.type === 'password';
        },
        type: 'switch',
      },
      {
        field: 'props.readonly',
        label: '只读',
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
        description: '输入值时',
        type: 'input',
      },
      {
        description: '值修改时',
        type: 'change',
      },
      {
        description: '获取焦点时',
        type: 'focus',
      },
      {
        description: '失去焦点时',
        type: 'blur',
      },
      {
        description: '点击清空按钮时',
        type: 'clear',
      },
    ],
  },
  defaultSchema: {
    field: 'input',
    input: true,
    label: '输入框',
    props: {
      placeholder: '请输入',
    },
    type: 'input',
  },
  groupName: '表单',
  icon: 'icon--epic--border-color-outline-rounded',
  sort: 700,
} as ComponentConfigModel;
