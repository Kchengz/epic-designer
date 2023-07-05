import { type ComponentConfigModel } from '@k-designer/utils/pluginManager'

export default {
  component: () => import('./formItem.vue'),
  defaultSchema: {
    label: '表单项',
    type: 'form-item',
    icon: 'icon-qiapian'
  },
  config: {}
} as ComponentConfigModel
