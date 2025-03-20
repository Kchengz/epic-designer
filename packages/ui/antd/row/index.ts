import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./row'),
  config: {
    attribute: [
      {
        componentProps: {
          options: [
            {
              label: 'top',
              value: 'top',
            },
            {
              label: 'middle',
              value: 'middle',
            },
            {
              label: 'bottom',
              value: 'bottom',
            },
          ],
          placeholder: '请选择',
          style: { width: '100%' },
        },
        field: 'componentProps.align',
        label: '垂直对齐方式',
        type: 'select',
      },
      {
        componentProps: {
          options: [
            {
              label: 'start',
              value: 'start',
            },
            {
              label: 'end',
              value: 'end',
            },
            {
              label: 'center',
              value: 'center',
            },
            {
              label: 'space-around',
              value: 'space-around',
            },
            {
              label: 'space-between',
              value: 'space-between',
            },
          ],
          placeholder: '请选择',
          style: { width: '100%' },
        },
        field: 'componentProps.justify',
        label: '水平排列方式',
        type: 'select',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.gutter',
        label: '栅格间距',
        type: 'input',
      },
      {
        field: 'children',
        label: '列编辑',
        type: 'EColEditor',
      },
      {
        componentProps: {
          checkedValue: false,
          unCheckedValue: true,
        },
        field: 'componentProps.wrap',
        label: '不自动换行',
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
    label: '栅格布局',
    type: 'row',
    children: [
      {
        type: 'col',
        children: [],
        componentProps: {
          span: 12,
        },
      },
      {
        type: 'col',
        children: [],
        componentProps: {
          span: 12,
        },
      },
    ],
  },
  editConstraints: {
    childImmovable: true,
  },
  groupName: '布局',
  icon: 'icon--epic--width-normal-outline',
  sort: 800,
} as ComponentConfigModel;
