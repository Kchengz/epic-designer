import type { ComponentConfigModel } from '@epic-designer/types';

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
          allowClear: true,
          options: [
            {
              label: 'default',
              value: 'default',
            },
            {
              label: 'small',
              value: 'small',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        componentProps: {
          checkedValue: false,
          unCheckedValue: true,
        },
        field: 'componentProps.bordered',
        label: '无边框',
        type: 'switch',
      },
      {
        field: 'componentProps.hoverable',
        label: '鼠标悬停阴影',
        type: 'switch',
      },
      {
        field: 'componentProps.loading',
        label: '加载状态',
        type: 'switch',
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
  sort: 700,
} as ComponentConfigModel;
