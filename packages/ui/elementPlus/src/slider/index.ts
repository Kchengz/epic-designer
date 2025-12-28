import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: async () => (await import('element-plus')).ElSlider,
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
        field: 'props.defaultValue',
        label: '默认值',
        type: 'slider',
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
        label: '尺寸',
        type: 'select',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.min',
        label: '最小值',
        onChange: ({ componentAttributes, value, values }) => {
          const componentIndex = componentAttributes.value.findIndex(
            (item) => item.field === 'props.max',
          );
          const componentConfig = componentAttributes.value[componentIndex];
          componentConfig.props = {
            min: value,
          };
          if ((values.props.max ?? 0) < value) {
            values.props.max = value;
          }
        },
        type: 'number',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.max',
        label: '最大值',
        onChange: ({ componentAttributes, value, values }) => {
          const componentIndex = componentAttributes.value.findIndex(
            (item) => item.field === 'props.min',
          );
          const componentConfig = componentAttributes.value[componentIndex];
          componentConfig.props = {
            max: value,
          };
          if ((values.props.min ?? 0) > value) {
            values.props.min = value;
          }
        },
        type: 'number',
      },
      {
        props: {
          placeholder: '请输入',
        },
        field: 'props.step',
        label: '步长',
        type: 'number',
      },
      {
        field: 'props.showStops',
        label: '显示间断点',
        type: 'switch',
      },
      {
        field: 'props.showTooltip',
        label: '提示信息',
        type: 'switch',
      },
      {
        field: 'props.range',
        label: '开启选择范围',
        type: 'switch',
      },
      {
        field: 'props.vertical',
        label: '垂直模式',
        type: 'switch',
      },
      {
        field: 'props.height',
        label: '高度',
        show: ({ values }) => {
          return values.props.vertical;
        },
        type: 'EInputSize',
      },
      {
        field: 'props.showInput',
        label: '显示数字框',
        onChange: ({ value, values }) => {
          value ? (values.props.showInputControls = true) : null;
        },
        type: 'switch',
      },
      {
        field: 'props.showInputControls',
        label: '控制按钮',
        show: ({ values }) => values.props.showInput,
        type: 'switch',
      },
      {
        props: {
          options: [
            {
              label: 'top',
              value: 'top',
            },
            {
              label: 'top-start',
              value: 'top-start',
            },
            {
              label: 'top-end',
              value: 'top-end',
            },
            {
              label: 'bottom',
              value: 'bottom',
            },
            {
              label: 'bottom-start',
              value: 'bottom-start',
            },
            {
              label: 'bottom-end',
              value: 'bottom-end',
            },
            {
              label: 'left',
              value: 'left',
            },
            {
              label: 'left-start',
              value: 'left-start',
            },
            {
              label: 'left-end',
              value: 'left-end',
            },
            {
              label: 'right',
              value: 'right',
            },
            {
              label: 'right-start',
              value: 'right-start',
            },
            {
              label: 'right-end',
              value: 'right-end',
            },
          ],
        },
        defaultValue: 'bottom-start',
        field: 'props.placement',
        label: '提示框位置',
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
        props: {
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
    props: {
      placement: 'top-start',
      showTooltip: true,
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
