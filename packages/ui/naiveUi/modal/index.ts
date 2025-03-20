import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./modal.vue'),
  config: {
    attribute: [
      {
        field: 'title',
        label: '标题',
        type: 'input',
      },
    ],
  },
  defaultSchema: {
    label: '模态框',
    type: 'modal',
    children: [],
  },
} as ComponentConfigModel;
