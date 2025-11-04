import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'value',
  component: async () => (await import('naive-ui')).NSelect,
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
        type: 'select',
      },
      {
        field: 'componentProps.placeholder',
        label: '占位内容',
        type: 'input',
      },
      {
        componentProps: {
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
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        componentProps: {
          clearable: true,
          options: [
            {
              label: 'top-start',
              value: 'top-start',
            },
            {
              label: 'top',
              value: 'top',
            },
            {
              label: 'top-end',
              value: 'top-end',
            },
            {
              label: 'right-start',
              value: 'right-start',
            },
            {
              label: 'right',
              value: 'right',
            },
            {
              label: 'right-end',
              value: 'right-end',
            },
            {
              label: 'bottom-start',
              value: 'bottom-start',
            },
            {
              label: 'bottom',
              value: 'bottom',
            },
            {
              label: 'bottom-end',
              value: 'bottom-end',
            },
            {
              label: 'left-start',
              value: 'left-start',
            },
            {
              label: 'left',
              value: 'left',
            },
            {
              label: 'left-end',
              value: 'left-end',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.placement',
        label: '菜单弹出的位置',
        type: 'select',
      },
      {
        field: 'componentProps.filterable',
        label: '可过滤',
        type: 'switch',
      },
      {
        field: 'componentProps.tag',
        label: '允许创建新选项',
        show: ({ values }) => values.componentProps.filterable,
        type: 'switch',
      },
      {
        field: 'componentProps.multiple',
        label: '多选',
        type: 'switch',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.maxTagCount',
        label: '最大tag数',
        show: ({ values }) => values.componentProps.multiple,
        type: 'number',
      },
      {
        field: 'componentProps.clearable',
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
      {
        description: '配置选项',
        field: 'componentProps.options',
        label: '选项管理',
        layout: 'vertical',
        type: 'EOptionsEditor',
      },
    ],
    event: [
      {
        description: '值修改',
        type: 'change',
      },
    ],
  },
  defaultSchema: {
    componentProps: {
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
      placeholder: '请选择',
    },
    field: 'select',
    input: true,
    label: '选择框',
    type: 'select',
  },
  groupName: '表单',
  icon: 'icon--epic--select',
  sort: 900,
} as ComponentConfigModel;
