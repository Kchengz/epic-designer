import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'value',
  component: async () => (await import('ant-design-vue')).Select,
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
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.placeholder',
        label: '占位内容',
        type: 'input',
      },
      {
        field: 'componentProps.defaultValue',
        label: '默认值',
        type: 'select',
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
          placeholder: '请输入',
        },
        field: 'componentProps.listHeight',
        label: '弹窗高度',
        type: 'number',
      },
      {
        componentProps: {
          allowClear: true,
          options: [
            {
              label: 'multiple',
              value: 'multiple',
            },
            {
              label: 'tags',
              value: 'tags',
            },
            {
              label: 'combobox',
              value: 'combobox',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.mode',
        label: '模式',
        type: 'select',
      },
      {
        field: 'componentProps.showSearch',
        label: '可搜索',
        type: 'switch',
      },
      {
        field: 'componentProps.autoClearSearchValue',
        label: '选中选项后清空搜索框',
        show: ({ values }) =>
          values.componentProps.mode && values.componentProps.showSearch,
        type: 'switch',
      },
      {
        field: 'componentProps.maxTagTextLength',
        label: '最大tag文本长度',
        show: ({ values }) => values.componentProps.mode,
        type: 'number',
      },
      {
        field: 'componentProps.maxTagCount',
        label: '最大tag显示数',
        show: ({ values }) => values.componentProps.mode,
        type: 'number',
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
        field: 'componentProps.labelInValue',
        label: 'labelInValue',
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
        field: 'componentProps.options',
        label: '选项管理',
        layout: 'vertical',
        type: 'EOptionsEditor',
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
        description: '值修改',
        type: 'change',
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
