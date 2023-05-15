import { type ComponentConfigModel } from '../../../utils/pluginManager'
export default {
  component: async () => await import('ant-design-vue/lib/time-picker'),
  defaultSchema: {
    label: '时间选择器',
    type: 'time',
    icon: 'icon-xiala',
    field: 'time',
    input: true,
    componentProps: {
      valueFormat: 'HH:mm:ss'
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
        type: 'time',
        field: 'componentProps.defaultValue'
      },
      {
        label: '可清空',
        type: 'switch',
        field: 'componentProps.allowClear'
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
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel
