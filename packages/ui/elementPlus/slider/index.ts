import type { ComponentConfigModel } from '@epic-designer/utils';

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
        field: 'componentProps.defaultValue',
        label: '默认值',
        type: 'slider',
      },
      {
        componentProps: {
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
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.min',
        label: '最小值',
        onChange: ({ componentAttributes, value, values }) => {
          const componentIndex = componentAttributes.value.findIndex(
            (item) => item.field === 'componentProps.max',
          );
          const componentConfig = componentAttributes.value[componentIndex];
          componentConfig.componentProps = {
            min: value,
          };
          if ((values.componentProps.max ?? 0) < value) {
            values.componentProps.max = value;
          }
        },
        type: 'number',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.max',
        label: '最大值',
        onChange: ({ componentAttributes, value, values }) => {
          const componentIndex = componentAttributes.value.findIndex(
            (item) => item.field === 'componentProps.min',
          );
          const componentConfig = componentAttributes.value[componentIndex];
          componentConfig.componentProps = {
            max: value,
          };
          if ((values.componentProps.min ?? 0) > value) {
            values.componentProps.min = value;
          }
        },
        type: 'number',
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
        field: 'componentProps.showStops',
        label: '显示间断点',
        type: 'switch',
      },
      {
        field: 'componentProps.showTooltip',
        label: '提示信息',
        type: 'switch',
      },
      {
        field: 'componentProps.range',
        label: '开启选择范围',
        type: 'switch',
      },
      {
        field: 'componentProps.vertical',
        label: '垂直模式',
        type: 'switch',
      },
      {
        field: 'componentProps.height',
        label: '高度',
        show: ({ values }) => {
          return values.componentProps.vertical;
        },
        type: 'EInputSize',
      },
      {
        field: 'componentProps.showInput',
        label: '显示数字框',
        onChange: ({ value, values }) => {
          value ? (values.componentProps.showInputControls = true) : null;
        },
        type: 'switch',
      },
      {
        field: 'componentProps.showInputControls',
        label: '控制按钮',
        show: ({ values }) => values.componentProps.showInput,
        type: 'switch',
      },
      {
        componentProps: {
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
        field: 'componentProps.placement',
        label: '提示框位置',
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
