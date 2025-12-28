import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: async () => (await import('element-plus')).ElCascader,
  config: {
    action: [
      {
        description: '获取当前选中节点',
        type: 'getSelectedNodes',
      },
      {
        description: '切换 popper 可见状态',
        type: 'togglePopperVisible',
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
        field: 'props.separator',
        label: '分割符',
        type: 'input',
      },
      {
        props: {
          clearable: true,
          options: [
            {
              label: 'click',
              value: 'click',
            },
            {
              label: 'hover',
              value: 'hover',
            },
          ],
          placeholder: '请选择',
        },
        field: 'props.props.expandTrigger',
        label: '次级菜单展开方式',
        type: 'select',
      },
      {
        field: 'props.filterable',
        label: '可搜索',
        type: 'switch',
      },
      {
        field: 'props.props.multiple',
        label: '可多选',
        onChange: ({ value, values }) => {
          values.props.defaultValue = value ? [] : null;
        },
        type: 'switch',
      },
      {
        field: 'props.collapseTags',
        label: '折叠Tag',
        show: ({ values }) => values.props.props.multiple,
        type: 'switch',
      },
      {
        field: 'props.collapseTagsTooltip',
        label: '显示被折叠标签',
        show: ({ values }) =>
          values.props.props.multiple &&
          values.props.collapseTags,
        type: 'switch',
      },
      {
        props: {
          activeValue: false,
          inactiveValue: true,
        },
        field: 'props.showAllLevels',
        label: '不显示路径',
        type: 'switch',
      },
      {
        description: '父子节点不互相关联',
        field: 'props.props.checkStrictly',
        label: '父级可选',
        type: 'switch',
      },
      {
        props: {
          activeValue: false,
          inactiveValue: true,
        },
        field: 'props.props.emitPath',
        label: '只获取选中节点',
        type: 'switch',
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
        props: {
          tree: true,
        },
        description: '配置选项',
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
        description: '选中节点变化时',
        type: 'change',
      },
      {
        description: '	当失去焦点时触发',
        type: 'blur',
      },
      {
        description: '当获得焦点时触发',
        type: 'focus',
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
      props: {
        expandTrigger: 'click',
      },
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
