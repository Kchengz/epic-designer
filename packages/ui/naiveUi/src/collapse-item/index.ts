import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./collapseItem'),
  config: {
    attribute: [],
  },
  defaultSchema: {
    label: '折叠项',
    type: 'collapse-item',
    children: [],
  },
} as ComponentConfigModel;
