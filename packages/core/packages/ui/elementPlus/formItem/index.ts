import { type ComponentConfigModel } from '../../../utils/pluginManager'

export default {
  component: async () => await import('./formItem.vue'),
  defaultSchema: {
    label: '表单项',
    type: 'form-item',
    icon: 'icon-qiapian'
  },
  config: {
  }
} as ComponentConfigModel
