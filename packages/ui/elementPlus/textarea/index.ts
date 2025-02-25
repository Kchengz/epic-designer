import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  component: async () => (await import('element-plus')).ElInput,
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
        type: 'textarea',
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
          placeholder: '请输入',
        },
        field: 'componentProps.autosize.minRows',
        label: '最小行数',
        type: 'number',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.autosize.maxRows',
        label: '最大行数',
        type: 'number',
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
      placeholder: '请输入',
      type: 'textarea',
    },
    field: 'textarea',
    input: true,
    label: '文本域',
    type: 'textarea',
  },
  groupName: '表单',
  icon: 'icon--epic--edit-square-outline-rounded',
  sort: 705,
} as ComponentConfigModel;
