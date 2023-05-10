import { ComponentConfigModel } from '../../../utils/pluginManager'
import { ElInputNumber } from 'element-plus'
export default {
  // component: async () => (await import("element-plus")).ElInputNumber,
  component: ElInputNumber,
  defaultSchema: {
    label: '数字输入框',
    type: 'number',
    icon: 'icon-number',
    field: 'number',
    input: true,
    componentProps: {
      placeholder: '请输入'
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
        type: 'number',
        field: 'componentProps.defaultValue'
      },
      {
        label: '占位内容',
        type: 'input',
        field: 'componentProps.placeholder'
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
  }
} as ComponentConfigModel
