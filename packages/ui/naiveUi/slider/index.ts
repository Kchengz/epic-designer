import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  bindModel: 'value',
  component: async () => (await import('naive-ui/lib/slider')).NSlider,
  config: {
    attribute: [
      {
        field: 'field',
        label: '字段名',
        type: 'input',
      },
      {
        field: 'label',
        label: '标题',
        type: 'input',
      },
      {
        field: 'componentProps.defaultValue',
        label: '默认值',
        type: 'slider',
      },
      {
        field: 'componentProps.keyboard',
        label: '键盘可控',
        type: 'switch',
      },
      {
        changeSync: true,
        field: 'componentProps.range',
        label: '范围选择',
        onChange: ({ value, values }) => {
          values.componentProps.defaultValue = value ? [0, 100] : 0;
        },
        type: 'switch',
      },
      {
        field: 'componentProps.reverse',
        label: '倒转轨道',
        type: 'switch',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.step',
        label: '步长',
        type: 'number',
      },
      {
        field: 'componentProps.showTooltip',
        label: '一直显示提示',
        type: 'switch',
      },
      {
        field: 'componentProps.vertical',
        label: '垂直模式',
        type: 'switch',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.max',
        label: '最大值',
        type: 'number',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.min',
        label: '最小值',
        type: 'number',
      },
      {
        componentProps: {
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
        field: 'componentProps.placement',
        label: '弹出位置',
        type: 'select',
      },
      {
        field: 'componentProps.disabled',
        label: '禁用',
        type: 'switch',
      },
      {
        field: 'componentProps.hidden',
        label: '隐藏',
        type: 'switch',
      },
      {
        componentProps: {
          ruleType: 'number',
        },
        description: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
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
    componentProps: {
      placement: 'top-start',
    },
    field: 'slider',
    input: true,
    label: '滑块',
    type: 'slider',
  },
  groupName: '表单',
  icon: 'icon--epic--switches',
  sort: 930,
} as ComponentConfigModel;
