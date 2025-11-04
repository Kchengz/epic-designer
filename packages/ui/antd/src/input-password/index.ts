import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'value',
  component: async () => (await import('ant-design-vue')).InputPassword,
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
        field: 'componentProps.placeholder',
        label: '占位内容',
        type: 'input',
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
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        componentProps: {
          checkedValue: false,
          unCheckedValue: true,
        },
        field: 'componentProps.bordered',
        label: '无边框',
        type: 'switch',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.maxLength',
        label: '最大输入长度',
        type: 'number',
      },
      {
        field: 'componentProps.showCount',
        label: '统计字数',
        type: 'switch',
      },
      {
        field: 'componentProps.visible',
        label: '密码可见',
        type: 'switch',
      },
      {
        componentProps: {
          checkedValue: false,
          unCheckedValue: true,
        },
        field: 'componentProps.visibilityToggle',
        label: '隐藏切换按钮',
        type: 'switch',
      },
      {
        field: 'componentProps.allowClear',
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
    componentProps: {
      placeholder: '请输入',
    },
    field: 'password',
    input: true,
    label: '密码输入框',
    type: 'password',
  },
  groupName: '表单',
  icon: 'icon--epic--lock-outline',
  sort: 720,
} as ComponentConfigModel;
