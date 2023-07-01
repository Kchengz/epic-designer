import { type ComponentConfigModel } from '@k-designer/utils/pluginManager'
export default {
  component: async () => (await import('element-plus')).ElCascader,
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
      placeholder: '请选择'
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
        type: 'KRuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      }
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
  }
} as ComponentConfigModel
