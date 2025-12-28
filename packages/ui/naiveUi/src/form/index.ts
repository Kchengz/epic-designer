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
        label: 'name',
        type: 'input',
      },
      {
        field: 'props.labelWidth',
        label: '标签宽度',
        type: 'EInputSize',
      },
      {
        field: 'props.labelPlacement',
        label: '标签位置',
        props: {
          clearable: true,
          options: [
            {
              label: '左边',
              value: 'left',
            },
            {
              label: '顶部',
              value: 'top',
            },
          ],
          placeholder: '请选择',
        },
        type: 'select',
      },
      {
        field: 'props.labelAlign',
        label: '标签对齐方式',
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
        type: 'select',
      },
      {
        field: 'props.requireMarkPlacement',
        label: '必填星号位置',
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
        type: 'select',
      },
      {
        field: 'props.size',
        label: '表单尺寸',
        props: {
          clearable: true,
          options: [
            {
              label: '大号',
              value: 'large',
            },
            {
              label: '中等',
              value: 'medium',
            },
            {
              label: '小型',
              value: 'small',
            },
          ],
          placeholder: '请选择',
        },
        type: 'select',
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
    label: '表单',
    props: {
      hideRequiredMark: false,
      labelCol: {
        span: 5,
      },
      labelWidth: 100,
      name: 'default',
      wrapperCol: {
        span: 19,
      },
    },
    type: 'form',
    children: [],
  },
  groupName: '表单',
  icon: 'icon--epic--list-alt-outline-rounded',
  sort: 600,
} as ComponentConfigModel;
