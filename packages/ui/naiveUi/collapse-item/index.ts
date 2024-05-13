import { type ComponentConfigModel } from '@epic-designer/utils'
export default {
  component: () => import('./collapseItem'),
  defaultSchema: {
    label: '折叠项',
    type: 'collapse-item',
    children: []
  },
  config: {
    attribute: []
  }
} as ComponentConfigModel
