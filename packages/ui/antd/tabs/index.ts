import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: () => import('./tabs'),
  defaultSchema: {
    label: '标签页',
    type: 'tabs',
    icon: 'icon-xiala',
    children: [
      {
        type: 'tab-pane',
        children: [],
        id: 'sdfsdf',
        componentProps: {
          tab: '标签1',
          key: 123
        }
      },
      {
        type: 'tab-pane',
        children: [],
        id: 'sdfsdf2',
        componentProps: {
          tab: '标签2',
          key: 2
        }
      }
    ]
  },
  config: {
    attribute: [
      {
        label: '垂直对齐方式',
        type: 'input',
        field: 'componentProps.align'
      },
      {
        label: '水平排列方式',
        type: 'input',
        field: 'componentProps.justify'
      },
      {
        label: '栅格间距',
        type: 'input',
        field: 'componentProps.gutter'
      },
      {
        label: '自动换行',
        type: 'switch',
        field: 'componentProps.wrap'
      }

    ]
  }
} as ComponentConfigModel
