import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: () => import('./collapse'),
  defaultSchema: {
    label: '折叠面板',
    type: 'collapse',
    icon: 'icon-xiala',
    children: [
      {
        type: 'collapse-item',
        children: [],
        componentProps: {
          span: 12
        },
        id: 'g062zikd2jk001'
      },
      {
        type: 'collapse-item',
        children: [],
        componentProps: {
          span: 12
        },
        id: 'gy5z9jtfb3s001'
      }
    ]
  },
  config: {
    attribute: [
      {
        label: '折叠项管理',
        type: 'EColEditor',
        field: 'children'
      },
      {
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
      }
    ]
  }
} as ComponentConfigModel
