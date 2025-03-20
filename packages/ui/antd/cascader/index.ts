import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'value',
  component: async () => (await import('ant-design-vue')).Cascader,
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
        type: 'cascader',
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
          allowClear: true,
          options: [
            {
              label: 'bottomLeft',
              value: 'bottomLeft',
            },
            {
              label: 'bottomRight',
              value: 'bottomRight',
            },
            {
              label: 'topLeft',
              value: 'topLeft',
            },
            {
              label: 'topRight',
              value: 'topRight',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.placement',
        label: '弹出框位置',
        type: 'select',
      },
      {
        field: 'componentProps.showSearch',
        label: '可搜索',
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
        field: 'componentProps.multiple',
        label: '多选',
        type: 'switch',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.maxTagTextLength',
        label: '标签最大长度',
        show: ({ values }) => values.componentProps.multiple,
        type: 'number',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.maxTagCount',
        label: '标签显示数量',
        show: ({ values }) => values.componentProps.multiple,
        type: 'number',
      },

      {
        componentProps: {
          clearable: true,
          options: [
            {
              label: 'SHOW_PARENT',
              value: 'SHOW_PARENT',
            },
            {
              label: 'SHOW_CHILD',
              value: 'SHOW_CHILD',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.showCheckedStrategy',
        label: '回填方式',
        show: ({ values }) => values.componentProps.multiple,
        type: 'select',
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
          tree: true,
        },
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
    field: 'cascader',
    input: true,
    label: '级联选择器',
    type: 'cascader',
  },
  groupName: '表单',
  icon: 'icon--epic--full-coverage-outline',
  sort: 900,
} as ComponentConfigModel;
