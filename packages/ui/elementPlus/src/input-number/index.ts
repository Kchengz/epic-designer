import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: async () => (await import('element-plus')).ElInputNumber,
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
        field: 'props.size',
        label: '尺寸',
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
        type: 'select',
      },
      {
        field: 'props.max',
        label: '最大值',
        props: {
          placeholder: '请输入',
        },
        type: 'number',
      },
      {
        field: 'props.min',
        label: '最小值',
        props: {
          placeholder: '请输入',
        },
        type: 'number',
      },
      {
        field: 'props.step',
        label: '步长',
        props: {
          placeholder: '请输入',
        },
        type: 'number',
      },
      {
        defaultValue: '',
        field: 'props.controlsPosition',
        label: '控制按钮位置',
        props: {
          clearable: true,
          options: [
            {
              label: 'default',
              value: '',
            },
            {
              label: 'right',
              value: 'right',
            },
          ],
          placeholder: '请选择',
        },
        type: 'select',
      },
      {
        field: 'props.precision',
        label: '精度',
        props: {
          placeholder: '请输入',
        },
        type: 'number',
      },
      {
        field: 'props.stepStrictly',
        label: '输入控制为步长的倍数',
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
        props: {
          ruleType: 'number',
        },
        type: 'ERuleEditor',
      },
    ],
    event: [
      {
        description: '值变化时',
        type: 'change',
      },
    ],
  },
  defaultSchema: {
    field: 'number',
    input: true,
    label: '数字输入框',
    props: {
      placeholder: '请输入',
    },
    type: 'number',
  },
  groupName: '表单',
  icon: 'icon--epic--123-rounded',
  sort: 710,
} as ComponentConfigModel;
