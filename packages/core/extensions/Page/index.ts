import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  component: async () => await import('./index.vue'),
  config: {
    attribute: [
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.name',
        label: '页面名称',
        type: 'input',
      },
    ],
  },
  defaultSchema: {
    componentProps: {},
    label: '页面',
    type: 'page',
    children: [],
  },
} as ComponentConfigModel;
