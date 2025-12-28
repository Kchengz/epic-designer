import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'value',
  component: async () => (await import('ant-design-vue')).Textarea,
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
        props: {
          placeholder: '请输入',
        },
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
          placeholder: '请输入',
        },
        field: 'props.autoSize.minRows',
        label: '最小行数',
        type: 'number',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.autoSize.maxRows',
        label: '最大行数',
        type: 'number',
      },
      {
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
        field: 'props.size',
        label: '尺寸',
        type: 'select',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.maxLength',
        label: '最大输入长度',
        type: 'number',
      },
      {
        props: {
          checkedValue: false,
          unCheckedValue: true,
        },
        field: 'props.bordered',
        label: '无边框',
        type: 'switch',
      },
      {
        field: 'props.showCount',
        label: '统计字数',
        type: 'switch',
      },
      {
        field: 'props.allowClear',
        label: '可清除',
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
        description: '按下回车的回调',
        type: 'pressEnter',
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
