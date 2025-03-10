import type { ComponentConfigModel } from '@epic-designer/utils';

export default {
  bindModel: 'value',
  component: async () => (await import('ant-design-vue')).Slider,
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
        componentProps: {
          style: {
            width: '100%',
          },
        },
        field: 'componentProps.defaultValue',
        label: '默认值',
        type: 'slider',
      },
      {
        componentProps: {
          allowClear: true,
          options: [
            {
              label: '大号',
              value: 'large',
            },
            {
              label: '中等',
              value: 'middle',
            },
            {
              label: '小型',
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
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.min',
        label: '最小值',
        type: 'number',
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
        field: 'componentProps.vertical',
        label: '垂直模式',
        type: 'switch',
      },
      {
        field: 'componentProps.dots',
        label: '显示刻度',
        type: 'switch',
      },
      // {
      //   label: "持续显示提示",
      //   type: "switch",
      //   field: "componentProps.tooltipOpen",
      // },
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
        description: '与mouseup触发时机一致',
        type: 'afterChange',
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
    type: 'slider',
  },
  groupName: '表单',
  icon: 'icon--epic--switches',
  sort: 930,
} as ComponentConfigModel;
