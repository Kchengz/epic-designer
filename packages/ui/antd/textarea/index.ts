import { type ComponentConfigModel } from '@k-designer/utils/pluginManager'
export default {
  component: async () => (await import('ant-design-vue/lib/input')).Textarea,
  defaultSchema: {
    label: '文本域',
    type: 'textarea',
    field: 'textarea',
    icon: 'icon-edit',
    input: true
  },
  config: {
    attribute: [
      {
        label: '字段名',
        type: 'input',
        field: 'field'
      },
      {
        label: '标题',
        type: 'input',
        field: 'label'
      },
      {
        label: '默认值',
        type: 'input',
        field: 'componentProps.defaultValue'
      },
      {
        label: '最小行数',
        type: 'number',
        field: 'componentProps.autoSize.minRows'
      },
      {
        label: '最大行数',
        type: 'number',
        field: 'componentProps.autoSize.maxRows'
      },
      {
        label: '可清除',
        type: 'switch',
        field: 'componentProps.allowClear'
      },
      {
        label: '显示',
        type: 'switch',
        field: 'show'
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
        type: 'input',
        describe: '输入值'
      },
      {
        type: 'change',
        describe: '值修改'
      },
      {
        type: 'pressEnter',
        describe: '按下回车的回调'
      },
      {
        type: 'focus',
        describe: '获取焦点'
      },
      {
        type: 'blur',
        describe: '失去焦点'
      }
    ],
    action: [
      {
        type: 'focus',
        describe: '使 input 获取焦点'
      },
      {
        type: 'blur',
        describe: '使 input 失去焦点'
      },
      {
        type: 'select',
        describe: '选中 input 中的文字'
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel
