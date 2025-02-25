import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  component: () => import('./col'),
  config: {
    attribute: [
      {
        field: 'componentProps.span',
        label: '占位格数',
        type: 'number',
      },
    ],
  },
  defaultSchema: {
    componentProps: {
      span: 6,
    },
    label: '栅格布局-列',
    type: 'col',
    children: [],
  },
} as ComponentConfigModel;
