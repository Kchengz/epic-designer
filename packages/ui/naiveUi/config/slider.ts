import { type ComponentConfigModel } from '../../../utils/pluginManager'
export default {
  component: async () => (await import('naive-ui/lib/slider')).NSlider,
  defaultSchema: {
    label: '滑块',
    type: 'slider',
    icon: 'icon-number',
    field: 'slider',
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
        label: '文字',
        type: 'input',
        field: 'label'
      },
      {
        label: '默认值',
        type: 'slider',
        field: 'componentProps.defaultValue'
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
        type: 'input',
        describe: '拖拽实时触发'
      },
      {
        type: 'change',
        describe: '拖拽结束改变值时'
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel
