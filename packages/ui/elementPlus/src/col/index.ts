import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./col'),
  config: {
    attribute: [
      {
        field: 'props.span',
        label: '占位格数',
        type: 'number',
      },
    ],
  },
  defaultSchema: {
    props: {
      span: 6,
    },
    label: '栅格布局-列',
    type: 'col',
    children: [],
  },
} as ComponentConfigModel;
