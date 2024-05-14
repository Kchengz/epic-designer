import { type ComponentConfigModel } from '@epic-designer/utils'
export default {
  component:  () => import('./modal'),
  defaultSchema: {
    label: '模态框',
    type: 'modal',
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
