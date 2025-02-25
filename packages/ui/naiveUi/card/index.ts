import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  component: () => import('./card'),
  config: {
    attribute: [
      {
        field: 'label',
        label: '标题',
        type: 'input',
      },
      {
        field: 'componentProps.hidden',
        label: '隐藏',
        type: 'switch',
      },
    ],
  },
  defaultSchema: {
    label: '卡片布局',
    type: 'card',
    children: [],
  },
  groupName: '布局',
  icon: 'icon--epic--wysiwyg-rounded',
  sort: 900,
} as ComponentConfigModel;
