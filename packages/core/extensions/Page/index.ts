import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'

export default {
  component: async () => await import('./index.vue'),
  defaultSchema: {
    label: '页面',
    type: 'page',
    componentProps: {

    },
    children: []
  },
  config: {
    attribute: [
      {
        label: '页面名称',
        type: 'input',
        field: 'name'
      }
    ]
  }
} as ComponentConfigModel
