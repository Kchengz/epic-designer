import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./checkbox'),
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
        type: 'checkbox',
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
        label: '最大选中数',
        type: 'number',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.min',
        label: '最小选中数',
        type: 'number',
      },
      {
        field: 'props.radioButton',
        label: '按钮模式',
        type: 'switch',
      },
      {
        description: '按钮模式下生效',
        field: 'props.textColor',
        label: '选项文本颜色',
        layout: 'horizontal',
        show: ({ values }) => {
          return values.props.radioButton;
        },
        type: 'color-picker',
      },
      {
        description: '按钮模式下生效',
        field: 'props.fill',
        label: '选项按钮颜色',
        layout: 'horizontal',
        show: ({ values }) => {
          return values.props.radioButton;
        },
        type: 'color-picker',
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
        field: 'props.options',
        label: '选项管理',
        layout: 'vertical',
        type: 'EOptionsEditor',
      },
      {
        props: {
          ruleType: 'array',
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
      options: [
        {
          label: '选项1',
          value: '选项1',
        },
        {
          label: '选项2',
          value: '选项2',
        },
      ],
    },
    field: 'checkbox',
    input: true,
    label: '复选框',
    type: 'checkbox',
  },
  groupName: '表单',
  icon: 'icon--epic--dialogs-outline-rounded',
  sort: 860,
} as ComponentConfigModel;
