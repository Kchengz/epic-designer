import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./form.vue'),
  config: {
    action: [
      {
        description: '获取表单数据',
        type: 'getData',
      },
      {
        description: '设置表单数据',
        type: 'setData',
      },
      {
        description: '校验表单',
        type: 'validate',
      },
    ],
    attribute: [
      {
        field: 'props.name',
        label: 'Name',
        type: 'input',
      },
      {
        props: {
          clearable: true,
          options: [
            {
              label: '左边',
              value: 'left',
            },
            {
              label: '右边',
              value: 'right',
            },
            {
              label: '顶部',
              value: 'top',
            },
          ],
          radioButton: true,
        },
        field: 'props.label-position',
        label: '标签位置',
        type: 'radio',
      },
      {
        field: 'props.labelWidth',
        label: '标签宽度',
        type: 'EInputSize',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.labelSuffix',
        label: '标签后缀',
        type: 'input',
      },

      {
        props: {
          clearable: true,
          options: [
            {
              label: '大号',
              value: 'large',
            },
            {
              label: '中等',
              value: 'default',
            },
            {
              label: '小型',
              value: 'small',
            },
          ],
          placeholder: '请选择',
        },
        field: 'props.size',
        label: '表单尺寸',
        type: 'select',
      },
      {
        props: {
          clearable: true,
          options: [
            {
              label: '左边',
              value: 'left',
            },
            {
              label: '右边',
              value: 'right',
            },
          ],
          placeholder: '请选择',
        },
        field: 'props.require-asterisk-position',
        label: '星号位置',
        type: 'select',
      },
      {
        field: 'props.inline-message',
        label: '行内展示校验信息',
        type: 'switch',
      },
      {
        field: 'props.status-icon',
        label: '校验反馈图标',
        type: 'switch',
      },
      {
        field: 'props.scroll-to-error',
        label: '滚动校验错误处',
        type: 'switch',
      },
      {
        field: 'props.inline',
        label: '行内模式',
        type: 'switch',
      },
      {
        field: 'props.disabled',
        label: '禁用',
        type: 'switch',
      },
      {
        field: 'props.hidden',
        label: '隐藏',
        type: 'switch',
      },
    ],
  },
  defaultSchema: {
    props: {
      'label-position': 'left',
      labelWidth: '100px',
      name: 'default',
    },
    label: '表单',
    type: 'form',
    children: [],
  },
  groupName: '表单',
  icon: 'icon--epic--list-alt-outline-rounded',
  sort: 600,
} as ComponentConfigModel;
