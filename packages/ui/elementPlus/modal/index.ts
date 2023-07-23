import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component:  () => import('./modal'),
  defaultSchema: {
    label: '模态框',
    type: 'modal',
    icon: 'icon-xiala',
    children: []
  },
  config: {
    attribute: [
      {
        label: '标题',
        type: 'input',
        field: 'title'
      }
    ]
  }
} as ComponentConfigModel
