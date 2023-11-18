import { type ComponentConfigModel } from '@epic-designer/utils'

export default {
  component: () => import('./formItem.vue'),
  defaultSchema: {
    label: '表单项',
    type: 'form-item',
    icon: 'epic-icon-qiapian'
  },
  config: {
  }
} as ComponentConfigModel
