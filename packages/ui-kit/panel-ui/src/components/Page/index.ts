import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: async () => await import('./index.vue'),
  config: {
    attribute: [
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.name',
        label: '页面名称',
        type: 'input',
      },
    ],
  },
  defaultSchema: {
    props: {},
    label: '页面',
    type: 'page',
    children: [],
  },
} as ComponentConfigModel;
