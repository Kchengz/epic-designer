import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  bindModel: 'value',
  component: async () => (await import('naive-ui/lib/input')).NInput,
  config: {
    action: [
      {
        describe: '使 input 获取焦点',
        type: 'focus',
      },
      {
        describe: '使 input 失去焦点',
        type: 'blur',
      },
      {
        describe: '清除 input 值',
        type: 'clear',
      },
      {
        describe: '选中 input 中的文字',
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
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
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
        field: 'componentProps.type',
        label: '输入类型',
        onChange: ({ value, values }) => {
          if (value !== 'text') values.componentProps.pair = false;
        },
        type: 'select',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.maxlength',
        label: '最大输入长度',
        type: 'number',
      },
      {
        componentProps: {
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
        field: 'componentProps.showPasswordOn',
        label: '显示密码的时机',
        show: ({ values }) => values.componentProps.type === 'password',
        type: 'select',
      },
      {
        field: 'componentProps.rows',
        label: '行数',
        show: ({ values }) => values.componentProps.type === 'textarea',
        type: 'number',
      },
      {
        field: 'componentProps.pair',
        label: '是否输入成对值',
        show: ({ values }) => values.componentProps.type === 'text',
        type: 'switch',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.separator',
        label: '分割符',
        show: ({ values }) =>
          values.componentProps.type === 'text' && values.componentProps.pair,
        type: 'input',
      },
      {
        field: 'componentProps.round',
        label: '是否圆角',
        type: 'switch',
      },
      {
        field: 'componentProps.showCount',
        label: '是否统计字数',
        type: 'switch',
      },
      {
        field: 'componentProps.autosize',
        label: '自适应内容高度',
        show: ({ values }) => values.componentProps.type === 'textarea',
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
        describe: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        type: 'ERuleEditor',
      },
    ],
    event: [
      {
        describe: '输入值',
        type: 'input',
      },
      {
        describe: '值修改',
        type: 'change',
      },
      {
        describe: '获取焦点',
        type: 'focus',
      },
      {
        describe: '失去焦点',
        type: 'blur',
      },
    ],
  },
  defaultSchema: {
    componentProps: {
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
