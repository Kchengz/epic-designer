import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./tabPane.vue'),
  config: {
    attribute: [
      {
        field: 'props.tab',
        label: '垂直对齐方式',
        type: 'input',
      },
    ],
  },
  defaultSchema: {
    label: '标签内容',
    props: {
      tab: '标签',
    },
    type: 'tab-pane',
    children: [],
  },
  editConstraints: {
    locked: true,
  },
} as ComponentConfigModel;
