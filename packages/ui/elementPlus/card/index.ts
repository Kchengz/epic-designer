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
        componentProps: {
          clearable: true,
          options: [
            {
              label: 'always',
              value: 'always',
            },
            {
              label: 'hover',
              value: 'hover',
            },
            {
              label: 'never',
              value: 'never',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.shadow',
        label: '阴影时机',
        type: 'select',
      },
      {
        field: 'componentProps.hidden',
        label: '隐藏',
        type: 'switch',
      },
    ],
  },
  defaultSchema: {
    componentProps: {},
    label: '卡片布局',
    type: 'card',
    children: [],
  },
  groupName: '布局',
  icon: 'icon--epic--wysiwyg-rounded',
  sort: 700,
} as ComponentConfigModel;
