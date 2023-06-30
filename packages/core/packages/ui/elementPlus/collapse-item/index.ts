import { type ComponentConfigModel } from '../../../utils/pluginManager'
export default {
  component: async () => await import('./collapseItem'),
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
