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
        field: 'componentProps.defaultValue',
        label: '默认值',
        type: 'checkbox',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.max',
        label: '最大勾选数',
        type: 'number',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.min',
        label: '最小勾选数',
        type: 'number',
      },
      {
        componentProps: {
          clearable: true,
          options: [
            {
              label: '大号',
              value: 'large',
            },
            {
              label: '中等',
              value: 'medium',
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
        description: '配置选项',
        field: 'componentProps.options',
        label: '选项管理',
        layout: 'vertical',
        type: 'EOptionsEditor',
      },
      {
        componentProps: {
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
    componentProps: {
      // defaultValue: [],
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
