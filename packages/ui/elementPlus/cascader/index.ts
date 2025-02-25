import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  component: async () => (await import('element-plus')).ElCascader,
  config: {
    action: [
      {
        describe: '获取当前选中节点',
        type: 'getCheckedNodes',
      },
      {
        describe: '切换 popper 可见状态',
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
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.separator',
        label: '分割符',
        type: 'input',
      },
      {
        componentProps: {
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
        field: 'componentProps.props.expandTrigger',
        label: '次级菜单展开方式',
        type: 'select',
      },
      {
        field: 'componentProps.filterable',
        label: '可搜索',
        type: 'switch',
      },
      {
        field: 'componentProps.props.multiple',
        label: '可多选',
        onChange: ({ value, values }) => {
          values.componentProps.defaultValue = value ? [] : null;
        },
        type: 'switch',
      },
      {
        field: 'componentProps.collapseTags',
        label: '折叠Tag',
        show: ({ values }) => values.componentProps.props.multiple,
        type: 'switch',
      },
      {
        field: 'componentProps.collapseTagsTooltip',
        label: '显示被折叠标签',
        show: ({ values }) =>
          values.componentProps.props.multiple &&
          values.componentProps.collapseTags,
        type: 'switch',
      },
      {
        componentProps: {
          activeValue: false,
          inactiveValue: true,
        },
        field: 'componentProps.showAllLevels',
        label: '不显示路径',
        type: 'switch',
      },
      {
        describe: '父子节点不互相关联',
        field: 'componentProps.props.checkStrictly',
        label: '父级可选',
        type: 'switch',
      },
      {
        componentProps: {
          activeValue: false,
          inactiveValue: true,
        },
        field: 'componentProps.props.emitPath',
        label: '只获取选中节点',
        type: 'switch',
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
        describe: '配置选项',
        field: 'componentProps.options',
        label: '选项管理',
        layout: 'vertical',
        type: 'EOptionsEditor',
      },
      {
        componentProps: {
          ruleType: 'array',
        },
        describe: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        type: 'ERuleEditor',
      },
    ],
    event: [
      {
        describe: '选中节点变化时',
        type: 'change',
      },
      {
        describe: '	当失去焦点时触发',
        type: 'blur',
      },
      {
        describe: '当获得焦点时触发',
        type: 'focus',
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
