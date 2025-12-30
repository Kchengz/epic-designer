import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./tabPane'),
  config: {
    attribute: [
      {
        field: 'props.tab',
        label: '标签名称',
        type: 'input',
      },
    ],
  },
  defaultSchema: {
    label: '标签',
    type: 'tab-pane',
    children: [],
  },
  editConstraints: {
    locked: true,
  },
} as ComponentConfigModel;
