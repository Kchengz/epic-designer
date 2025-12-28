import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./row'),
  config: {
    attribute: [
      {
        props: {
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
        field: 'props.align',
        label: '垂直对齐方式',
        type: 'select',
      },
      {
        props: {
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
        field: 'props.justify',
        label: '水平排列方式',
        type: 'select',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.gutter',
        label: '栅格间距',
        type: 'number',
      },
      {
        field: 'children',
        label: '列编辑',
        type: 'EColEditor',
      },
      {
        field: 'props.hidden',
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
        props: {
          span: 12,
        },
      },
      {
        type: 'col',
        children: [],
        props: {
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
