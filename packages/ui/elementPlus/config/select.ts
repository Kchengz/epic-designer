import { ComponentConfigModel } from '../../../utils/pluginManager'
import KSelect from '../src/KSelect'
export default {
  component: KSelect,
  defaultSchema: {
    label: '选择框',
    type: 'select',
    icon: 'icon-xiala',
    field: 'select',
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
        type: 'select',
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
    ]
  }
} as ComponentConfigModel
