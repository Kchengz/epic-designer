import type { ComponentConfigModel } from '@epic-designer/utils';

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
        label: '字段名',
        type: 'input',
      },
      {
        field: 'label',
        label: '标题',
        type: 'input',
      },
      {
        field: 'componentProps.defaultValue',
        label: '默认值',
        type: 'input',
      },
      {
        field: 'componentProps.placeholder',
        label: '占位内容',
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
        defaultValue: 'default',
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        componentProps: {
          min: 0,
          placeholder: '请输入',
        },
        field: 'componentProps.maxlength',
        label: '最大输入长度',
        type: 'number',
      },
      {
        field: 'componentProps.showWordLimit',
        label: '统计字数',
        show: ({ values }) => {
          return values.componentProps.maxlength;
        },
        type: 'switch',
      },
      {
        componentProps: {
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
        defaultValue: 'text',
        field: 'componentProps.type',
        label: '输入类型',
        type: 'select',
      },
      {
        field: 'componentProps.showPassword',
        label: '显示切换图标',
        show: ({ values }) => {
          return values.componentProps.type === 'password';
        },
        type: 'switch',
      },
      {
        field: 'componentProps.readonly',
        label: '只读',
        type: 'switch',
      },
      {
        field: 'componentProps.clearable',
        label: '可清空',
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
    componentProps: {
      placeholder: '请输入',
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
