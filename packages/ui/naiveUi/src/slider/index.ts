import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'value',
  component: async () => (await import('naive-ui')).NSlider,
  config: {
    attribute: [
      {
        field: 'field',
        label: '数据字段',
        type: 'EpField',
      },
      {
        field: 'label',
        label: '标题',
        type: 'input',
      },
      {
        field: 'props.defaultValue',
        label: '默认值',
        type: 'slider',
      },
      {
        field: 'props.keyboard',
        label: '键盘可控',
        type: 'switch',
      },
      {
        changeSync: true,
        field: 'props.range',
        label: '范围选择',
        onChange: ({ value, values }) => {
          values.props.defaultValue = value ? [0, 100] : 0;
        },
        type: 'switch',
      },
      {
        field: 'props.reverse',
        label: '倒转轨道',
        type: 'switch',
      },
      {
        field: 'props.step',
        label: '步长',
        props: {
          placeholder: '请输入',
        },
        type: 'number',
      },
      {
        field: 'props.showTooltip',
        label: '一直显示提示',
        type: 'switch',
      },
      {
        field: 'props.vertical',
        label: '垂直模式',
        type: 'switch',
      },
      {
        field: 'props.max',
        label: '最大值',
        props: {
          placeholder: '请输入',
        },
        type: 'number',
      },
      {
        field: 'props.min',
        label: '最小值',
        props: {
          placeholder: '请输入',
        },
        type: 'number',
      },
      {
        field: 'props.placement',
        label: '弹出位置',
        props: {
          clearable: true,
          options: [
            {
              label: 'top-start',
              value: 'top-start',
            },
            {
              label: 'top',
              value: 'top',
            },
            {
              label: 'top-end',
              value: 'top-end',
            },
            {
              label: 'right-start',
              value: 'right-start',
            },
            {
              label: 'right',
              value: 'right',
            },
            {
              label: 'right-end',
              value: 'right-end',
            },
            {
              label: 'bottom-start',
              value: 'bottom-start',
            },
            {
              label: 'bottom',
              value: 'bottom',
            },
            {
              label: 'bottom-end',
              value: 'bottom-end',
            },
            {
              label: 'left-start',
              value: 'left-start',
            },
            {
              label: 'left',
              value: 'left',
            },
            {
              label: 'left-end',
              value: 'left-end',
            },
          ],
          placeholder: '请选择',
        },
        type: 'select',
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
      {
        description: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        props: {
          ruleType: 'number',
        },
        type: 'ERuleEditor',
      },
    ],
    event: [
      {
        description: '拖拽实时触发',
        type: 'input',
      },
      {
        description: '拖拽结束改变值时',
        type: 'change',
      },
    ],
  },
  defaultSchema: {
    field: 'slider',
    input: true,
    label: '滑块',
    props: {
      placement: 'top-start',
    },
    type: 'slider',
  },
  groupName: '表单',
  icon: 'icon--epic--switches',
  sort: 930,
} as ComponentConfigModel;
