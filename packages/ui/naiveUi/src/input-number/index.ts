import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'value',
  component: async () => (await import('naive-ui')).NInputNumber,
  config: {
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
        type: 'number',
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
        field: 'props.size',
        label: '尺寸',
        type: 'select',
      },
      {
        props: {
          clearable: true,
          options: [
            {
              label: 'both',
              value: 'both',
            },
            {
              label: 'right',
              value: 'right',
            },
          ],
          placeholder: '请选择',
        },
        field: 'props.buttonPlacement',
        label: '控制按钮位置',
        type: 'select',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.max',
        label: '最大值',
        type: 'number',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.min',
        label: '最小值',
        type: 'number',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.step',
        label: '步长',
        type: 'number',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.precision',
        label: '精度',
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
        props: {
          ruleType: 'number',
        },
        description: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        type: 'ERuleEditor',
      },
    ],
  },
  defaultSchema: {
    props: {
      placeholder: '请输入',
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
