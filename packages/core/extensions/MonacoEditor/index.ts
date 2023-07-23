import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: async () => await import('./index.vue'),
  defaultSchema: {
    label: '代码编辑器',
    type: 'monacoEditor',
    field: 'monacoEditor',
    icon: 'icon-write',
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
        type: 'monacoEditor',
        field: 'componentProps.defaultValue'
      }
    ]
  },
  bindModel: 'model-value'
} as ComponentConfigModel
