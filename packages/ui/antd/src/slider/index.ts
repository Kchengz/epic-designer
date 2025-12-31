import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  bindModel: 'value',
  component: async () => (await import('ant-design-vue')).Slider,
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
        props: {
          style: {
            width: '100%',
          },
        },
        type: 'slider',
      },
      {
        field: 'props.size',
        label: '尺寸',
        props: {
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
        type: 'select',
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
        field: 'props.min',
        label: '最小值',
        props: {
          placeholder: '请输入',
        },
        type: 'number',
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
        field: 'props.vertical',
        label: '垂直模式',
        type: 'switch',
      },
      {
        field: 'props.dots',
        label: '显示刻度',
        type: 'switch',
      },
      // {
      //   label: "持续显示提示",
      //   type: "switch",
      //   field: "props.tooltipOpen",
      // },
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
