import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: () => import('./collapseItem'),
  defaultSchema: {
    label: '折叠项',
    type: 'collapse-item',
    icon: 'icon-xiala',
    children: []
  },
  config: {
    attribute: []
  }
} as ComponentConfigModel
