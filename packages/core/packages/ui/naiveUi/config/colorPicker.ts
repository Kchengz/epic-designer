import { type ComponentConfigModel } from '../../../utils/pluginManager'
export default {
  component: async () => (await import('naive-ui/lib/color-picker')).NColorPicker,
  defaultSchema: {
    label: '颜色选择器',
    type: 'color-picker',
    field: 'color-picker',
    icon: 'icon-write',
    input: true,
    componentProps: {
      type: 'color'
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
        type: 'color-picker',
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
        type: 'change',
        describe: '值变化时'
      }
    ],
    action: []
  },
  bindModel: 'value'
} as ComponentConfigModel
