import { ComponentConfigModel } from "../../utils/pluginManager";
export default {
  component: () => import('./src/KCol'),
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
} as ComponentConfigModel;
