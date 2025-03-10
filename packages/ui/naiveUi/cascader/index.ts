import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  bindModel: 'value',
  component: async () => (await import('naive-ui/lib/cascader')).NCascader,
  config: {
    action: [
      {
        description: '获取当前选中节点',
        type: 'getSelectedNodes',
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
        field: 'componentProps.multiple',
        label: '多选',
        type: 'switch',
      },
      {
        field: 'componentProps.cascade',
        label: '多选时关联选项',
        show: ({ values }) => values.componentProps.multiple,
        type: 'switch',
      },
      {
        field: 'componentProps.separator',
        label: '分割符',
        type: 'switch',
      },
      {
        field: 'componentProps.showPath',
        label: '显示选项路径',
        type: 'switch',
      },
      {
        field: 'componentProps.filterable',
        label: '可搜索',
        type: 'switch',
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
        field: 'componentProps.maxTagCount',
        label: '最大tag显示数',
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
        componentProps: {
          tree: true,
        },
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
        description: '选中节点变化时',
        type: 'change',
      },
      {
        description: '面板的关闭事件',
        type: 'close',
      },
    ],
  },
  defaultSchema: {
    componentProps: {
      cascade: false,
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
      showPath: true,
    },
    field: 'cascader',
    input: true,
    label: '级联选择器',
    type: 'cascader',
  },
  groupName: '表单',
  icon: 'icon--epic--full-coverage-outline',
  sort: 880,
} as ComponentConfigModel;
