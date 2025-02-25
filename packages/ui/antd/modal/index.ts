import type { ComponentConfigModel } from '@epic-designer/utils';

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
  icon: 'epic-icon-xiala',
} as ComponentConfigModel;
