import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  bindModel: 'value',
  component: async () => (await import('ant-design-vue')).InputNumber,
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
        componentProps: {
          placeholder: '请输入',
          size: 'middle',
        },
        field: 'componentProps.defaultValue',
        label: '默认值',
        type: 'number',
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
        field: 'componentProps.keyboard',
        label: '键盘快捷行为',
        type: 'switch',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.max',
        label: '最大值',
        type: 'number',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.min',
        label: '最小值',
        type: 'number',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.precision',
        label: '精度',
        type: 'number',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.step',
        label: '步长',
        type: 'number',
      },
      {
        field: 'componentProps.stringMode',
        label: '字符模式',
        type: 'switch',
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
        componentProps: {
          ruleType: 'number',
        },
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
        describe: '按下回车的回调',
        type: 'pressEnter',
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
      style: { width: '100%' },
    },
    field: 'number',
    input: true,
    label: '数字输入框',
    type: 'number',
  },
  groupName: '表单',
  icon: 'icon--epic--123-rounded',
  sort: 710,
} as ComponentConfigModel;
