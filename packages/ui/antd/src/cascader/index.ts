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
        field: 'props.defaultValue',
        label: '默认值',
        type: 'cascader',
      },
      {
        field: 'props.placeholder',
        label: '占位内容',
        type: 'input',
      },
      {
        props: {
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
        field: 'props.size',
        label: '尺寸',
        type: 'select',
      },
      {
        props: {
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
        field: 'props.placement',
        label: '弹出框位置',
        type: 'select',
      },
      {
        field: 'props.showSearch',
        label: '可搜索',
        type: 'switch',
      },
      {
        props: {
          checkedValue: false,
          unCheckedValue: true,
        },
        field: 'props.bordered',
        label: '无边框',
        type: 'switch',
      },
      {
        field: 'props.multiple',
        label: '多选',
        type: 'switch',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.maxTagTextLength',
        label: '标签最大长度',
        show: ({ values }) => values.props.multiple,
        type: 'number',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.maxTagCount',
        label: '标签显示数量',
        show: ({ values }) => values.props.multiple,
        type: 'number',
      },

      {
        props: {
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
        field: 'props.showCheckedStrategy',
        label: '回填方式',
        show: ({ values }) => values.props.multiple,
        type: 'select',
      },

      {
        field: 'props.allowClear',
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
          tree: true,
        },
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
