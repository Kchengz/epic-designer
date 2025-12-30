import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./tabs'),
  config: {
    attribute: [
      {
        field: 'props.tabPosition',
        label: '页签位置',
        props: {
          allowClear: true,
          options: [
            {
              label: 'top',
              value: 'top',
            },
            {
              label: 'right',
              value: 'right',
            },
            {
              label: 'bottom',
              value: 'bottom',
            },
            {
              label: 'left',
              value: 'left',
            },
          ],
          placeholder: '请选择',
        },
        type: 'select',
      },
      {
        field: 'props.animated',
        label: '切换动画',
        type: 'switch',
      },
      {
        field: 'props.tabBarGutter',
        label: '标签间隙',
        props: {
          placeholder: '请输入',
        },
        type: 'number',
      },
      {
        field: 'children',
        label: '页签管理',
        layout: 'vertical',
        type: 'ETabPaneEditor',
      },
      {
        field: 'props.size',
        label: '尺寸',
        props: {
          allowClear: true,
          options: [
            {
              label: 'large',
              value: 'large',
            },
            {
              label: 'middle',
              value: 'middle',
            },
            {
              label: 'small',
              value: 'small',
            },
          ],
          placeholder: '请选择',
        },
        type: 'select',
      },
      {
        field: 'props.hidden',
        label: '隐藏',
        type: 'switch',
      },
    ],
  },
  defaultSchema: {
    label: '标签页',
    props: {
      defaultValue: '标签1',
    },
    type: 'tabs',
    children: [
      {
        label: '标签1',
        type: 'tab-pane',
        children: [],
      },
      {
        label: '标签2',
        type: 'tab-pane',
        children: [],
      },
    ],
  },
  editConstraints: {
    childImmovable: true,
  },
  groupName: '布局',
  icon: 'icon--epic--layout-tabs',
} as ComponentConfigModel;
