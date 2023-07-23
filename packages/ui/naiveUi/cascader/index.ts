import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: async () => (await import('naive-ui/lib/cascader')).NCascader,
  defaultSchema: {
    label: '级联选择器',
    type: 'cascader',
    icon: 'icon-number',
    field: 'cascader',
    input: true,
    componentProps: {
      options: [
        {
          label: '选项1',
          value: '选项1'
        },
        {
          label: '选项2',
          value: '选项2'
        }
      ],
      placeholder: '请选择',
      cascade: false,
      showPath: true,
      size: 'medium',
      placement: 'bottom-start'
    }
  },
  config: {
    attribute: [
      {
        label: '字段名',
        type: 'input',
        field: 'field'
      },
      {
        label: '文字',
        type: 'input',
        field: 'label'
      },
      {
        label: '默认值',
        type: 'cascader',
        field: 'componentProps.defaultValue'
      },
      {
        label: '占位内容',
        type: 'input',
        field: 'componentProps.placeholder'
      },
      {
        label: '尺寸',
        type: 'select',
        field: 'componentProps.size',
        componentProps: {
          options: [
            {
              label: 'tiny',
              value: 'tiny'
            },
            {
              label: 'small',
              value: 'small'
            },
            {
              label: 'medium',
              value: 'medium'
            },
            {
              label: 'large',
              value: 'large'
            }
          ]
        }
      },
      {
        label: '多选',
        type: 'switch',
        field: 'componentProps.multiple'
      },
      {
        label: '多选时关联选项',
        type: 'switch',
        field: 'componentProps.cascade',
        show: ({values})=> values.componentProps.multiple
      },
      {
        label: '分割符',
        type: 'switch',
        field: 'componentProps.separator',
      },
      {
        label: '显示选项路径',
        type: 'switch',
        field: 'componentProps.showPath',
      },
      {
        label: '可搜索',
        type: 'switch',
        field: 'componentProps.filterable'
      },
      {
        label: '菜单弹出的位置',
        type: 'select',
        field: 'componentProps.placement',
        componentProps: {
          options: [
            {
              label: 'top-start',
              value: 'top-start'
            },
            {
              label: 'top',
              value: 'top'
            },
            {
              label: 'top-end',
              value: 'top-end'
            },
            {
              label: 'right-start',
              value: 'right-start'
            },
            {
              label: 'right',
              value: 'right'
            },
            {
              label: 'right-end',
              value: 'right-end'
            },
            {
              label: 'bottom-start',
              value: 'bottom-start'
            },
            {
              label: 'bottom',
              value: 'bottom'
            },
            {
              label: 'bottom-end',
              value: 'bottom-end'
            },
            {
              label: 'left-start',
              value: 'left-start'
            },
            {
              label: 'left',
              value: 'left'
            },
            {
              label: 'left-end',
              value: 'left-end'
            }
          ]
        }
      },
      {
        label: '最大tag显示数',
        type: 'number',
        field: 'componentProps.maxTagCount',
        show: ({values})=>values.componentProps.multiple
      },
      {
        label: '可清空',
        type: 'switch',
        field: 'componentProps.clearable'
      },
      {
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
      },
      {
        label: '禁用',
        type: 'switch',
        field: 'componentProps.disabled'
      },
      {
        label: '表单校验',
        type: 'ERuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        componentProps: {
          tree: true,
        },
        describe: "配置选项",
      },
    ],
    event: [
      {
        type: 'change',
        describe: '选中节点变化时'
      },
      {
        type: 'close',
        describe: '面板的关闭事件'
      }
    ],
    action: [
      {
        type: 'getCheckedNodes',
        describe: '获取当前选中节点'
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel
