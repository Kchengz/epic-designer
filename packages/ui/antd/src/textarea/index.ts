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
        props: {
          placeholder: '请输入',
        },
        type: 'textarea',
      },
      {
        field: 'props.placeholder',
        label: '占位内容',
        type: 'input',
      },
      {
        field: 'props.autoSize.minRows',
        label: '最小行数',
        props: {
          placeholder: '请输入',
        },
        type: 'number',
      },
      {
        field: 'props.autoSize.maxRows',
        label: '最大行数',
        props: {
          placeholder: '请输入',
        },
        type: 'number',
      },
      {
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
        field: 'props.maxLength',
        label: '最大输入长度',
        props: {
          placeholder: '请输入',
        },
        type: 'number',
      },
      {
        field: 'props.bordered',
        label: '无边框',
        props: {
          checkedValue: false,
          unCheckedValue: true,
        },
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
    field: 'textarea',
    input: true,
    label: '文本域',
    props: {
      placeholder: '请输入',
    },
    type: 'textarea',
  },
  groupName: '表单',
  icon: 'icon--epic--edit-square-outline-rounded',
  sort: 705,
} as ComponentConfigModel;
