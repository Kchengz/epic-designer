import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: async () => await import('./index.vue'),
  config: {
    attribute: [
      {
        field: 'props.name',
        label: '页面名称',
        type: 'input',
      },
    ],
  },
  defaultSchema: {
    label: '页面',
    props: {},
    type: 'page',
    children: [],
  },
} as ComponentConfigModel;
