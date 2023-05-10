import { ComponentConfigModel } from '../../../utils/pluginManager'
export default {
  component: async () => await import('ant-design-vue/lib/checkbox/Group'),
  defaultSchema: {
    label: '多选框',
    type: 'checkbox',
    icon: 'icon-duoxuan1',
    field: 'checkbox',
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
      ]
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
        label: '默认值',
        type: 'checkbox',
        field: 'componentProps.defaultValue'
      },
      {
        label: '文字',
        type: 'input',
        field: 'label'
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel
