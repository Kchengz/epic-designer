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
        defaultValue: '',
        field: 'props.controlsPosition',
        label: '控制按钮位置',
        type: 'select',
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
    event: [
      {
        description: '值变化时',
        type: 'change',
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
