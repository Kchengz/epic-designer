import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./collapse'),
  config: {
    attribute: [
      {
        field: 'children',
        label: '折叠项管理',
        type: 'EColEditor',
      },
      {
        field: 'componentProps.hidden',
        label: '隐藏',
        type: 'switch',
      },
    ],
  },
  defaultSchema: {
    label: '折叠面板',
    type: 'collapse',
    children: [
      {
        type: 'collapse-item',
        children: [],
        componentProps: {
          span: 12,
        },
        id: 'g062zikd2jk001',
      },
      {
        type: 'collapse-item',
        children: [],
        componentProps: {
          span: 12,
        },
        id: 'gy5z9jtfb3s001',
      },
    ],
  },
  icon: 'epic-icon-xiala',
} as ComponentConfigModel;
