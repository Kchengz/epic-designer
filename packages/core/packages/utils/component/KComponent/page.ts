import { type ComponentConfigModel } from '@k-designer/utils/pluginManager'

export default {
  component: async () => await import('./KPage/KPage.vue'),
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
