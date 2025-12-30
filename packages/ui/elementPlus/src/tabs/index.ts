import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./tabs'),
  config: {
    action: [],
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
        field: 'props.type',
        label: '类型',
        props: {
          allowClear: true,
          options: [
            {
              label: '默认',
              value: '',
            },
            {
              label: '卡片',
              value: 'card',
            },
            {
              label: '边框',
              value: 'border-card',
            },
          ],
          radioButton: true,
        },
        type: 'radio',
      },
      {
        field: 'children',
        label: '页签管理',
        layout: 'vertical',
        type: 'ETabPaneEditor',
      },
      {
        field: 'props.hidden',
        label: '隐藏',
        type: 'switch',
      },
    ],
    event: [
      {
        description: 'tab 被选中时触发',
        type: 'tabClick',
      },
      {
        description: 'activeName 改变时触发',
        type: 'tabChange',
      },
      {
        description: '点击 tab 新增按钮时触发',
        type: 'tabRemove',
      },
      {
        description: '点击 tab 新增按钮时触发',
        type: 'tabAdd',
      },
    ],
  },
  defaultSchema: {
    label: '标签页',
    props: {
      defaultValue: '标签1',
      type: '',
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
