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
        type: 'textarea',
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
        field: 'props.size',
        label: '尺寸',
        type: 'select',
      },
      {
        props: {
          min: 0,
          placeholder: '请输入',
        },
        field: 'props.maxlength',
        label: '最大输入长度',
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
        props: {
          placeholder: '请输入',
        },
        field: 'props.autosize.minRows',
        label: '最小行数',
        type: 'number',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.autosize.maxRows',
        label: '最大行数',
        type: 'number',
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
