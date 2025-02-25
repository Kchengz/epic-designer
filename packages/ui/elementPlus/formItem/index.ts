import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  component: () => import('./formItem.vue'),
  config: {},
  defaultSchema: {
    label: '表单项',
    type: 'form-item',
  },
} as ComponentConfigModel;
