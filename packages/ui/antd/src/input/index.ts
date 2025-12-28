import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'value',
  component: async () => (await import('ant-design-vue')).Input,
  config: {
    action: [
      {
        description: '使输入框获取焦点',
        type: 'focus',
      },
      {
        description: '使输入框失去焦点',
        type: 'blur',
      },
      {
        description: '选中输入框中的文字',
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
        field: 'props.placeholder',
        label: '占位内容',
        type: 'input',
      },
      {
        field: 'props.defaultValue',
        label: '默认值',
        props: {
          placeholder: '请输入',
        },
        type: 'input',
      },
      {
        field: 'props.type',
        label: '输入类型',
        props: {
          allowClear: true,
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
        field: 'props.bordered',
        label: '无边框',
        props: {
          checkedValue: false,
          unCheckedValue: true,
        },
        type: 'switch',
      },
      {
        field: 'props.maxlength',
        label: '最大输入长度',
        props: {
          placeholder: '请输入',
        },
        type: 'number',
      },
      {
        field: 'props.showCount',
        label: '展示字数',
        type: 'switch',
      },
      {
        field: 'props.allowClear',
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
        description: '按下回车时',
        type: 'pressEnter',
      },
      {
        description: '获取焦点时',
        type: 'focus',
      },
      {
        description: '失去焦点时',
        type: 'blur',
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
