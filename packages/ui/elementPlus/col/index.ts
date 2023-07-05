import { type ComponentConfigModel } from '@k-designer/utils/pluginManager'
export default {
  component: () => import('./col'),
  defaultSchema: {
    label: '栅格布局-列',
    type: 'col',
    icon: 'icon-xiala',
    children: [],
    componentProps: {
      span: 6
    }
  },
  config: {
    attribute: [
      {
        label: '占位格数',
        type: 'number',
        field: 'componentProps.span'
      }
    ]
  }
} as ComponentConfigModel
