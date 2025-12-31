import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'value',
  component: async () => (await import('naive-ui')).NCascader,
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
        label: '数据字段',
        type: 'EpField',
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
        field: 'props.size',
        label: '尺寸',
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
        type: 'select',
      },
      {
        field: 'props.multiple',
        label: '多选',
        type: 'switch',
      },
      {
        field: 'props.cascade',
        label: '多选时关联选项',
        show: ({ values }) => values.props.multiple,
        type: 'switch',
      },
      {
        field: 'props.separator',
        label: '分割符',
        type: 'switch',
      },
      {
        field: 'props.showPath',
        label: '显示选项路径',
        type: 'switch',
      },
      {
        field: 'props.filterable',
        label: '可搜索',
        type: 'switch',
      },
      {
        field: 'props.placement',
        label: '菜单弹出的位置',
        props: {
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
        type: 'select',
      },
      {
        field: 'props.maxTagCount',
        label: '最大tag显示数',
        show: ({ values }) => values.props.multiple,
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
        description: '配置选项',
        field: 'props.options',
        label: '选项管理',
        layout: 'vertical',
        props: {
          tree: true,
        },
        type: 'EOptionsEditor',
      },
      {
        description: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        props: {
          ruleType: 'array',
        },
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
    field: 'cascader',
    input: true,
    label: '级联选择器',
    props: {
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
    type: 'cascader',
  },
  groupName: '表单',
  icon: 'icon--epic--full-coverage-outline',
  sort: 880,
} as ComponentConfigModel;
